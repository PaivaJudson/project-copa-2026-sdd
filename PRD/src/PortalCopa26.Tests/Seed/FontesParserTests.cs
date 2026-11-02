using PortalCopa26.Data.Seed;
using PortalCopa26.Models;
using PortalCopa26.Tests.Infra;

namespace PortalCopa26.Tests.Seed;

public class FontesParserTests
{
    [Fact]
    public void Grupos_tem_12_grupos_de_4_e_grupo_C_correto()
    {
        var grupos = FontesParser.LerGrupos(FontesOficiais.Grupos, Fontes.Linhas(FontesOficiais.Grupos));

        Assert.Equal(12, grupos.Count);
        Assert.All(grupos, g => Assert.Equal(4, g.Selecoes.Count));
        Assert.Equal(48, grupos.SelectMany(g => g.Selecoes).Distinct().Count());
        Assert.Equal(["Brasil", "Marrocos", "Haiti", "Escócia"], grupos.Single(g => g.Letra == 'C').Selecoes);
    }

    [Fact]
    public void Grupos_junta_nome_separado_por_tab()
    {
        var grupos = FontesParser.LerGrupos(FontesOficiais.Grupos, Fontes.Linhas(FontesOficiais.Grupos));

        Assert.Equal("Estados Unidos", grupos.Single(g => g.Letra == 'D').Selecoes[0]);
    }

    [Fact]
    public void Tecnico_do_Brasil_e_Carlo_Ancelotti()
    {
        var tecnicos = FontesParser.LerTecnicos(FontesOficiais.Tecnicos, Fontes.Linhas(FontesOficiais.Tecnicos));

        Assert.Equal(48, tecnicos.Count);
        Assert.Equal("Carlo Ancelotti", tecnicos["Brasil"]);
    }

    [Fact]
    public void Elenco_da_Argelia_contem_Riyad_Mahrez()
    {
        var elencos = FontesParser.LerElencos(FontesOficiais.Elencos, Fontes.Linhas(FontesOficiais.Elencos));

        Assert.Equal(48, elencos.Count);
        Assert.Equal(1238, elencos.Values.Sum(e => e.Count));
        Assert.Contains(new JogadorFonte("Riyad Mahrez", 35, PosicaoJogador.Atacante, 38), elencos["Argélia"]);
    }

    [Fact]
    public void Estadio_Azteca_com_capacidade_87523()
    {
        var estadios = FontesParser.LerEstadios(FontesOficiais.Estadios, Fontes.Linhas(FontesOficiais.Estadios));

        Assert.Equal(16, estadios.Count);
        Assert.Contains(new EstadioFonte("Estádio Azteca", "Cidade do México", "México", 87523), estadios);
    }

    [Fact]
    public void Ranking_tem_Argentina_em_1o_e_Italia_sem_vinculo()
    {
        var ranking = FontesParser.LerRanking(FontesOficiais.Ranking, Fontes.Linhas(FontesOficiais.Ranking));

        Assert.Equal(98, ranking.Count);
        Assert.Equal(new RankingFonte(1, "Argentina", 1877.72, "Argentina"), ranking[0]);
        var italia = ranking.Single(r => r.NomeSelecao == "Itália");
        Assert.Equal(12, italia.Posicao);
        Assert.Null(italia.SelecaoParticipante);
    }

    [Fact]
    public void Ranking_le_linha_sem_tab_antes_dos_pontos()
    {
        var ranking = FontesParser.LerRanking(FontesOficiais.Ranking, Fontes.Linhas(FontesOficiais.Ranking));

        Assert.Equal(new RankingFonte(39, "República Tcheca", 1510.15, "República Tcheca"), ranking.Single(r => r.Posicao == 39));
    }

    [Fact]
    public void Linha_invalida_informa_arquivo_e_linha()
    {
        string[] linhas = ["Brasil|Carlo Ancelotti", "linha sem separador"];

        var erro = Assert.Throws<FonteInvalidaException>(() => FontesParser.LerTecnicos("tecnicos.txt", linhas));

        Assert.Equal("tecnicos.txt", erro.Arquivo);
        Assert.Equal(2, erro.Linha);
        Assert.Contains("tecnicos.txt, linha 2", erro.Message);
    }

    [Fact]
    public void Selecao_desconhecida_em_jogo_falha_com_o_nome()
    {
        string[] linhas = ["quinta-feira 11 junho 2026", "Brasil x Itália   16:00 hs", "Primeira fase · Grupo C · Estádio de Boston (Boston)"];

        var erro = Assert.Throws<FonteInvalidaException>(() => FontesParser.LerJogosFaseGrupos("jogos.txt", linhas));

        Assert.Equal(2, erro.Linha);
        Assert.Contains("Itália", erro.Message);
    }

