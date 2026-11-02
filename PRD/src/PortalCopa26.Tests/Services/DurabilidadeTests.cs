using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PortalCopa26.Data;
using PortalCopa26.Data.Seed;
using PortalCopa26.Models;
using PortalCopa26.Services.Simulador;
using PortalCopa26.Tests.Infra;

namespace PortalCopa26.Tests.Services;

public class DurabilidadeTests
{
    private sealed class FactoryArquivo(string caminho) : IDbContextFactory<PortalCopa26DbContext>
    {
        public PortalCopa26DbContext CreateDbContext() =>
            new(new DbContextOptionsBuilder<PortalCopa26DbContext>().UseSqlite($"Data Source={caminho}").Options);
    }

    private static DatabaseInitializer CriarInitializer(IDbContextFactory<PortalCopa26DbContext> factory) =>
        new(factory, new SeedData(factory, Options.Create(new SeedOptions { FontesPath = Fontes.Pasta }), new LoggerDeCaptura<SeedData>()));

    [Fact]
    public async Task Simulacao_sobrevive_a_reinicializacao_com_migrate_e_seed()
    {
        var pasta = Directory.CreateTempSubdirectory("pc26-db-").FullName;
        var caminho = Path.Combine(pasta, "copa2026.db");
        try
        {
            // Primeira "execução": cria o banco, carrega os dados e grava uma simulação.
            int simulacaoId, jogoId;
            {
                var factory = new FactoryArquivo(caminho);
                await CriarInitializer(factory).InicializarAsync();
                await using (var db = factory.CreateDbContext())
                {
                    jogoId = await db.Jogos.Where(j => j.Fase == FaseTorneio.Grupos && j.NumeroNaFase == 1).Select(j => j.Id).SingleAsync();
                }

                var servico = new SimuladorService(factory, TimeProvider.System);
                simulacaoId = (await servico.CriarAsync("Meu palpite")).Id;
                await servico.SalvarPlacarAsync(simulacaoId, jogoId, 2, 1);
            }

            SqliteConnection.ClearAllPools();

            // Segunda "execução": migrate + seed de novo, com contextos novos.
            var novaFactory = new FactoryArquivo(caminho);
            await CriarInitializer(novaFactory).InicializarAsync();
            var simulacao = await new SimuladorService(novaFactory, TimeProvider.System).ObterAsync(simulacaoId);

            Assert.NotNull(simulacao);
            Assert.Equal("Meu palpite", simulacao.Nome);
            var placar = Assert.Single(simulacao.Jogos);
            Assert.Equal((jogoId, 2, 1), (placar.JogoId, placar.GolsMandante, placar.GolsVisitante));

            await using var verificacao = novaFactory.CreateDbContext();
            Assert.Equal(104, await verificacao.Jogos.CountAsync());
        }
        finally
        {
            SqliteConnection.ClearAllPools();
            Directory.Delete(pasta, recursive: true);
        }
    }
}
