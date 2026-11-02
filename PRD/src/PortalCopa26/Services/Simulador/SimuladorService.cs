using Microsoft.EntityFrameworkCore;
using PortalCopa26.Data;
using PortalCopa26.Models;

namespace PortalCopa26.Services.Simulador;

public sealed class SimuladorService(IDbContextFactory<PortalCopa26DbContext> dbFactory, TimeProvider relogio) : ISimuladorService
{
    public async Task<Simulacao> CriarAsync(string nome, CancellationToken cancellationToken = default)
    {
        var nomeLimpo = nome?.Trim() ?? string.Empty;
        if (nomeLimpo.Length == 0)
        {
            throw new ArgumentException("O nome da simulação é obrigatório.", nameof(nome));
        }

        if (nomeLimpo.Length > Simulacao.NomeTamanhoMaximo)
        {
            throw new ArgumentException($"O nome da simulação deve ter no máximo {Simulacao.NomeTamanhoMaximo} caracteres.", nameof(nome));
        }

        var agora = relogio.GetUtcNow().UtcDateTime;
        var simulacao = new Simulacao { Nome = nomeLimpo, CriadaEm = agora, AtualizadaEm = agora };

        await using var db = await dbFactory.CreateDbContextAsync(cancellationToken);
        db.Simulacoes.Add(simulacao);
        await db.SaveChangesAsync(cancellationToken);
        return simulacao;
    }

    public async Task<Simulacao?> ObterAsync(int id, CancellationToken cancellationToken = default)
    {
        await using var db = await dbFactory.CreateDbContextAsync(cancellationToken);
        return await db.Simulacoes.AsNoTracking()
            .Include(s => s.Jogos)
            .SingleOrDefaultAsync(s => s.Id == id, cancellationToken);
    }

    public async Task<IReadOnlyList<Simulacao>> ListarAsync(CancellationToken cancellationToken = default)
    {
        await using var db = await dbFactory.CreateDbContextAsync(cancellationToken);
        return await db.Simulacoes.AsNoTracking()
            .OrderByDescending(s => s.AtualizadaEm)
            .ThenByDescending(s => s.Id)
            .ToListAsync(cancellationToken);
    }

    public async Task<SimulacaoJogo> SalvarPlacarAsync(int simulacaoId, int jogoId, int golsMandante, int golsVisitante, CancellationToken cancellationToken = default)
    {
        ArgumentOutOfRangeException.ThrowIfNegative(golsMandante);
        ArgumentOutOfRangeException.ThrowIfNegative(golsVisitante);

        await using var db = await dbFactory.CreateDbContextAsync(cancellationToken);
        var simulacao = await db.Simulacoes.SingleOrDefaultAsync(s => s.Id == simulacaoId, cancellationToken)
            ?? throw new InvalidOperationException($"Simulação {simulacaoId} não encontrada.");
        if (!await db.Jogos.AnyAsync(j => j.Id == jogoId, cancellationToken))
        {
            throw new InvalidOperationException($"Jogo {jogoId} não encontrado.");
        }

        var placar = await db.SimulacaoJogos.SingleOrDefaultAsync(sj => sj.SimulacaoId == simulacaoId && sj.JogoId == jogoId, cancellationToken);
        if (placar is null)
        {
            placar = new SimulacaoJogo { SimulacaoId = simulacaoId, JogoId = jogoId };
            db.SimulacaoJogos.Add(placar);
        }

        placar.GolsMandante = golsMandante;
        placar.GolsVisitante = golsVisitante;
        simulacao.AtualizadaEm = relogio.GetUtcNow().UtcDateTime;

        await db.SaveChangesAsync(cancellationToken);
        return placar;
    }

    public async Task<bool> ExcluirAsync(int id, CancellationToken cancellationToken = default)
    {
        await using var db = await dbFactory.CreateDbContextAsync(cancellationToken);
        var simulacao = await db.Simulacoes.Include(s => s.Jogos).SingleOrDefaultAsync(s => s.Id == id, cancellationToken);
        if (simulacao is null)
        {
            return false;
        }

        db.Simulacoes.Remove(simulacao); // os placares saem junto (cascade)
        await db.SaveChangesAsync(cancellationToken);
        return true;
    }
}
