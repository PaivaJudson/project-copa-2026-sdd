using System.Globalization;
using System.Text.RegularExpressions;
using PortalCopa26.Models;

namespace PortalCopa26.Data.Seed;

public sealed record GrupoFonte(char Letra, IReadOnlyList<string> Selecoes);

public sealed record JogadorFonte(string Nome, int Idade, PosicaoJogador Posicao, int Gols);

public sealed record EstadioFonte(string Nome, string Cidade, string Pais, int Capacidade);

/// <param name="SelecaoParticipante">Nome canônico, quando a seleção participa da Copa.</param>
public sealed record RankingFonte(int Posicao, string NomeSelecao, double Pontos, string? SelecaoParticipante);

/// <summary>Jogo lido de uma fonte. Mandante/Visitante são nomes canônicos; Vaga* descreve posições ainda indefinidas.</summary>
public sealed record JogoFonte(
    FaseTorneio Fase,
    int NumeroNaFase,
    DateTime DataHora,
    string Estadio,
    char? Grupo,
    string? Mandante,
    string? Visitante,
    string? VagaMandante,
    string? VagaVisitante);

/// <summary>
/// Parsers puros dos arquivos oficiais (linhas → registros). Toda falha gera
/// <see cref="FonteInvalidaException"/> com o arquivo e a linha.
/// </summary>
public static partial class FontesParser
{
    private const int Ano = 2026;

    // ---------- Grupos ----------

    public static IReadOnlyList<GrupoFonte> LerGrupos(string arquivo, IReadOnlyList<string> linhas)
    {
        var grupos = new List<GrupoFonte>();
        for (var i = 0; i < linhas.Count; i++)
        {
            var m = LinhaGrupo().Match(linhas[i]);
            if (!m.Success)
            {
                continue;
            }

            var tokens = m.Groups["resto"].Value.Split('\t', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);
            var selecoes = JuntarNomes(tokens, arquivo, i + 1);
            if (selecoes.Count != 4)
            {
                throw new FonteInvalidaException(arquivo, i + 1, $"o grupo deve ter 4 seleções, encontradas {selecoes.Count}");
            }

            grupos.Add(new GrupoFonte(m.Groups["letra"].Value[0], selecoes));
        }

        if (grupos.Count != 12)
        {
            throw new FonteInvalidaException(arquivo, null, $"esperados 12 grupos, encontrados {grupos.Count}");
        }

        return grupos;
    }

    /// <summary>
    /// Une tokens separados por TAB que formam um único nome (ex.: "Estados" + "Unidos").
    /// </summary>
    private static List<string> JuntarNomes(string[] tokens, string arquivo, int linha)
    {
        var nomes = new List<string>();
        for (var i = 0; i < tokens.Length; i++)
        {
            if (SelecaoCatalogo.TentarResolver(tokens[i], out var item))
            {
                nomes.Add(item.Nome);
                continue;
            }

            var juntou = false;
            for (var j = i + 1; j < tokens.Length && !juntou; j++)
            {
                var candidato = string.Join(' ', tokens[i..(j + 1)]);
                if (SelecaoCatalogo.TentarResolver(candidato, out item))
                {
                    nomes.Add(item.Nome);
                    i = j;
                    juntou = true;
                }
            }

            if (!juntou)
            {
                throw new FonteInvalidaException(arquivo, linha, $"seleção não reconhecida: \"{tokens[i]}\"");
            }
        }

        return nomes;
    }

    // ---------- Técnicos ----------

    public static IReadOnlyDictionary<string, string> LerTecnicos(string arquivo, IReadOnlyList<string> linhas)
    {
        var tecnicos = new Dictionary<string, string>();
        for (var i = 0; i < linhas.Count; i++)
        {
            if (string.IsNullOrWhiteSpace(linhas[i]))
            {
                continue;
            }

            var partes = linhas[i].Split('|');
            if (partes.Length != 2 || string.IsNullOrWhiteSpace(partes[1]))
            {
                throw new FonteInvalidaException(arquivo, i + 1, "formato esperado: Seleção|Técnico");
            }

            var selecao = SelecaoCatalogo.Resolver(partes[0], arquivo, i + 1);
            if (!tecnicos.TryAdd(selecao.Nome, Texto.Limpar(partes[1])))
            {
                throw new FonteInvalidaException(arquivo, i + 1, $"técnico duplicado para {selecao.Nome}");
            }
        }

        return tecnicos;
    }

    // ---------- Elencos ----------

