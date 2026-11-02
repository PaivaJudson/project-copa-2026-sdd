using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Time.Testing;
using PortalCopa26.Models;
using PortalCopa26.Services.Simulador;
using PortalCopa26.Tests.Data;
using PortalCopa26.Tests.Infra;

namespace PortalCopa26.Tests.Services;

public sealed class SimuladorServiceTests : IDisposable
{
    private readonly BancoEmMemoria _banco = new();
    private readonly FakeTimeProvider _relogio = new(new DateTimeOffset(2026, 6, 1, 12, 0, 0, TimeSpan.Zero));
    private readonly SimuladorService _servico;
    private readonly int _jogoId;
    private readonly int _outroJogoId;

    public SimuladorServiceTests()
    {
        _servico = new SimuladorService(_banco.Factory, _relogio);
        using var db = _banco.NovoContexto();
        _jogoId = EsquemaTests.CriarJogoMinimo(db).Id;
        var outro = new Jogo { Fase = FaseTorneio.TerceiroLugar, NumeroNaFase = 1, DataHora = new DateTime(2026, 7, 18, 18, 0, 0), EstadioId = db.Estadios.First().Id };
        db.Jogos.Add(outro);
        db.SaveChanges();
        _outroJogoId = outro.Id;
    }

    public void Dispose() => _banco.Dispose();

    [Fact]
    public async Task Criar_grava_nome_e_datas()
    {
        var simulacao = await _servico.CriarAsync("  Meu palpite ");

        Assert.True(simulacao.Id > 0);
        Assert.Equal("Meu palpite", simulacao.Nome);
        Assert.Equal(_relogio.GetUtcNow().UtcDateTime, simulacao.CriadaEm);
        Assert.Equal(simulacao.CriadaEm, simulacao.AtualizadaEm);
    }

    [Theory]
    [InlineData("")]
    [InlineData("   ")]
    public async Task Nome_vazio_e_rejeitado_e_nada_e_gravado(string nome)
    {
        await Assert.ThrowsAsync<ArgumentException>(() => _servico.CriarAsync(nome));

        Assert.Empty(await _servico.ListarAsync());
    }

    [Fact]
    public async Task Salvar_placar_associa_ao_jogo_atualiza_data_e_nao_altera_jogo_oficial()
    {
        var simulacao = await _servico.CriarAsync("Meu palpite");
        _relogio.Advance(TimeSpan.FromMinutes(5));

        await _servico.SalvarPlacarAsync(simulacao.Id, _jogoId, 2, 1);

        var salva = await _servico.ObterAsync(simulacao.Id);
        var placar = Assert.Single(salva!.Jogos);
        Assert.Equal((_jogoId, 2, 1), (placar.JogoId, placar.GolsMandante, placar.GolsVisitante));
        Assert.Equal(_relogio.GetUtcNow().UtcDateTime, salva.AtualizadaEm);

        await using var db = _banco.NovoContexto();
        var oficial = await db.Jogos.SingleAsync(j => j.Id == _jogoId);
        Assert.Null(oficial.GolsMandante);
        Assert.Null(oficial.GolsVisitante);
    }

    [Fact]
    public async Task Novo_placar_substitui_o_anterior()
    {
        var simulacao = await _servico.CriarAsync("Meu palpite");

        await _servico.SalvarPlacarAsync(simulacao.Id, _jogoId, 2, 1);
        await _servico.SalvarPlacarAsync(simulacao.Id, _jogoId, 0, 0);

        var placar = Assert.Single((await _servico.ObterAsync(simulacao.Id))!.Jogos);
        Assert.Equal((0, 0), (placar.GolsMandante, placar.GolsVisitante));
    }

    [Theory]
    [InlineData(-1, 0)]
    [InlineData(0, -2)]
    public async Task Gols_negativos_sao_rejeitados(int gm, int gv)
    {
        var simulacao = await _servico.CriarAsync("Meu palpite");

        await Assert.ThrowsAsync<ArgumentOutOfRangeException>(() => _servico.SalvarPlacarAsync(simulacao.Id, _jogoId, gm, gv));

        Assert.Empty((await _servico.ObterAsync(simulacao.Id))!.Jogos);
    }

    [Fact]
    public async Task Jogo_inexistente_e_rejeitado()
    {
        var simulacao = await _servico.CriarAsync("Meu palpite");

        await Assert.ThrowsAsync<InvalidOperationException>(() => _servico.SalvarPlacarAsync(simulacao.Id, 9999, 1, 0));

        Assert.Empty((await _servico.ObterAsync(simulacao.Id))!.Jogos);
    }

    [Fact]
    public async Task Simulacoes_mantem_placares_independentes()
    {
        var a = await _servico.CriarAsync("A");
        var b = await _servico.CriarAsync("B");

        await _servico.SalvarPlacarAsync(a.Id, _jogoId, 3, 0);
        await _servico.SalvarPlacarAsync(b.Id, _jogoId, 1, 1);

        Assert.Equal(3, Assert.Single((await _servico.ObterAsync(a.Id))!.Jogos).GolsMandante);
        Assert.Equal(1, Assert.Single((await _servico.ObterAsync(b.Id))!.Jogos).GolsMandante);
    }

    [Fact]
    public async Task Excluir_remove_a_simulacao_e_seus_placares_sem_afetar_as_demais()
    {
        var a = await _servico.CriarAsync("A");
        var b = await _servico.CriarAsync("B");
        await _servico.SalvarPlacarAsync(a.Id, _jogoId, 1, 0);
        await _servico.SalvarPlacarAsync(a.Id, _outroJogoId, 2, 2);
        await _servico.SalvarPlacarAsync(b.Id, _jogoId, 0, 1);

        Assert.True(await _servico.ExcluirAsync(a.Id));

        Assert.Null(await _servico.ObterAsync(a.Id));
        await using var db = _banco.NovoContexto();
        Assert.False(await db.SimulacaoJogos.AnyAsync(sj => sj.SimulacaoId == a.Id));
        Assert.Single((await _servico.ObterAsync(b.Id))!.Jogos);
        Assert.False(await _servico.ExcluirAsync(a.Id));
    }

    [Fact]
    public async Task Listar_ordena_pela_alteracao_mais_recente()
    {
        var a = await _servico.CriarAsync("A");
        _relogio.Advance(TimeSpan.FromMinutes(1));
        await _servico.CriarAsync("B");
        _relogio.Advance(TimeSpan.FromMinutes(1));
        await _servico.SalvarPlacarAsync(a.Id, _jogoId, 1, 0);

        Assert.Equal(["A", "B"], (await _servico.ListarAsync()).Select(s => s.Nome));
    }
}
