namespace PortalCopa26.Models;

public class Estadio
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;
    public string Cidade { get; set; } = string.Empty;
    public string Pais { get; set; } = string.Empty;
    public int Capacidade { get; set; }

    public List<Jogo> Jogos { get; set; } = [];
}
