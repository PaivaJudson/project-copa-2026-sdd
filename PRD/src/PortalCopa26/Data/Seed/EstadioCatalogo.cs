namespace PortalCopa26.Data.Seed;

/// <summary>
/// Liga as formas como os arquivos de jogos se referem às sedes (cidade ou apelido)
/// ao nome do estádio em copa2026_cidades_sede_estadios.txt.
/// </summary>
public static class EstadioCatalogo
{
    public static IReadOnlyDictionary<string, string[]> AliasesPorEstadio { get; } = new Dictionary<string, string[]>
    {
        ["Estádio Azteca"] = ["Cidade do México", "Azteca"],
        ["Estadio Akron"] = ["Guadalajara"],
        ["Estadio BBVA"] = ["Monterrey"],
        ["MetLife Stadium"] = ["Nova York/New Jersey", "Nova York/Nova Jersey", "Nova Iorque", "Nova Jersey"],
        ["SoFi Stadium"] = ["Los Angeles"],
        ["AT&T Stadium"] = ["Dallas"],
        ["Levi's Stadium"] = ["San Francisco", "Santa Clara"],
        ["Lumen Field"] = ["Seattle", "Seattle Field"],
        ["Gillette Stadium"] = ["Boston"],
        ["Hard Rock Stadium"] = ["Miami"],
        ["Lincoln Financial Field"] = ["Filadélfia"],
        ["Arrowhead Stadium"] = ["Kansas City"],
        ["Mercedes-Benz Stadium"] = ["Atlanta"],
        ["NRG Stadium"] = ["Houston"],
        ["BMO Field"] = ["Toronto"],
        ["BC Place"] = ["Vancouver", "Vancouver Place"],
    };

    private static readonly Dictionary<string, string> PorChave = AliasesPorEstadio
        .SelectMany(kv => kv.Value.Prepend(kv.Key).Select(alias => (Chave: Texto.Chave(alias), Estadio: kv.Key)))
        .ToDictionary(x => x.Chave, x => x.Estadio);

    public static bool TentarResolver(string referencia, out string estadio) =>
        PorChave.TryGetValue(Texto.Chave(referencia), out estadio!);

    public static string Resolver(string referencia, string arquivo, int linha) =>
        TentarResolver(referencia, out var estadio)
            ? estadio
            : throw new FonteInvalidaException(arquivo, linha, $"sede não reconhecida: \"{Texto.Limpar(referencia)}\"");
}
