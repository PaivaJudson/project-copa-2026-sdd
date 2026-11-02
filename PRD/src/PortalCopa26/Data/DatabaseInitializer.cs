using Microsoft.EntityFrameworkCore;
using PortalCopa26.Data.Seed;

namespace PortalCopa26.Data;

/// <summary>Aplica as migrations pendentes e executa a carga dos dados oficiais.</summary>
public sealed class DatabaseInitializer(IDbContextFactory<PortalCopa26DbContext> dbFactory, SeedData seed)
{
    public async Task InicializarAsync(CancellationToken cancellationToken = default)
    {
        await using (var db = await dbFactory.CreateDbContextAsync(cancellationToken))
        {
            await db.Database.MigrateAsync(cancellationToken);
        }

        await seed.ExecutarAsync(cancellationToken);
    }
}