    [Fact]
    public void Primeiro_jogo_e_Mexico_x_Africa_do_Sul_em_horario_de_Brasilia()
    {
        var jogos = FontesParser.LerJogosFaseGrupos(FontesOficiais.JogosFaseGrupos, Fontes.Linhas(FontesOficiais.JogosFaseGrupos));

        Assert.Equal(72, jogos.Count);
        Assert.All(jogos.GroupBy(j => j.Grupo), g => Assert.Equal(6, g.Count()));
        Assert.Equal(
            new JogoFonte(FaseTorneio.Grupos, 1, new DateTime(2026, 6, 11, 16, 0, 0), "Estádio Azteca", 'A', "México", "África do Sul", null, null),
            jogos[0]);

        var jogo = new Jogo { DataHora = jogos[0].DataHora };
        Assert.Equal(new DateTimeOffset(2026, 6, 11, 19, 0, 0, TimeSpan.Zero), jogo.InicioUtc);
    }

    [Fact]
    public void Jogo_apos_meia_noite_usa_a_data_explicita()
    {
        var jogos = FontesParser.LerJogosFaseGrupos(FontesOficiais.JogosFaseGrupos, Fontes.Linhas(FontesOficiais.JogosFaseGrupos));

        var jogo = jogos.Single(j => j.Mandante == "Austrália" && j.Visitante == "Turquia");
        Assert.Equal(new DateTime(2026, 6, 14, 1, 0, 0), jogo.DataHora);
    }

    [Theory]
    [InlineData(FaseTorneio.SegundaFase, 16)]
    [InlineData(FaseTorneio.Oitavas, 8)]
    [InlineData(FaseTorneio.Quartas, 4)]
    [InlineData(FaseTorneio.Semifinal, 2)]
    [InlineData(FaseTorneio.TerceiroLugar, 1)]
    [InlineData(FaseTorneio.Final, 1)]
    public void Mata_mata_tem_a_quantidade_de_jogos_da_fase(FaseTorneio fase, int esperado)
    {
        var arquivo = FontesOficiais.JogosMataMata.Single(j => j.Fase == fase).Arquivo;

        var jogos = FontesParser.LerJogosMataMata(arquivo, fase, Fontes.Linhas(arquivo));

        Assert.Equal(esperado, jogos.Count);
        Assert.Equal(Enumerable.Range(1, esperado), jogos.Select(j => j.NumeroNaFase));
    }

    [Fact]
    public void Segunda_fase_vincula_Brasil_x_Japao()
    {
        var (arquivo, fase) = FontesOficiais.JogosMataMata.Single(j => j.Fase == FaseTorneio.SegundaFase);

        var jogos = FontesParser.LerJogosMataMata(arquivo, fase, Fontes.Linhas(arquivo));

        var jogo = jogos.Single(j => j.NumeroNaFase == 9);
        Assert.Equal(("Brasil", "Japão", "NRG Stadium"), (jogo.Mandante, jogo.Visitante, jogo.Estadio));
        Assert.Equal(new DateTime(2026, 6, 29, 14, 0, 0), jogo.DataHora);
        Assert.All(jogos, j => Assert.True(j.Mandante is not null && j.Visitante is not null));
    }

    [Fact]
    public void Quartas_guardam_a_vaga_textual()
    {
        var (arquivo, fase) = FontesOficiais.JogosMataMata.Single(j => j.Fase == FaseTorneio.Quartas);

        var jogo = FontesParser.LerJogosMataMata(arquivo, fase, Fontes.Linhas(arquivo))[0];

        Assert.Null(jogo.Mandante);
        Assert.Equal("Venc. Oitavas 1", jogo.VagaMandante);
        Assert.Equal("Venc. Oitavas 2", jogo.VagaVisitante);
        Assert.Equal("Gillette Stadium", jogo.Estadio);
    }

    [Fact]
    public void Final_le_hora_em_linha_separada()
    {
        var (arquivo, fase) = FontesOficiais.JogosMataMata.Single(j => j.Fase == FaseTorneio.Final);

        var final = FontesParser.LerJogosMataMata(arquivo, fase, Fontes.Linhas(arquivo)).Single();

        Assert.Equal(new DateTime(2026, 7, 19, 16, 0, 0), final.DataHora);
        Assert.Equal("MetLife Stadium", final.Estadio);
        Assert.Equal("Venc. Semifinal 1", final.VagaMandante);
    }
}
