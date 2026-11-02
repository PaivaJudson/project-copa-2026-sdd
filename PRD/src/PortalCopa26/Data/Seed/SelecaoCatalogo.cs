namespace PortalCopa26.Data.Seed;

/// <summary>
/// As 48 seleções participantes: nome canônico (de copa2026_grupos.txt), código FIFA
/// (do protótipo validado, ../prototipo/js/site.js) e as variações de nome usadas nos demais arquivos oficiais.
/// </summary>
public static class SelecaoCatalogo
{
    public sealed record Item(string Nome, string CodigoFifa, IReadOnlyList<string> Aliases);

    public static IReadOnlyList<Item> Todas { get; } =
    [
        new("México", "MEX", []),
        new("África do Sul", "RSA", []),
        new("Coreia do Sul", "KOR", ["República da Coreia"]),
        new("República Tcheca", "CZE", ["Tchéquia"]),
        new("Canadá", "CAN", []),
        new("Bósnia e Herzegovina", "BIH", ["Bósnia"]),
        new("Catar", "QAT", []),
        new("Suíça", "SUI", []),
        new("Brasil", "BRA", []),
        new("Marrocos", "MAR", []),
        new("Haiti", "HAI", []),
        new("Escócia", "SCO", []),
        new("Estados Unidos", "USA", ["EUA"]),
        new("Paraguai", "PAR", []),
        new("Austrália", "AUS", []),
        new("Turquia", "TUR", []),
        new("Alemanha", "GER", []),
        new("Curaçao", "CUW", ["Curaçau"]),
        new("Costa do Marfim", "CIV", ["Côte d'Ivoire"]),
        new("Equador", "ECU", []),
        new("Holanda", "NED", ["Países Baixos"]),
        new("Japão", "JPN", []),
        new("Suécia", "SWE", []),
        new("Tunísia", "TUN", []),
        new("Bélgica", "BEL", []),
        new("Egito", "EGY", []),
        new("Irã", "IRN", ["República Islâmica do Irã"]),
        new("Nova Zelândia", "NZL", []),
        new("Espanha", "ESP", []),
        new("Cabo Verde", "CPV", []),
        new("Arábia Saudita", "KSA", []),
        new("Uruguai", "URU", []),
        new("França", "FRA", []),
        new("Senegal", "SEN", []),
        new("Iraque", "IRQ", []),
        new("Noruega", "NOR", []),
        new("Argentina", "ARG", []),
        new("Argélia", "ALG", []),
        new("Áustria", "AUT", []),
        new("Jordânia", "JOR", []),
        new("Portugal", "POR", []),
        new("RD Congo", "COD", ["República Democrática do Congo", "ReD do Congo"]),
        new("Uzbequistão", "UZB", []),
        new("Colômbia", "COL", []),
        new("Inglaterra", "ENG", []),
        new("Croácia", "CRO", []),
        new("Gana", "GHA", []),
        new("Panamá", "PAN", []),
    ];

    private static readonly Dictionary<string, Item> PorChave = Todas
        .SelectMany(i => i.Aliases.Prepend(i.Nome).Select(nome => (Chave: Texto.Chave(nome), Item: i)))
        .ToDictionary(x => x.Chave, x => x.Item);

    public static bool TentarResolver(string nome, out Item item) =>
        PorChave.TryGetValue(Texto.Chave(nome), out item!);

    public static Item Resolver(string nome, string arquivo, int linha) =>
        TentarResolver(nome, out var item)
            ? item
            : throw new FonteInvalidaException(arquivo, linha, $"seleção não reconhecida: \"{Texto.Limpar(nome)}\"");
}
