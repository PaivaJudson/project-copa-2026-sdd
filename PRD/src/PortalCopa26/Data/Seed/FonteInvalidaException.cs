namespace PortalCopa26.Data.Seed;

/// <summary>Erro de leitura de um arquivo oficial, identificando arquivo e linha.</summary>
public sealed class FonteInvalidaException : Exception
{
    public FonteInvalidaException(string arquivo, int? linha, string mensagem)
        : base(linha is null ? $"{arquivo}: {mensagem}" : $"{arquivo}, linha {linha}: {mensagem}")
    {
        Arquivo = arquivo;
        Linha = linha;
    }

    public string Arquivo { get; }

    /// <summary>Número da linha (base 1), quando o erro se refere a uma linha específica.</summary>
    public int? Linha { get; }
}
