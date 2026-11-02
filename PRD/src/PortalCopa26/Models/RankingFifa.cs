namespace PortalCopa26.Models;

public class RankingFifa
{
    public int Id { get; set; }
    public int Posicao { get; set; }

    /// <summary>Nome como aparece em copa2026_ranking_fifa.txt (inclui seleções não participantes).</summary>
    public string NomeSelecao { get; set; } = string.Empty;
    public double Pontos { get; set; }

    /// <summary>Seleção participante correspondente; nulo para seleções fora da Copa.</summary>
    public int? SelecaoId { get; set; }
    public Selecao? Selecao { get; set; }
}
