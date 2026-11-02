using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using PortalCopa26.Data;
using PortalCopa26.Data.Seed;
using PortalCopa26.Services.Simulador;

namespace PortalCopa26.Services;

/// <summary>Ponto único de registro dos serviços do portal. As próximas capacidades acrescentam seus serviços aqui.</summary>
public static class ServiceCollectionExtensions
{
    public const string NomeConnectionString = "PortalCopa26";

    public static IServiceCollection AddPortalCopa26(this IServiceCollection services, IConfiguration configuration, IHostEnvironment environment)
    {
        var connectionString = configuration.GetConnectionString(NomeConnectionString)
            ?? throw new InvalidOperationException($"ConnectionStrings:{NomeConnectionString} não configurada.");
        connectionString = ResolverConnectionString(connectionString, environment.ContentRootPath);

        services.AddDbContextFactory<PortalCopa26DbContext>(o => o.UseSqlite(connectionString));
        services.Configure<SeedOptions>(configuration.GetSection(SeedOptions.Secao));
        services.AddSingleton(TimeProvider.System);
        services.AddTransient<SeedData>();
        services.AddTransient<DatabaseInitializer>();

        services.AddScoped<ISimuladorService, SimuladorService>();

        return services;
    }

    /// <summary>
    /// Torna absoluto um Data Source relativo, a partir do content root, e cria a pasta do arquivo.
    /// Assim o banco não depende do diretório de onde a aplicação é executada.
    /// </summary>
    public static string ResolverConnectionString(string connectionString, string contentRootPath)
    {
        var builder = new SqliteConnectionStringBuilder(connectionString);
        var dataSource = builder.DataSource;
        if (string.IsNullOrWhiteSpace(dataSource) || dataSource == ":memory:" || dataSource.StartsWith("file:", StringComparison.OrdinalIgnoreCase))
        {
            return builder.ToString();
        }

        if (!Path.IsPathRooted(dataSource))
        {
            builder.DataSource = Path.GetFullPath(Path.Combine(contentRootPath, dataSource));
        }

        var pasta = Path.GetDirectoryName(builder.DataSource);
        if (!string.IsNullOrEmpty(pasta))
        {
            Directory.CreateDirectory(pasta);
        }

        return builder.ToString();
    }

    /// <summary>Aplica migrations e carrega os dados oficiais antes de a aplicação atender requisições.</summary>
    public static async Task InicializarBancoAsync(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        await scope.ServiceProvider.GetRequiredService<DatabaseInitializer>().InicializarAsync();
    }
}
