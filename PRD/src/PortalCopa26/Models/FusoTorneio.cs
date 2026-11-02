namespace PortalCopa26.Models;

/// <summary>
/// Fuso dos horários dos jogos nas fontes oficiais: horário de Brasília (UTC-03:00).
/// </summary>
public static class FusoTorneio
{
    public static readonly TimeSpan Offset = TimeSpan.FromHours(-3);

    /// <summary>Converte uma data/hora em horário de Brasília para um instante com offset.</summary>
    public static DateTimeOffset ParaInstante(DateTime horarioBrasilia) =>
        new(DateTime.SpecifyKind(horarioBrasilia, DateTimeKind.Unspecified), Offset);
}
