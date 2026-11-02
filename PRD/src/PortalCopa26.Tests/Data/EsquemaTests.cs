using Microsoft.EntityFrameworkCore;
using PortalCopa26.Models;
using PortalCopa26.Tests.Infra;

namespace PortalCopa26.Tests.Data;

public class EsquemaTests
{
    [Fact]
    public void EnsureCreated_gera_todas_as_tabelas()
    {
        using var banco = new BancoEmMemoria();
        using var db = banco.NovoContexto();

        var tabelas = db.Database
            .SqlQueryRaw<string>("SELECT name AS Value FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'")
            .ToList();

        Assert.Equivalent(
            new[] { "Grupos", "Selecoes", "Jogadores", "Estadios", "Jogos", "RankingFifa", "Simulacoes", "SimulacaoJogos" },
            tabelas);
    }

    [Fact]
    public void Placar_duplicado_para_o_mesmo_jogo_na_mesma_simulacao_falha()
    {
        using var banco = new BancoEmMemoria();
        using var db = banco.NovoContexto();
        var jogo = CriarJogoMinimo(db);
        var simulacao = new Simulacao { Nome = "Teste", CriadaEm = DateTime.UtcNow, AtualizadaEm = DateTime.UtcNow };
        db.Simulacoes.Add(simulacao);
        db.SaveChanges();

        db.SimulacaoJogos.Add(new SimulacaoJogo { SimulacaoId = simulacao.Id, JogoId = jogo.Id, GolsMandante = 1, GolsVisitante = 0 });
        db.SaveChanges();
        db.SimulacaoJogos.Add(new SimulacaoJogo { SimulacaoId = simulacao.Id, JogoId = jogo.Id, GolsMandante = 2, GolsVisitante = 2 });

        Assert.Throws<DbUpdateException>(() => db.SaveChanges());
    }

    [Fact]
    public void Gols_negativos_sao_rejeitados_pelo_banco()
    {
        using var banco = new BancoEmMemoria();
        using var db = banco.NovoContexto();
        var jogo = CriarJogoMinimo(db);
        var simulacao = new Simulacao { Nome = "Teste", CriadaEm = DateTime.UtcNow, AtualizadaEm = DateTime.UtcNow };
        db.Simulacoes.Add(simulacao);
        db.SaveChanges();

        db.SimulacaoJogos.Add(new SimulacaoJogo { SimulacaoId = simulacao.Id, JogoId = jogo.Id, GolsMandante = -1, GolsVisitante = 0 });

        Assert.Throws<DbUpdateException>(() => db.SaveChanges());
    }

    internal static Jogo CriarJogoMinimo(PortalCopa26.Data.PortalCopa26DbContext db)
    {
        var estadio = new Estadio { Nome = "Estádio X", Cidade = "Cidade", Pais = "País", Capacidade = 1 };
        var jogo = new Jogo { Fase = FaseTorneio.Final, NumeroNaFase = 1, DataHora = new DateTime(2026, 7, 19, 16, 0, 0), Estadio = estadio };
        db.Jogos.Add(jogo);
        db.SaveChanges();
        return jogo;
    }
}
