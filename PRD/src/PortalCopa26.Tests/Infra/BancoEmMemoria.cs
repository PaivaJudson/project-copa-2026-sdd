using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using PortalCopa26.Data;

namespace PortalCopa26.Tests.Infra;

/// <summary>
/// Banco SQLite em memória compartilhado por vários DbContext enquanto a conexão estiver aberta.
/// </summary>
public sealed class BancoEmMemoria : IDisposable
{
    private readonly SqliteConnection _conexao;

    public BancoEmMemoria(bool criarEsquema = true)
    {
        _conexao = new SqliteConnection("DataSource=:memory:");
        _conexao.Open();
        Opcoes = new DbContextOptionsBuilder<PortalCopa26DbContext>().UseSqlite(_conexao).Options;
        Factory = new FactoryFixa(Opcoes);

        if (criarEsquema)
        {
            using var db = NovoContexto();
            db.Database.EnsureCreated();
        }
    }

    public DbContextOptions<PortalCopa26DbContext> Opcoes { get; }

    public IDbContextFactory<PortalCopa26DbContext> Factory { get; }

    public PortalCopa26DbContext NovoContexto() => new(Opcoes);

    public void Dispose() => _conexao.Dispose();

    private sealed class FactoryFixa(DbContextOptions<PortalCopa26DbContext> opcoes) : IDbContextFactory<PortalCopa26DbContext>
    {
        public PortalCopa26DbContext CreateDbContext() => new(opcoes);
    }
}
