using Microsoft.Data.Sqlite;
using PortalCopa26.Services;

namespace PortalCopa26.Tests.Services;

public class ConnectionStringTests
{
    [Fact]
    public void DataSource_relativo_vira_caminho_absoluto_sob_o_content_root_e_cria_a_pasta()
    {
        var contentRoot = Directory.CreateTempSubdirectory("pc26-root-").FullName;
        try
        {
            var resultado = ServiceCollectionExtensions.ResolverConnectionString("Data Source=App_Data/copa2026.db", contentRoot);

            var dataSource = new SqliteConnectionStringBuilder(resultado).DataSource;
            Assert.Equal(Path.Combine(contentRoot, "App_Data", "copa2026.db"), dataSource);
            Assert.True(Directory.Exists(Path.Combine(contentRoot, "App_Data")));
        }
        finally
        {
            Directory.Delete(contentRoot, recursive: true);
        }
    }

    [Fact]
    public void DataSource_absoluto_e_mantido()
    {
        var arquivo = Path.Combine(Path.GetTempPath(), "pc26-abs", "x.db");

        var resultado = ServiceCollectionExtensions.ResolverConnectionString($"Data Source={arquivo}", "C:\\outro");

        Assert.Equal(arquivo, new SqliteConnectionStringBuilder(resultado).DataSource);
    }
}