    public static IReadOnlyDictionary<string, IReadOnlyList<JogadorFonte>> LerElencos(string arquivo, IReadOnlyList<string> linhas)
    {
        var elencos = new Dictionary<string, List<JogadorFonte>>();
        List<JogadorFonte>? atual = null;

        for (var i = 0; i < linhas.Count; i++)
        {
            var linha = linhas[i].Trim();
            if (linha.Length == 0)
            {
                continue;
            }

            if (linha.StartsWith('#'))
            {
                var selecao = SelecaoCatalogo.Resolver(linha.TrimStart('#'), arquivo, i + 1);
                if (elencos.ContainsKey(selecao.Nome))
                {
                    throw new FonteInvalidaException(arquivo, i + 1, $"elenco duplicado para {selecao.Nome}");
                }

                atual = [];
                elencos[selecao.Nome] = atual;
                continue;
            }

            if (atual is null)
            {
                throw new FonteInvalidaException(arquivo, i + 1, "jogador antes do cabeçalho \"# Seleção\"");
            }

            var partes = linha.Split('|');
            if (partes.Length != 4
                || !int.TryParse(partes[1], CultureInfo.InvariantCulture, out var idade)
                || !int.TryParse(partes[3], CultureInfo.InvariantCulture, out var gols))
            {
                throw new FonteInvalidaException(arquivo, i + 1, "formato esperado: Nome|Idade|Posição|Gols");
            }

            atual.Add(new JogadorFonte(Texto.Limpar(partes[0]), idade, LerPosicao(partes[2], arquivo, i + 1), gols));
        }

        return elencos.ToDictionary(kv => kv.Key, kv => (IReadOnlyList<JogadorFonte>)kv.Value);
    }

    private static PosicaoJogador LerPosicao(string valor, string arquivo, int linha) => Texto.Chave(valor) switch
    {
        "goleiro" => PosicaoJogador.Goleiro,
        "defensor" => PosicaoJogador.Defensor,
        "meio-campista" => PosicaoJogador.MeioCampista,
        "atacante" => PosicaoJogador.Atacante,
        _ => throw new FonteInvalidaException(arquivo, linha, $"posição desconhecida: \"{valor.Trim()}\""),
    };

    // ---------- Estádios ----------

    public static IReadOnlyList<EstadioFonte> LerEstadios(string arquivo, IReadOnlyList<string> linhas)
    {
        var estadios = new List<EstadioFonte>();
        for (var i = 0; i < linhas.Count; i++)
        {
            var linha = linhas[i].Trim();
            if (!linha.StartsWith('|') || linha.StartsWith("|--"))
            {
                continue;
            }

            var colunas = linha.Trim('|').Split('|').Select(c => c.Trim()).ToArray();
            if (colunas[0] == "Cidade") // cabeçalho da tabela
            {
                continue;
            }

            var digitos = new string(colunas.Length == 4 ? colunas[3].Where(char.IsDigit).ToArray() : []);
            if (colunas.Length != 4 || !int.TryParse(digitos, CultureInfo.InvariantCulture, out var capacidade))
            {
                throw new FonteInvalidaException(arquivo, i + 1, "formato esperado: | Cidade | País | Estádio | Capacidade |");
            }

            estadios.Add(new EstadioFonte(colunas[2], colunas[0], colunas[1], capacidade));
        }

        return estadios;
    }

    // ---------- Ranking FIFA ----------

    public static IReadOnlyList<RankingFonte> LerRanking(string arquivo, IReadOnlyList<string> linhas)
    {
        var ranking = new List<RankingFonte>();
        for (var i = 1; i < linhas.Count; i++) // linha 1 é o cabeçalho
        {
            if (string.IsNullOrWhiteSpace(linhas[i]))
            {
                continue;
            }

            var m = LinhaRanking().Match(linhas[i]);
            if (!m.Success)
            {
                throw new FonteInvalidaException(arquivo, i + 1, "formato esperado: Posição<TAB>Seleção<TAB>Pontos");
            }

            var nome = Texto.Limpar(m.Groups["nome"].Value);
            string? participante = SelecaoCatalogo.TentarResolver(nome, out var item) ? item.Nome : null;
            ranking.Add(new RankingFonte(
                int.Parse(m.Groups["pos"].Value, CultureInfo.InvariantCulture),
                nome,
                double.Parse(m.Groups["pontos"].Value, CultureInfo.InvariantCulture),
                participante));
        }

        return ranking;
    }

    // ---------- Jogos da fase de grupos ----------

