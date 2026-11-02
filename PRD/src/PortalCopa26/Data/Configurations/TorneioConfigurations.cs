using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PortalCopa26.Models;

namespace PortalCopa26.Data.Configurations;

public class GrupoConfiguration : IEntityTypeConfiguration<Grupo>
{
    public void Configure(EntityTypeBuilder<Grupo> builder)
    {
        builder.ToTable("Grupos");
        builder.Property(g => g.Letra).IsRequired();
        builder.HasIndex(g => g.Letra).IsUnique();
    }
}

public class SelecaoConfiguration : IEntityTypeConfiguration<Selecao>
{
    public void Configure(EntityTypeBuilder<Selecao> builder)
    {
        builder.ToTable("Selecoes", t => t.HasCheckConstraint("CK_Selecoes_Pote", "\"Pote\" BETWEEN 1 AND 4"));
        builder.Property(s => s.Nome).IsRequired().HasMaxLength(60);
        builder.Property(s => s.CodigoFifa).IsRequired().HasMaxLength(3);
        builder.Property(s => s.Tecnico).IsRequired().HasMaxLength(80);
        builder.HasIndex(s => s.Nome).IsUnique();
        builder.HasIndex(s => s.CodigoFifa).IsUnique();

        builder.HasOne(s => s.Grupo)
            .WithMany(g => g.Selecoes)
            .HasForeignKey(s => s.GrupoId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}

public class JogadorConfiguration : IEntityTypeConfiguration<Jogador>
{
    public void Configure(EntityTypeBuilder<Jogador> builder)
    {
        builder.ToTable("Jogadores");
        builder.Property(j => j.Nome).IsRequired().HasMaxLength(100);

        builder.HasOne(j => j.Selecao)
            .WithMany(s => s.Jogadores)
            .HasForeignKey(j => j.SelecaoId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}

public class EstadioConfiguration : IEntityTypeConfiguration<Estadio>
{
    public void Configure(EntityTypeBuilder<Estadio> builder)
    {
        builder.ToTable("Estadios");
        builder.Property(e => e.Nome).IsRequired().HasMaxLength(80);
        builder.Property(e => e.Cidade).IsRequired().HasMaxLength(80);
        builder.Property(e => e.Pais).IsRequired().HasMaxLength(40);
        builder.HasIndex(e => e.Nome).IsUnique();
    }
}

public class JogoConfiguration : IEntityTypeConfiguration<Jogo>
{
    public void Configure(EntityTypeBuilder<Jogo> builder)
    {
        builder.ToTable("Jogos", t =>
        {
            t.HasCheckConstraint("CK_Jogos_GolsMandante", "\"GolsMandante\" IS NULL OR \"GolsMandante\" >= 0");
            t.HasCheckConstraint("CK_Jogos_GolsVisitante", "\"GolsVisitante\" IS NULL OR \"GolsVisitante\" >= 0");
        });

        builder.Property(j => j.VagaMandante).HasMaxLength(60);
        builder.Property(j => j.VagaVisitante).HasMaxLength(60);
        builder.Ignore(j => j.InicioUtc);

        builder.HasIndex(j => new { j.Fase, j.NumeroNaFase }).IsUnique();
        builder.HasIndex(j => j.DataHora);

        builder.HasOne(j => j.Estadio).WithMany(e => e.Jogos)
            .HasForeignKey(j => j.EstadioId).OnDelete(DeleteBehavior.Restrict);
        builder.HasOne(j => j.Grupo).WithMany(g => g.Jogos)
            .HasForeignKey(j => j.GrupoId).OnDelete(DeleteBehavior.Restrict);
        builder.HasOne(j => j.Mandante).WithMany()
            .HasForeignKey(j => j.MandanteId).OnDelete(DeleteBehavior.Restrict);
        builder.HasOne(j => j.Visitante).WithMany()
            .HasForeignKey(j => j.VisitanteId).OnDelete(DeleteBehavior.Restrict);
    }
}

public class RankingFifaConfiguration : IEntityTypeConfiguration<RankingFifa>
{
    public void Configure(EntityTypeBuilder<RankingFifa> builder)
    {
        builder.ToTable("RankingFifa");
        builder.Property(r => r.NomeSelecao).IsRequired().HasMaxLength(60);
        builder.HasIndex(r => r.Posicao).IsUnique();

        // Único apenas quando há vínculo: várias posições ficam sem seleção participante.
        builder.HasIndex(r => r.SelecaoId).IsUnique().HasFilter("\"SelecaoId\" IS NOT NULL");
        builder.HasOne(r => r.Selecao).WithOne(s => s.Ranking)
            .HasForeignKey<RankingFifa>(r => r.SelecaoId).OnDelete(DeleteBehavior.Restrict);
    }
}
