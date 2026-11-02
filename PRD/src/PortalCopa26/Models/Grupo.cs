namespace PortalCopa26.Models;

public class Grupo
{
    public int Id { get; set; }

    /// <summary>Letra do grupo (A a L).</summary>
    public char Letra { get; set; }

    public List<Selecao> Selecoes { get; set; } = [];
    public List<Jogo> Jogos { get; set; } = [];
}
