namespace PortalCopa26.Models;

public class Jogador
{
    public int Id { get; set; }
    public int SelecaoId { get; set; }
    public Selecao? Selecao { get; set; }

    public string Nome { get; set; } = string.Empty;
    public int Idade { get; set; }
    public PosicaoJogador Posicao { get; set; }
    public int Gols { get; set; }
}
