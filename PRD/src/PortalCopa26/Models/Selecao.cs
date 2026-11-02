namespace PortalCopa26.Models;

public class Selecao
{
    public int Id { get; set; }
    public string Nome { get; set; } = string.Empty;

    /// <summary>Código FIFA de três letras, usado para montar a URL pública da bandeira.</summary>
    public string CodigoFifa { get; set; } = string.Empty;

    public int GrupoId { get; set; }
    public Grupo? Grupo { get; set; }

    /// <summary>Pote de 1 a 4, conforme a posição da seleção na linha do grupo.</summary>
    public int Pote { get; set; }
    public bool CabecaDeChave { get; set; }
    public string Tecnico { get; set; } = string.Empty;

    public List<Jogador> Jogadores { get; set; } = [];
    public RankingFifa? Ranking { get; set; }
}
