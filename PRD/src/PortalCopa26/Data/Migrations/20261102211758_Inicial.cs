using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortalCopa26.Data.Migrations
{
    /// <inheritdoc />
    public partial class Inicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Estadios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", maxLength: 80, nullable: false),
                    Cidade = table.Column<string>(type: "TEXT", maxLength: 80, nullable: false),
                    Pais = table.Column<string>(type: "TEXT", maxLength: 40, nullable: false),
                    Capacidade = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estadios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Grupos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Letra = table.Column<char>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grupos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Simulacoes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    CriadaEm = table.Column<DateTime>(type: "TEXT", nullable: false),
                    AtualizadaEm = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Simulacoes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Selecoes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", maxLength: 60, nullable: false),
                    CodigoFifa = table.Column<string>(type: "TEXT", maxLength: 3, nullable: false),
                    GrupoId = table.Column<int>(type: "INTEGER", nullable: false),
                    Pote = table.Column<int>(type: "INTEGER", nullable: false),
                    CabecaDeChave = table.Column<bool>(type: "INTEGER", nullable: false),
                    Tecnico = table.Column<string>(type: "TEXT", maxLength: 80, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Selecoes", x => x.Id);
                    table.CheckConstraint("CK_Selecoes_Pote", "\"Pote\" BETWEEN 1 AND 4");
                    table.ForeignKey(
                        name: "FK_Selecoes_Grupos_GrupoId",
                        column: x => x.GrupoId,
                        principalTable: "Grupos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Jogadores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SelecaoId = table.Column<int>(type: "INTEGER", nullable: false),
                    Nome = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Idade = table.Column<int>(type: "INTEGER", nullable: false),
                    Posicao = table.Column<int>(type: "INTEGER", nullable: false),
                    Gols = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jogadores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Jogadores_Selecoes_SelecaoId",
                        column: x => x.SelecaoId,
                        principalTable: "Selecoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Jogos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Fase = table.Column<int>(type: "INTEGER", nullable: false),
                    NumeroNaFase = table.Column<int>(type: "INTEGER", nullable: false),
                    DataHora = table.Column<DateTime>(type: "TEXT", nullable: false),
                    EstadioId = table.Column<int>(type: "INTEGER", nullable: false),
                    GrupoId = table.Column<int>(type: "INTEGER", nullable: true),
                    MandanteId = table.Column<int>(type: "INTEGER", nullable: true),
                    VisitanteId = table.Column<int>(type: "INTEGER", nullable: true),
                    VagaMandante = table.Column<string>(type: "TEXT", maxLength: 60, nullable: true),
                    VagaVisitante = table.Column<string>(type: "TEXT", maxLength: 60, nullable: true),
                    GolsMandante = table.Column<int>(type: "INTEGER", nullable: true),
                    GolsVisitante = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jogos", x => x.Id);
                    table.CheckConstraint("CK_Jogos_GolsMandante", "\"GolsMandante\" IS NULL OR \"GolsMandante\" >= 0");
                    table.CheckConstraint("CK_Jogos_GolsVisitante", "\"GolsVisitante\" IS NULL OR \"GolsVisitante\" >= 0");
                    table.ForeignKey(
                        name: "FK_Jogos_Estadios_EstadioId",
                        column: x => x.EstadioId,
                        principalTable: "Estadios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Jogos_Grupos_GrupoId",
                        column: x => x.GrupoId,
                        principalTable: "Grupos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Jogos_Selecoes_MandanteId",
                        column: x => x.MandanteId,
                        principalTable: "Selecoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Jogos_Selecoes_VisitanteId",
                        column: x => x.VisitanteId,
                        principalTable: "Selecoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RankingFifa",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Posicao = table.Column<int>(type: "INTEGER", nullable: false),
                    NomeSelecao = table.Column<string>(type: "TEXT", maxLength: 60, nullable: false),
                    Pontos = table.Column<double>(type: "REAL", nullable: false),
                    SelecaoId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RankingFifa", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RankingFifa_Selecoes_SelecaoId",
                        column: x => x.SelecaoId,
                        principalTable: "Selecoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SimulacaoJogos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SimulacaoId = table.Column<int>(type: "INTEGER", nullable: false),
                    JogoId = table.Column<int>(type: "INTEGER", nullable: false),
                    GolsMandante = table.Column<int>(type: "INTEGER", nullable: false),
                    GolsVisitante = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SimulacaoJogos", x => x.Id);
                    table.CheckConstraint("CK_SimulacaoJogos_GolsMandante", "\"GolsMandante\" >= 0");
                    table.CheckConstraint("CK_SimulacaoJogos_GolsVisitante", "\"GolsVisitante\" >= 0");
                    table.ForeignKey(
                        name: "FK_SimulacaoJogos_Jogos_JogoId",
                        column: x => x.JogoId,
                        principalTable: "Jogos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SimulacaoJogos_Simulacoes_SimulacaoId",
                        column: x => x.SimulacaoId,
                        principalTable: "Simulacoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Estadios_Nome",
                table: "Estadios",
                column: "Nome",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Grupos_Letra",
                table: "Grupos",
                column: "Letra",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Jogadores_SelecaoId",
                table: "Jogadores",
                column: "SelecaoId");

            migrationBuilder.CreateIndex(
                name: "IX_Jogos_DataHora",
                table: "Jogos",
                column: "DataHora");

            migrationBuilder.CreateIndex(
                name: "IX_Jogos_EstadioId",
                table: "Jogos",
                column: "EstadioId");

            migrationBuilder.CreateIndex(
                name: "IX_Jogos_Fase_NumeroNaFase",
                table: "Jogos",
                columns: new[] { "Fase", "NumeroNaFase" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Jogos_GrupoId",
                table: "Jogos",
                column: "GrupoId");

            migrationBuilder.CreateIndex(
                name: "IX_Jogos_MandanteId",
                table: "Jogos",
                column: "MandanteId");

            migrationBuilder.CreateIndex(
                name: "IX_Jogos_VisitanteId",
                table: "Jogos",
                column: "VisitanteId");

            migrationBuilder.CreateIndex(
                name: "IX_RankingFifa_Posicao",
                table: "RankingFifa",
                column: "Posicao",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RankingFifa_SelecaoId",
                table: "RankingFifa",
                column: "SelecaoId",
                unique: true,
                filter: "\"SelecaoId\" IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Selecoes_CodigoFifa",
                table: "Selecoes",
                column: "CodigoFifa",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Selecoes_GrupoId",
                table: "Selecoes",
                column: "GrupoId");

            migrationBuilder.CreateIndex(
                name: "IX_Selecoes_Nome",
                table: "Selecoes",
                column: "Nome",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SimulacaoJogos_JogoId",
                table: "SimulacaoJogos",
                column: "JogoId");

            migrationBuilder.CreateIndex(
                name: "IX_SimulacaoJogos_SimulacaoId_JogoId",
                table: "SimulacaoJogos",
                columns: new[] { "SimulacaoId", "JogoId" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Jogadores");

            migrationBuilder.DropTable(
                name: "RankingFifa");

            migrationBuilder.DropTable(
                name: "SimulacaoJogos");

            migrationBuilder.DropTable(
                name: "Jogos");

            migrationBuilder.DropTable(
                name: "Simulacoes");

            migrationBuilder.DropTable(
                name: "Estadios");

            migrationBuilder.DropTable(
                name: "Selecoes");

            migrationBuilder.DropTable(
                name: "Grupos");
        }
    }
}