    public static IReadOnlyList<JogoFonte> LerJogosFaseGrupos(string arquivo, IReadOnlyList<string> linhas)
    {
        var jogos = new List<JogoFonte>();
        DateOnly? dia = null;

        for (var i = 0; i < linhas.Count; i++)
        {
            var linha = linhas[i].Trim();
            if (linha.Length == 0 || linha.StartsWith("---"))
            {
                continue;
            }

            var cabecalho = CabecalhoDia().Match(linha);
            if (cabecalho.Success)
            {
                dia = new DateOnly(
                    int.Parse(cabecalho.Groups["ano"].Value, CultureInfo.InvariantCulture),
                    Mes(cabecalho.Groups["mes"].Value, arquivo, i + 1),
                    int.Parse(cabecalho.Groups["dia"].Value, CultureInfo.InvariantCulture));
                continue;
            }

            var jogo = LinhaJogoGrupo().Match(linha);
            if (!jogo.Success)
            {
                throw new FonteInvalidaException(arquivo, i + 1, "linha não reconhecida como data ou jogo");
            }

            if (dia is null)
            {
                throw new FonteInvalidaException(arquivo, i + 1, "jogo antes do cabeçalho de data");
            }

            // Jogos após a meia-noite trazem a data explícita: "01:00 hs (14 de junho)".
            var data = jogo.Groups["diaExpl"].Success
                ? new DateOnly(Ano, Mes(jogo.Groups["mesExpl"].Value, arquivo, i + 1), int.Parse(jogo.Groups["diaExpl"].Value, CultureInfo.InvariantCulture))
                : dia.Value;
            var hora = new TimeOnly(int.Parse(jogo.Groups["h"].Value, CultureInfo.InvariantCulture), int.Parse(jogo.Groups["min"].Value, CultureInfo.InvariantCulture));

            var linhaDetalhe = i + 1;
            while (linhaDetalhe < linhas.Count && string.IsNullOrWhiteSpace(linhas[linhaDetalhe]))
            {
                linhaDetalhe++;
            }

            var detalhe = linhaDetalhe < linhas.Count ? DetalheJogoGrupo().Match(linhas[linhaDetalhe].Trim()) : Match.Empty;
            if (!detalhe.Success)
            {
                throw new FonteInvalidaException(arquivo, linhaDetalhe + 1, "esperado \"Primeira fase · Grupo X · Estádio (Cidade)\"");
            }

            jogos.Add(new JogoFonte(
                FaseTorneio.Grupos,
                jogos.Count + 1,
                data.ToDateTime(hora),
                EstadioCatalogo.Resolver(detalhe.Groups["cidade"].Value, arquivo, linhaDetalhe + 1),
                detalhe.Groups["grupo"].Value[0],
                SelecaoCatalogo.Resolver(jogo.Groups["mandante"].Value, arquivo, i + 1).Nome,
                SelecaoCatalogo.Resolver(jogo.Groups["visitante"].Value, arquivo, i + 1).Nome,
                null,
                null));
            i = linhaDetalhe;
        }

        return jogos;
    }

    // ---------- Jogos de mata-mata ----------

    /// <summary>
    /// Lê blocos separados por linha em branco: cabeçalho ("Oitavas 3", "Final"), sede e data
    /// ("Dallas 06/07 Segunda 16:00", com a hora na mesma linha ou na seguinte) e confronto ("A x B").
    /// </summary>
    public static IReadOnlyList<JogoFonte> LerJogosMataMata(string arquivo, FaseTorneio fase, IReadOnlyList<string> linhas)
    {
        var jogos = new List<JogoFonte>();
        var i = 0;
        while (i < linhas.Count)
        {
            if (string.IsNullOrWhiteSpace(linhas[i]))
            {
                i++;
                continue;
            }

            var inicio = i;
            var bloco = new List<(int Numero, string Texto)>();
            while (i < linhas.Count && !string.IsNullOrWhiteSpace(linhas[i]))
            {
                bloco.Add((i + 1, linhas[i].Trim()));
                i++;
            }

            jogos.Add(LerBlocoMataMata(arquivo, fase, bloco, inicio + 1));
        }

        return jogos.OrderBy(j => j.NumeroNaFase).ToList();
    }

