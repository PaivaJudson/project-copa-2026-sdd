namespace PortalCopa26.Models;

/// <summary>Placar simulado de um jogo oficial dentro de uma simulação.</summary>
public class SimulacaoJogo
{
    public int Id { get; set; }
    public int SimulacaoId { get; set; }
    public Simulacao? Simulacao { get; set; }

    public int JogoId { get; set; }
    public Jogo? Jogo { get; set; }

    public int GolsMandante { get; set; }
    public int GolsVisitante { get; set; }
}
