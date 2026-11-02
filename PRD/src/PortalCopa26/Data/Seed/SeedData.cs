using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PortalCopa26.Models;

namespace PortalCopa26.Data.Seed;

public sealed class SeedOptions
{
    public const string Secao = "Seed";

    /// <summary>Pasta dos arquivos oficiais. Se relativa, é resolvida a partir de AppContext.BaseDirectory.</summary>
    public string FontesPath { get; set; } = "Data/Fontes";

    public string PastaFontesAbsoluta =>
        Path.IsPathRooted(FontesPath) ? FontesPath : Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, FontesPath));
}

/// <summary>
/// Carrega no banco os dados oficiais da Copa a partir dos arquivos de Data/Fontes.
/// Idempotente (não faz nada se já há grupos) e atômica (uma transação).
/// </summary>
public sealed class SeedData(
    IDbContextFactory<PortalCopa26DbContext> dbFactory,
    IOptions<SeedOptions> opcoes,
    ILogger<SeedData> logger)
{
    public async Task ExecutarAsync(CancellationToken cancellationToken = default)
    {
        await using var db = await dbFactory.CreateDbContextAsync(cancellationToken);
        if (await db.Grupos.AnyAsync(cancellationToken))
        {
            logger.LogInformation("Seed ignorado: dados oficiais já carregados");
            return;
        }

        // Lê e valida tudo antes de gravar: um erro de fonte não deixa dados parciais.
        var dados = await LerFontesAsync(opcoes.Value.PastaFontesAbsoluta, cancellationToken);
        var entidades = Montar(dados);

        await using var transacao = await db.Database.BeginTransactionAsync(cancellationToken);
        db.Grupos.AddRange(entidades.Grupos);
        db.Estadios.AddRange(entidades.Estadios);
        db.Jogos.AddRange(entidades.Jogos);
        db.RankingFifa.AddRange(entidades.Ranking);
        await db.SaveChangesAsync(cancellationToken);
        await transacao.CommitAsync(cancellationToken);

        logger.LogInformation(
            "Seed concluído: {Grupos} grupos, {Selecoes} seleções, {Jogadores} jogadores, {Estadios} estádios, {Jogos} jogos, {Ranking} posições no ranking",
            entidades.Grupos.Count,
            entidades.Grupos.Sum(g => g.Selecoes.Count),
            entidades.Grupos.Sum(g => g.Selecoes.Sum(s => s.Jogadores.Count)),
            entidades.Estadios.Count,
            entidades.Jogos.Count,
            entidades.Ranking.Count);
    }

    private sealed record DadosFontes(
        IReadOnlyList<GrupoFonte> Grupos,
        IReadOnlyDictionary<string, string> Tecnicos,
        IReadOnlyDictionary<string, IReadOnlyList<JogadorFonte>> Elencos,
        IReadOnlyList<EstadioFonte> Estadios,
        IReadOnlyList<RankingFonte> Ranking,
        IReadOnlyList<JogoFonte> Jogos);

    private sealed record Entidades(List<Grupo> Grupos, List<Estadio> Estadios, List<Jogo> Jogos, List<RankingFifa> Ranking);

    private static async Task<DadosFontes> LerFontesAsync(string pasta, CancellationToken ct)
    {
        async Task<string[]> Ler(string arquivo)
        {
            var caminho = Path.Combine(pasta, arquivo);
            if (!File.Exists(caminho))
            {
                throw new FonteInvalidaException(arquivo, null, $"arquivo oficial não encontrado em {caminho}");
            }

            return await File.ReadAllLinesAsync(caminho, ct);
        }

        var jogos = FontesParser.LerJogosFaseGrupos(FontesOficiais.JogosFaseGrupos, await Ler(FontesOficiais.JogosFaseGrupos)).ToList();
        foreach (var (arquivo, fase) in FontesOficiais.JogosMataMata)
        {
            jogos.AddRange(FontesParser.LerJogosMataMata(arquivo, fase, await Ler(arquivo)));
        }

        return new DadosFontes(
            FontesParser.LerGrupos(FontesOficiais.Grupos, await Ler(FontesOficiais.Grupos)),
            FontesParser.LerTecnicos(FontesOficiais.Tecnicos, await Ler(FontesOficiais.Tecnicos)),
            FontesParser.LerElencos(FontesOficiais.Elencos, await Ler(FontesOficiais.Elencos)),
            FontesParser.LerEstadios(FontesOficiais.Estadios, await Ler(FontesOficiais.Estadios)),
            FontesParser.LerRanking(FontesOficiais.Ranking, await Ler(FontesOficiais.Ranking)),
            jogos);
    }

    private static Entidades Montar(DadosFontes dados)
    {
        var selecoes = new Dictionary<string, Selecao>();
        var grupos = new List<Grupo>();
        foreach (var grupoFonte in dados.Grupos)
        {
            var grupo = new Grupo { Letra = grupoFonte.Letra };
            for (var i = 0; i < grupoFonte.Selecoes.Count; i++)
            {
                var nome = grupoFonte.Selecoes[i];
                if (!SelecaoCatalogo.TentarResolver(nome, out var item))
                {
                    throw new FonteInvalidaException(FontesOficiais.Grupos, null, $"seleção não reconhecida: \"{nome}\"");
                }

                if (!dados.Tecnicos.TryGetValue(nome, out var tecnico))
                {
                    throw new FonteInvalidaException(FontesOficiais.Tecnicos, null, $"técnico não informado para {nome}");
                }

                if (!dados.Elencos.TryGetValue(nome, out var elenco) || elenco.Count == 0)
                {
                    throw new FonteInvalidaException(FontesOficiais.Elencos, null, $"elenco não informado para {nome}");
                }

                var selecao = new Selecao
                {
                    Nome = nome,
                    CodigoFifa = item.CodigoFifa,
                    Pote = i + 1,
                    CabecaDeChave = i == 0,
                    Tecnico = tecnico,
                    Jogadores = elenco.Select(j => new Jogador { Nome = j.Nome, Idade = j.Idade, Posicao = j.Posicao, Gols = j.Gols }).ToList(),
                };
                grupo.Selecoes.Add(selecao);
                selecoes.Add(nome, selecao);
            }

            grupos.Add(grupo);
        }

        var estadios = dados.Estadios.ToDictionary(
            e => e.Nome,
            e => new Estadio { Nome = e.Nome, Cidade = e.Cidade, Pais = e.Pais, Capacidade = e.Capacidade });
        var gruposPorLetra = grupos.ToDictionary(g => g.Letra);

        var jogos = dados.Jogos.Select(j => new Jogo
        {
            Fase = j.Fase,
            NumeroNaFase = j.NumeroNaFase,
            DataHora = j.DataHora,
            Estadio = estadios.TryGetValue(j.Estadio, out var estadio)
                ? estadio
                : throw new FonteInvalidaException(FontesOficiais.Estadios, null, $"estádio \"{j.Estadio}\" não consta no arquivo de sedes"),
            Grupo = j.Grupo is { } letra ? gruposPorLetra[letra] : null,
            Mandante = j.Mandante is null ? null : selecoes[j.Mandante],
            Visitante = j.Visitante is null ? null : selecoes[j.Visitante],
            VagaMandante = j.VagaMandante,
            VagaVisitante = j.VagaVisitante,
        }).ToList();

        var ranking = dados.Ranking.Select(r => new RankingFifa
        {
            Posicao = r.Posicao,
            NomeSelecao = r.NomeSelecao,
            Pontos = r.Pontos,
            Selecao = r.SelecaoParticipante is null ? null : selecoes[r.SelecaoParticipante],
        }).ToList();

        return new Entidades(grupos, estadios.Values.ToList(), jogos, ranking);
    }
}