    private static JogoFonte LerBlocoMataMata(string arquivo, FaseTorneio fase, List<(int Numero, string Texto)> bloco, int linhaInicial)
    {
        var cabecalho = CabecalhoMataMata().Match(bloco[0].Texto);
        if (!cabecalho.Success)
        {
            throw new FonteInvalidaException(arquivo, linhaInicial, $"cabeçalho de jogo não reconhecido: \"{bloco[0].Texto}\"");
        }

        var numero = cabecalho.Groups["num"].Success ? int.Parse(cabecalho.Groups["num"].Value, CultureInfo.InvariantCulture) : 1;

        var sedeIdx = bloco.FindIndex(1, l => SedeData().IsMatch(l.Texto));
        var confrontoIdx = bloco.FindIndex(1, l => Confronto().IsMatch(l.Texto));
        if (sedeIdx < 0 || confrontoIdx < 0)
        {
            throw new FonteInvalidaException(arquivo, linhaInicial, "bloco de jogo sem sede/data ou sem confronto");
        }

        var (linhaSede, textoSede) = bloco[sedeIdx];
        var sede = SedeData().Match(textoSede);
        // A hora fica na própria linha da sede ou numa linha seguinte, antes do confronto ("Domingo as 16:00 hs").
        var textoHora = string.Join(' ', bloco.Skip(sedeIdx + 1).Take(confrontoIdx - sedeIdx - 1).Select(l => l.Texto).Prepend(sede.Groups["resto"].Value));
        var hora = Hora().Match(textoHora);
        if (!hora.Success)
        {
            throw new FonteInvalidaException(arquivo, linhaSede, "horário não encontrado");
        }

        var data = new DateTime(
            Ano,
            int.Parse(sede.Groups["mes"].Value, CultureInfo.InvariantCulture),
            int.Parse(sede.Groups["dia"].Value, CultureInfo.InvariantCulture),
            int.Parse(hora.Groups["h"].Value, CultureInfo.InvariantCulture),
            int.Parse(hora.Groups["min"].Value, CultureInfo.InvariantCulture),
            0);

        var (linhaConfronto, textoConfronto) = bloco[confrontoIdx];
        var confronto = Confronto().Match(textoConfronto);
        var (mandante, vagaMandante) = LerParticipante(confronto.Groups["a"].Value, arquivo, linhaConfronto);
        var (visitante, vagaVisitante) = LerParticipante(confronto.Groups["b"].Value, arquivo, linhaConfronto);

        return new JogoFonte(
            fase,
            numero,
            data,
            EstadioCatalogo.Resolver(sede.Groups["sede"].Value, arquivo, linhaSede),
            null,
            mandante,
            visitante,
            vagaMandante,
            vagaVisitante);
    }

    private static (string? Selecao, string? Vaga) LerParticipante(string texto, string arquivo, int linha)
    {
        var limpo = Texto.Limpar(texto);
        return limpo.StartsWith("Venc.", StringComparison.OrdinalIgnoreCase) || limpo.StartsWith("Perd.", StringComparison.OrdinalIgnoreCase)
            ? (null, limpo)
            : (SelecaoCatalogo.Resolver(limpo, arquivo, linha).Nome, null);
    }

    private static int Mes(string nome, string arquivo, int linha) => Texto.Chave(nome) switch
    {
        "junho" => 6,
        "julho" => 7,
        _ => throw new FonteInvalidaException(arquivo, linha, $"mês não reconhecido: \"{nome}\""),
    };

    [GeneratedRegex(@"^(?<letra>[A-L])\t(?<resto>.+)$")]
    private static partial Regex LinhaGrupo();

    // A posição 39 da fonte não tem TAB entre nome e pontos ("República Tcheca1510.15").
    [GeneratedRegex(@"^\s*(?<pos>\d+)\s+(?<nome>.+?)\s*(?<pontos>\d+\.\d+)\s*$")]
    private static partial Regex LinhaRanking();

    [GeneratedRegex(@"^\S+\s+(?<dia>\d{1,2})\s+(?<mes>\p{L}+)\s+(?<ano>\d{4})$")]
    private static partial Regex CabecalhoDia();

    [GeneratedRegex(@"^(?<mandante>.+?)\s+x\s+(?<visitante>.+?)\s+(?<h>\d{1,2}):(?<min>\d{2})\s*hs(?:\s*\((?<diaExpl>\d{1,2})\s+de\s+(?<mesExpl>\p{L}+)\))?$")]
    private static partial Regex LinhaJogoGrupo();

    [GeneratedRegex(@"Grupo\s+(?<grupo>[A-L])\s+·.*\((?<cidade>[^)]+)\)\s*$")]
    private static partial Regex DetalheJogoGrupo();

    [GeneratedRegex(@"^(?:(?:Segundafase|Oitavas|Quartas|Semifinal)\s+(?<num>\d+)|Final|Terceiro lugar)$", RegexOptions.IgnoreCase)]
    private static partial Regex CabecalhoMataMata();

    [GeneratedRegex(@"^(?<sede>.+?)\s+(?<dia>\d{2})/(?<mes>\d{2})(?<resto>.*)$")]
    private static partial Regex SedeData();

    [GeneratedRegex(@"(?<h>\d{1,2}):(?<min>\d{2})")]
    private static partial Regex Hora();

    [GeneratedRegex(@"^(?<a>.+?)\s+x\s+(?<b>.+)$")]
    private static partial Regex Confronto();
}
