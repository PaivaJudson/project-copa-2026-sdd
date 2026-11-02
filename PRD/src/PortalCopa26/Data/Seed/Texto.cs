using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

namespace PortalCopa26.Data.Seed;

internal static partial class Texto
{
    /// <summary>Chave de comparação: sem acentos, minúscula e com espaços simples.</summary>
    public static string Chave(string valor)
    {
        var decomposto = valor.Trim().Normalize(NormalizationForm.FormD);
        var sb = new StringBuilder(decomposto.Length);
        foreach (var c in decomposto)
        {
            if (CharUnicodeInfo.GetUnicodeCategory(c) != UnicodeCategory.NonSpacingMark)
            {
                sb.Append(char.ToLowerInvariant(c));
            }
        }

        return Espacos().Replace(sb.ToString(), " ");
    }

    /// <summary>Remove espaços nas pontas e colapsa espaços internos repetidos.</summary>
    public static string Limpar(string valor) => Espacos().Replace(valor.Trim(), " ");

    [GeneratedRegex(@"\s+")]
    private static partial Regex Espacos();
}
