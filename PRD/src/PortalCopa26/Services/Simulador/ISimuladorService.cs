using PortalCopa26.Models;

namespace PortalCopa26.Services.Simulador;

/// <summary>Persistência das simulações do usuário e dos placares simulados.</summary>
public interface ISimuladorService
{
    /// <exception cref="ArgumentException">Nome vazio ou maior que o permitido.</exception>
    Task<Simulacao> CriarAsync(string nome, CancellationToken cancellationToken = default);

    /// <summary>Simulação com seus placares, ou nulo se não existir.</summary>
    Task<Simulacao?> ObterAsync(int id, CancellationToken cancellationToken = default);

    /// <summary>Simulações ordenadas da alteração mais recente para a mais antiga (sem os placares).</summary>
    Task<IReadOnlyList<Simulacao>> ListarAsync(CancellationToken cancellationToken = default);

    /// <summary>Grava ou substitui o placar simulado de um jogo e atualiza a data de alteração da simulação.</summary>
    /// <exception cref="ArgumentOutOfRangeException">Gols negativos.</exception>
    /// <exception cref="InvalidOperationException">Simulação ou jogo inexistente.</exception>
    Task<SimulacaoJogo> SalvarPlacarAsync(int simulacaoId, int jogoId, int golsMandante, int golsVisitante, CancellationToken cancellationToken = default);

    /// <summary>Exclui a simulação e todos os seus placares. Retorna falso se ela não existir.</summary>
    Task<bool> ExcluirAsync(int id, CancellationToken cancellationToken = default);
}
