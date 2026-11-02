using PortalCopa26.Models;

namespace PortalCopa26.Data.Seed;

/// <summary>Nomes dos arquivos oficiais lidos pela carga, dentro de Data/Fontes.</summary>
public static class FontesOficiais
{
    public const string Grupos = "copa2026_grupos.txt";
    public const string Tecnicos = "copa2026_pais_tecnicos.txt";
    public const string Elencos = "copa2026_selecoes_jogadores.txt";
    public const string Estadios = "copa2026_cidades_sede_estadios.txt";
    public const string Ranking = "copa2026_ranking_fifa.txt";
    public const string JogosFaseGrupos = "copa2026_jogos_primeira_fase.txt";

    /// <summary>Arquivos de mata-mata e a fase de cada um.</summary>
    public static IReadOnlyList<(string Arquivo, FaseTorneio Fase)> JogosMataMata { get; } =
    [
        ("copa2026_Jogos_Segunda_fase.txt", FaseTorneio.SegundaFase),
        ("copa2026_jogos_oitavas.txt", FaseTorneio.Oitavas),
        ("copa2026_jogos_quartas.txt", FaseTorneio.Quartas),
        ("copa2026_jogos_semifinal.txt", FaseTorneio.Semifinal),
        ("copa2026_jogo_terceiro_lugar.txt", FaseTorneio.TerceiroLugar),
        ("copa2026_jogo_final.txt", FaseTorneio.Final),
    ];

    public static IEnumerable<string> Todos =>
        new[] { Grupos, Tecnicos, Elencos, Estadios, Ranking, JogosFaseGrupos }
            .Concat(JogosMataMata.Select(j => j.Arquivo));
}
