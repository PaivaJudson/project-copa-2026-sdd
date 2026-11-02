using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PortalCopa26.Data.Seed;
using PortalCopa26.Models;
using PortalCopa26.Tests.Infra;

namespace PortalCopa26.Tests.Seed;

public class SeedDataTests
{
    private static SeedData CriarSeed(BancoEmMemoria banco, LoggerDeCaptura<SeedData> logger, string? pasta = null) =>
        new(banco.Factory, Options.Create(new SeedOptions { FontesPath = pasta ?? Fontes.Pasta }), logger);

    [Fact]
    public async Task Carga_completa_grava_os_dados_oficiais()
    {
        using var banco = new BancoEmMemoria();
        var logger = new LoggerDeCaptura<SeedData>();

        await CriarSeed(banco, logger).ExecutarAsync();

        await using var db = banco.NovoContexto();
        Assert.Equal(12, await db.Grupos.CountAsync());
        Assert.True(await db.Grupos.AllAsync(g => g.Selecoes.Count == 4));
        Assert.Equal(48, await db.Selecoes.CountAsync());
        Assert.True(await db.Selecoes.AllAsync(s => s.Jogadores.Any()));
        Assert.Equal(1238, await db.Jogadores.CountAsync());
        Assert.Equal(16, await db.Estadios.CountAsync());
        Assert.Equal(104, await db.Jogos.CountAsync());
        Assert.Equal(98, await db.RankingFifa.CountAsync());
        Assert.True(await db.Jogos.AllAsync(j => j.GolsMandante == null && j.GolsVisitante == null));

        var brasil = await db.Selecoes.Include(s => s.Grupo).SingleAsync(s => s.Nome == "Brasil");
        Assert.Equal(('C', 1, true, "Carlo Ancelotti", "BRA"), (brasil.Grupo!.Letra, brasil.Pote, brasil.CabecaDeChave, brasil.Tecnico, brasil.CodigoFifa));

        var argentina = await db.RankingFifa.Include(r => r.Selecao).SingleAsync(r => r.Posicao == 1);
        Assert.Equal(("Argentina", 1877.72), (argentina.Selecao!.Nome, argentina.Pontos));
        Assert.Null((await db.RankingFifa.SingleAsync(r => r.NomeSelecao == "Itália")).SelecaoId);
        Assert.Null(await db.Selecoes.Where(s => s.Nome == "Bósnia e Herzegovina").Select(s => s.Ranking).SingleAsync());

        var primeiro = await db.Jogos.Include(j => j.Mandante).Include(j => j.Visitante).Include(j => j.Estadio).Include(j => j.Grupo)
            .SingleAsync(j => j.Fase == FaseTorneio.Grupos && j.NumeroNaFase == 1);
        Assert.Equal(("México", "África do Sul", "Estádio Azteca", 'A', new DateTime(2026, 6, 11, 16, 0, 0)),
            (primeiro.Mandante!.Nome, primeiro.Visitante!.Nome, primeiro.Estadio!.Nome, primeiro.Grupo!.Letra, primeiro.DataHora));

        Assert.Contains("Seed concluído: 12 grupos, 48 seleções, 1238 jogadores, 16 estádios, 104 jogos, 98 posições no ranking", logger.Mensagens);
    }

    [Fact]
    public async Task Segunda_execucao_nao_duplica_e_registra_seed_ignorado()
    {
        using var banco = new BancoEmMemoria();
        var logger = new LoggerDeCaptura<SeedData>();
        var seed = CriarSeed(banco, logger);

        await seed.ExecutarAsync();
        await seed.ExecutarAsync();

        await using var db = banco.NovoContexto();
        Assert.Equal(48, await db.Selecoes.CountAsync());
        Assert.Equal(104, await db.Jogos.CountAsync());
        Assert.Equal("Seed ignorado: dados oficiais já carregados", logger.Mensagens.Last());
    }

    [Fact]
    public async Task Arquivo_ausente_falha_e_deixa_o_banco_vazio()
    {
        using var banco = new BancoEmMemoria();
        var pasta = Directory.CreateTempSubdirectory("pc26-fontes-").FullName;
        try
        {
            foreach (var arquivo in FontesOficiais.Todos.Where(a => a != FontesOficiais.Ranking))
            {
                File.Copy(Path.Combine(Fontes.Pasta, arquivo), Path.Combine(pasta, arquivo));
            }

            var erro = await Assert.ThrowsAsync<FonteInvalidaException>(() => CriarSeed(banco, new LoggerDeCaptura<SeedData>(), pasta).ExecutarAsync());

            Assert.Equal(FontesOficiais.Ranking, erro.Arquivo);
            await using var db = banco.NovoContexto();
            Assert.False(await db.Grupos.AnyAsync());
            Assert.False(await db.Jogos.AnyAsync());
        }
        finally
        {
            Directory.Delete(pasta, recursive: true);
        }
    }
}
