using Microsoft.Extensions.Logging;

namespace PortalCopa26.Tests.Infra;

/// <summary>Acesso aos arquivos oficiais reais copiados para a saída do build.</summary>
public static class Fontes
{
    public static string Pasta { get; } = Path.Combine(AppContext.BaseDirectory, "Data", "Fontes");

    public static string[] Linhas(string arquivo) => File.ReadAllLines(Path.Combine(Pasta, arquivo));
}

/// <summary>Logger que guarda as mensagens formatadas, para verificar o log nos testes.</summary>
public sealed class LoggerDeCaptura<T> : ILogger<T>
{
    public List<string> Mensagens { get; } = [];

    public IDisposable? BeginScope<TState>(TState state) where TState : notnull => null;

    public bool IsEnabled(LogLevel logLevel) => true;

    public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter) =>
        Mensagens.Add(formatter(state, exception));
}
