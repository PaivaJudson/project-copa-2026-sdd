namespace PortalCopa26.Models;

public class Simulacao
{
    public const int NomeTamanhoMaximo = 100;

    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    /// <summary>Instante de criação, em UTC.</summary>
    public DateTime CriadaEm { get; set; }

    /// <summary>Instante da última alteração, em UTC.</summary>
    public DateTime AtualizadaEm { get; set; }

    public List<SimulacaoJogo> Jogos { get; set; } = [];
}
