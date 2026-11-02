using System.Text.RegularExpressions;
using PortalCopa26.Data.Seed;
using PortalCopa26.Tests.Infra;

namespace PortalCopa26.Tests.Seed;

public class CatalogoTests
{
    [Fact]
    public void Catalogo_tem_48_selecoes_com_codigos_unicos()
    {
        Assert.Equal(48, SelecaoCatalogo.Todas.Count);
        Assert.Equal(48, SelecaoCatalogo.Todas.Select(s => s.CodigoFifa).Distinct().Count());
        Assert.All(SelecaoCatalogo.Todas, s => Assert.Matches("^[A-Z]{3}$", s.CodigoFifa));
    }

    [Theory]
    [InlineData("República da Coreia", "Coreia do Sul")]
    [InlineData("Tchéquia", "República Tcheca")]
    [InlineData("EUA", "Estados Unidos")]
    [InlineData("Países Baixos", "Holanda")]
    [InlineData("Côte d'Ivoire", "Costa do Marfim")]
    [InlineData("República Islâmica do Irã", "Irã")]
    [InlineData("República Democrática do Congo", "RD Congo")]
    [InlineData("Bósnia", "Bósnia e Herzegovina")]
    public void Aliases_resolvem_para_o_nome_canonico(string alias, string canonico)
    {
        Assert.True(SelecaoCatalogo.TentarResolver(alias, out var item));
        Assert.Equal(canonico, item.Nome);
    }

    [Fact]
    public void Mexico_tem_codigo_MEX()
    {
        Assert.True(SelecaoCatalogo.TentarResolver("México", out var item));
        Assert.Equal("MEX", item.CodigoFifa);
    }

    [Fact]
    public void Todos_os_nomes_de_tecnicos_e_elencos_sao_resolvidos()
    {
        var nomes = Fontes.Linhas(FontesOficiais.Tecnicos).Where(l => l.Contains('|')).Select(l => l.Split('|')[0])
            .Concat(Fontes.Linhas(FontesOficiais.Elencos).Where(l => l.StartsWith('#')).Select(l => l.TrimStart('#')));

        Assert.All(nomes, nome => Assert.True(SelecaoCatalogo.TentarResolver(nome, out _), $"não resolvido: {nome}"));
    }

    [Fact]
    public void Todos_os_nomes_de_selecoes_e_sedes_dos_jogos_sao_resolvidos()
    {
        var linhasConfronto = Fontes.Linhas(FontesOficiais.JogosFaseGrupos)
            .Concat(FontesOficiais.JogosMataMata.SelectMany(j => Fontes.Linhas(j.Arquivo)))
            .Where(l => Regex.IsMatch(l, @"\sx\s"));

        var participantes = linhasConfronto
            .Select(l => Regex.Replace(l, @"\s+\d{1,2}:\d{2}\s*hs.*$", ""))
            .SelectMany(l => Regex.Split(l, @"\s+x\s+"))
            .Select(p => p.Trim())
            .Where(p => !p.StartsWith("Venc.") && !p.StartsWith("Perd."));

        Assert.All(participantes, nome => Assert.True(SelecaoCatalogo.TentarResolver(nome, out _), $"não resolvido: {nome}"));

        var sedesFaseGrupos = Fontes.Linhas(FontesOficiais.JogosFaseGrupos)
            .Select(l => Regex.Match(l, @"·.*\(([^)]+)\)\s*$"))
            .Where(m => m.Success)
            .Select(m => m.Groups[1].Value);
        var sedesMataMata = FontesOficiais.JogosMataMata
            .SelectMany(j => Fontes.Linhas(j.Arquivo))
            .Select(l => Regex.Match(l, @"^(.+?)\s+\d{2}/\d{2}"))
            .Where(m => m.Success)
            .Select(m => m.Groups[1].Value);

        Assert.All(sedesFaseGrupos.Concat(sedesMataMata), sede => Assert.True(EstadioCatalogo.TentarResolver(sede, out _), $"sede não resolvida: {sede}"));
    }

    [Fact]
    public void Catalogo_de_estadios_corresponde_ao_arquivo_de_sedes()
    {
        var estadios = FontesParser.LerEstadios(FontesOficiais.Estadios, Fontes.Linhas(FontesOficiais.Estadios));

        Assert.Equivalent(EstadioCatalogo.AliasesPorEstadio.Keys, estadios.Select(e => e.Nome));
    }
}
