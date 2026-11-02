using Microsoft.EntityFrameworkCore;
using PortalCopa26.Models;

namespace PortalCopa26.Data;

public class PortalCopa26DbContext(DbContextOptions<PortalCopa26DbContext> options) : DbContext(options)
{
    public DbSet<Grupo> Grupos => Set<Grupo>();
    public DbSet<Selecao> Selecoes => Set<Selecao>();
    public DbSet<Jogador> Jogadores => Set<Jogador>();
    public DbSet<Estadio> Estadios => Set<Estadio>();
    public DbSet<Jogo> Jogos => Set<Jogo>();
    public DbSet<RankingFifa> RankingFifa => Set<RankingFifa>();
    public DbSet<Simulacao> Simulacoes => Set<Simulacao>();
    public DbSet<SimulacaoJogo> SimulacaoJogos => Set<SimulacaoJogo>();

    protected override void OnModelCreating(ModelBuilder modelBuilder) =>
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(PortalCopa26DbContext).Assembly);
}
