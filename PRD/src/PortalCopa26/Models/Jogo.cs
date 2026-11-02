namespace PortalCopa26.Models;

public class Jogo
{
    public int Id { get; set; }
    public FaseTorneio Fase { get; set; }

    /// <summary>Número de ordem do jogo dentro da fase (ex.: "Oitavas 3" → 3).</summary>
    public int NumeroNaFase { get; set; }

    /// <summary>Data e hora em horário de Brasília (UTC-03:00), exatamente como na fonte.</summary>
    public DateTime DataHora { get; set; }

    public int EstadioId { get; set; }
    public Estadio? Estadio { get; set; }

    public int? GrupoId { get; set; }
    public Grupo? Grupo { get; set; }

    public int? MandanteId { get; set; }
    public Selecao? Mandante { get; set; }
    public int? VisitanteId { get; set; }
    public Selecao? Visitante { get; set; }

    /// <summary>Descrição da vaga quando o mandante ainda não está definido (ex.: "Venc. Oitavas 1").</summary>
    public string? VagaMandante { get; set; }

    /// <summary>Descrição da vaga quando o visitante ainda não está definido.</summary>
    public string? VagaVisitante { get; set; }

    /// <summary>Placar oficial; nulo enquanto não houver resultado.</summary>
    public int? GolsMandante { get; set; }
    public int? GolsVisitante { get; set; }

    /// <summary>Início do jogo como instante absoluto, para comparar com o relógio em UTC.</summary>
    public DateTimeOffset InicioUtc => FusoTorneio.ParaInstante(DataHora).ToUniversalTime();
}
