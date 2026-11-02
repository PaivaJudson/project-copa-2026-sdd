using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace PortalCopa26.Data;

/// <summary>
/// Usada apenas pelo dotnet-ef para gerar migrations, sem iniciar a aplicação (e sem executar o seed).
/// </summary>
public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<PortalCopa26DbContext>
{
    public PortalCopa26DbContext CreateDbContext(string[] args)
    {
        var opcoes = new DbContextOptionsBuilder<PortalCopa26DbContext>()
            .UseSqlite("Data Source=App_Data/copa2026.db")
            .Options;
        return new PortalCopa26DbContext(opcoes);
    }
}
