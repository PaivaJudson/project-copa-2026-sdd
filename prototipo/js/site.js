/* ==========================================================================
   PortalCopa26 — dados da Copa e funções JavaScript
   Seed gerado a partir dos arquivos da pasta /fontes (fonte da verdade).
   ========================================================================== */

/* eslint-disable */
const COPA = {
"selecoes":[{"codigo":"MEX","nome":"México","grupo":"A","pote":1,"cabecaDeChave":true,"tecnico":"Javier Aguirre","rankingFifa":15,"pontosFifa":1685.68},{"codigo":"RSA","nome":"África do Sul","grupo":"A","pote":2,"cabecaDeChave":false,"tecnico":"Hugo Broos","rankingFifa":74,"pontosFifa":1332.99},{"codigo":"KOR","nome":"Coreia do Sul","grupo":"A","pote":3,"cabecaDeChave":false,"tecnico":"Hong Myung-bo","rankingFifa":25,"pontosFifa":1590.69},{"codigo":"CZE","nome":"República Tcheca","grupo":"A","pote":4,"cabecaDeChave":false,"tecnico":"Miroslav Koubek","rankingFifa":39,"pontosFifa":1510.15},{"codigo":"CAN","nome":"Canadá","grupo":"B","pote":1,"cabecaDeChave":true,"tecnico":"Jesse Marsch","rankingFifa":24,"pontosFifa":1599.2},{"codigo":"BIH","nome":"Bósnia e Herzegovina","grupo":"B","pote":2,"cabecaDeChave":false,"tecnico":"Sergej Barbarez","rankingFifa":null,"pontosFifa":null},{"codigo":"QAT","nome":"Catar","grupo":"B","pote":3,"cabecaDeChave":false,"tecnico":"Julen Lopetegui","rankingFifa":55,"pontosFifa":1419.02},{"codigo":"SUI","nome":"Suíça","grupo":"B","pote":4,"cabecaDeChave":false,"tecnico":"Murat Yakin","rankingFifa":19,"pontosFifa":1652.43},{"codigo":"BRA","nome":"Brasil","grupo":"C","pote":1,"cabecaDeChave":true,"tecnico":"Carlo Ancelotti","rankingFifa":6,"pontosFifa":1765.86},{"codigo":"MAR","nome":"Marrocos","grupo":"C","pote":2,"cabecaDeChave":false,"tecnico":"Mohamed Ouahbi","rankingFifa":7,"pontosFifa":1755.1},{"codigo":"HAI","nome":"Haiti","grupo":"C","pote":3,"cabecaDeChave":false,"tecnico":"Sébastien Migné","rankingFifa":63,"pontosFifa":1388.38},{"codigo":"SCO","nome":"Escócia","grupo":"C","pote":4,"cabecaDeChave":false,"tecnico":"Steve Clarke","rankingFifa":42,"pontosFifa":1497.93},{"codigo":"USA","nome":"Estados Unidos","grupo":"D","pote":1,"cabecaDeChave":true,"tecnico":"Mauricio Pochettino","rankingFifa":17,"pontosFifa":1678.82},{"codigo":"PAR","nome":"Paraguai","grupo":"D","pote":2,"cabecaDeChave":false,"tecnico":"Gustavo Alfaro","rankingFifa":44,"pontosFifa":1485.42},{"codigo":"AUS","nome":"Austrália","grupo":"D","pote":3,"cabecaDeChave":false,"tecnico":"Tony Popovic","rankingFifa":28,"pontosFifa":1582.72},{"codigo":"TUR","nome":"Turquia","grupo":"D","pote":4,"cabecaDeChave":false,"tecnico":"Vincenzo Montella","rankingFifa":22,"pontosFifa":1602.95},{"codigo":"GER","nome":"Alemanha","grupo":"E","pote":1,"cabecaDeChave":true,"tecnico":"Julian Nagelsmann","rankingFifa":10,"pontosFifa":1735.77},{"codigo":"CUW","nome":"Curaçao","grupo":"E","pote":2,"cabecaDeChave":false,"tecnico":"Dick Advocaat","rankingFifa":null,"pontosFifa":null},{"codigo":"CIV","nome":"Costa do Marfim","grupo":"E","pote":3,"cabecaDeChave":false,"tecnico":"Emerse Faé","rankingFifa":35,"pontosFifa":1532},{"codigo":"ECU","nome":"Equador","grupo":"E","pote":4,"cabecaDeChave":false,"tecnico":"Sebastián Beccacece","rankingFifa":20,"pontosFifa":1635.64},{"codigo":"NED","nome":"Holanda","grupo":"F","pote":1,"cabecaDeChave":true,"tecnico":"Ronald Koeman","rankingFifa":8,"pontosFifa":1753.57},{"codigo":"JPN","nome":"Japão","grupo":"F","pote":2,"cabecaDeChave":false,"tecnico":"Hajime Moriyasu","rankingFifa":18,"pontosFifa":1661.38},{"codigo":"SWE","nome":"Suécia","grupo":"F","pote":3,"cabecaDeChave":false,"tecnico":"Graham Potter","rankingFifa":38,"pontosFifa":1515.88},{"codigo":"TUN","nome":"Tunísia","grupo":"F","pote":4,"cabecaDeChave":false,"tecnico":"Sabri Lamouchi","rankingFifa":40,"pontosFifa":1504.92},{"codigo":"BEL","nome":"Bélgica","grupo":"G","pote":1,"cabecaDeChave":true,"tecnico":"Rudi Garcia","rankingFifa":9,"pontosFifa":1742.24},{"codigo":"EGY","nome":"Egito","grupo":"G","pote":2,"cabecaDeChave":false,"tecnico":"Hossam Hassan","rankingFifa":31,"pontosFifa":1560.23},{"codigo":"IRN","nome":"Irã","grupo":"G","pote":3,"cabecaDeChave":false,"tecnico":"Amir Ghalenoei","rankingFifa":23,"pontosFifa":1600.01},{"codigo":"NZL","nome":"Nova Zelândia","grupo":"G","pote":4,"cabecaDeChave":false,"tecnico":"Darren Bazeley","rankingFifa":null,"pontosFifa":null},{"codigo":"ESP","nome":"Espanha","grupo":"H","pote":1,"cabecaDeChave":true,"tecnico":"Luis de la Fuente","rankingFifa":2,"pontosFifa":1874.71},{"codigo":"CPV","nome":"Cabo Verde","grupo":"H","pote":2,"cabecaDeChave":false,"tecnico":"Pedro Leitão Brito","rankingFifa":null,"pontosFifa":null},{"codigo":"KSA","nome":"Arábia Saudita","grupo":"H","pote":3,"cabecaDeChave":false,"tecnico":"Georgios Donis","rankingFifa":null,"pontosFifa":null},{"codigo":"URU","nome":"Uruguai","grupo":"H","pote":4,"cabecaDeChave":false,"tecnico":"Marcelo Bielsa","rankingFifa":13,"pontosFifa":1702.35},{"codigo":"FRA","nome":"França","grupo":"I","pote":1,"cabecaDeChave":true,"tecnico":"Didier Deschamps","rankingFifa":3,"pontosFifa":1870.7},{"codigo":"SEN","nome":"Senegal","grupo":"I","pote":2,"cabecaDeChave":false,"tecnico":"Pape Thiaw","rankingFifa":16,"pontosFifa":1682.54},{"codigo":"IRQ","nome":"Iraque","grupo":"I","pote":3,"cabecaDeChave":false,"tecnico":"Graham Arnold","rankingFifa":67,"pontosFifa":1368.99},{"codigo":"NOR","nome":"Noruega","grupo":"I","pote":4,"cabecaDeChave":false,"tecnico":"Ståle Solbakken","rankingFifa":32,"pontosFifa":1551.81},{"codigo":"ARG","nome":"Argentina","grupo":"J","pote":1,"cabecaDeChave":true,"tecnico":"Lionel Scaloni","rankingFifa":1,"pontosFifa":1877.72},{"codigo":"ALG","nome":"Argélia","grupo":"J","pote":2,"cabecaDeChave":false,"tecnico":"Vladimir Petković","rankingFifa":29,"pontosFifa":1571.65},{"codigo":"AUT","nome":"Áustria","grupo":"J","pote":3,"cabecaDeChave":false,"tecnico":"Ralf Rangnick","rankingFifa":27,"pontosFifa":1587.22},{"codigo":"JOR","nome":"Jordânia","grupo":"J","pote":4,"cabecaDeChave":false,"tecnico":"Jamal Sellami","rankingFifa":61,"pontosFifa":1397.9},{"codigo":"POR","nome":"Portugal","grupo":"K","pote":1,"cabecaDeChave":true,"tecnico":"Roberto Martínez","rankingFifa":5,"pontosFifa":1767.85},{"codigo":"COD","nome":"RD Congo","grupo":"K","pote":2,"cabecaDeChave":false,"tecnico":"Sébastien Desabre","rankingFifa":50,"pontosFifa":1473},{"codigo":"UZB","nome":"Uzbequistão","grupo":"K","pote":3,"cabecaDeChave":false,"tecnico":"Fabio Cannavaro","rankingFifa":null,"pontosFifa":null},{"codigo":"COL","nome":"Colômbia","grupo":"K","pote":4,"cabecaDeChave":false,"tecnico":"Néstor Lorenzo","rankingFifa":14,"pontosFifa":1697.92},{"codigo":"ENG","nome":"Inglaterra","grupo":"L","pote":1,"cabecaDeChave":false,"tecnico":"Thomas Tuchel","rankingFifa":4,"pontosFifa":1828.02},{"codigo":"CRO","nome":"Croácia","grupo":"L","pote":2,"cabecaDeChave":false,"tecnico":"Zlatko Dalic","rankingFifa":11,"pontosFifa":1720.07},{"codigo":"GHA","nome":"Gana","grupo":"L","pote":3,"cabecaDeChave":false,"tecnico":"Carlos Queiroz","rankingFifa":null,"pontosFifa":null},{"codigo":"PAN","nome":"Panamá","grupo":"L","pote":4,"cabecaDeChave":false,"tecnico":"Thomas Christiansen","rankingFifa":33,"pontosFifa":1550.44}],
"estadios":[{"cidade":"Cidade do México","pais":"México","estadio":"Estádio Azteca","capacidade":"87.523"},{"cidade":"Guadalajara","pais":"México","estadio":"Estadio Akron","capacidade":"49.850"},{"cidade":"Monterrey","pais":"México","estadio":"Estadio BBVA","capacidade":"53.500"},{"cidade":"Nova York/New Jersey","pais":"Estados Unidos","estadio":"MetLife Stadium","capacidade":"82.500"},{"cidade":"Los Angeles","pais":"Estados Unidos","estadio":"SoFi Stadium","capacidade":"70.240"},{"cidade":"Dallas","pais":"Estados Unidos","estadio":"AT&T Stadium","capacidade":"80.000"},{"cidade":"San Francisco","pais":"Estados Unidos","estadio":"Levi's Stadium","capacidade":"68.500"},{"cidade":"Seattle","pais":"Estados Unidos","estadio":"Lumen Field","capacidade":"69.000"},{"cidade":"Boston","pais":"Estados Unidos","estadio":"Gillette Stadium","capacidade":"65.878"},{"cidade":"Miami","pais":"Estados Unidos","estadio":"Hard Rock Stadium","capacidade":"65.326"},{"cidade":"Filadélfia","pais":"Estados Unidos","estadio":"Lincoln Financial Field","capacidade":"69.176"},{"cidade":"Kansas City","pais":"Estados Unidos","estadio":"Arrowhead Stadium","capacidade":"76.416"},{"cidade":"Atlanta","pais":"Estados Unidos","estadio":"Mercedes-Benz Stadium","capacidade":"71.000"},{"cidade":"Houston","pais":"Estados Unidos","estadio":"NRG Stadium","capacidade":"72.220"},{"cidade":"Toronto","pais":"Canadá","estadio":"BMO Field","capacidade":"30.000*"},{"cidade":"Vancouver","pais":"Canadá","estadio":"BC Place","capacidade":"54.500"}],
"fases":[{"nome":"Fase de Grupos","times":48,
"jogos":72,"datas":"11 jun – 2 jul"},{"nome":"Segunda Fase","times":32,
"jogos":16,"datas":"28 jun - 3 jul"},{"nome":"Oitavas de Final","times":16,
"jogos":8,"datas":"4 jul – 9 jul"},{"nome":"Quartas de Final","times":8,
"jogos":4,"datas":"11 jul – 13 jul"},{"nome":"Semifinais","times":4,
"jogos":2,"datas":"15 jul – 16 jul"},{"nome":"3º Lugar","times":2,
"jogos":1,"datas":"18 jul (Miami)"},{"nome":"Final","times":2,
"jogos":1,"datas":"19 jul (Nova York)"}],
"jogos":[{"fase":"Fase de Grupos","grupo":"A","rotulo":null,"data":"2026-06-11","hora":"16:00","mandante":"MEX","visitante":"RSA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":0,"id":1},{"fase":"Fase de Grupos","grupo":"A","rotulo":null,"data":"2026-06-11","hora":"23:00","mandante":"KOR","visitante":"CZE","mandanteRotulo":null,"visitanteRotulo":null,"estadio":1,"id":2},{"fase":"Fase de Grupos","grupo":"B","rotulo":null,"data":"2026-06-12","hora":"16:00","mandante":"CAN","visitante":"BIH","mandanteRotulo":null,"visitanteRotulo":null,"estadio":14,"id":3},{"fase":"Fase de Grupos","grupo":"D","rotulo":null,"data":"2026-06-12","hora":"22:00","mandante":"USA","visitante":"PAR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":4,"id":4},{"fase":"Fase de Grupos","grupo":"B","rotulo":null,"data":"2026-06-13","hora":"16:00","mandante":"QAT","visitante":"SUI","mandanteRotulo":null,"visitanteRotulo":null,"estadio":6,"id":5},{"fase":"Fase de Grupos","grupo":"C","rotulo":null,"data":"2026-06-13","hora":"19:00","mandante":"BRA","visitante":"MAR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":3,"id":6},{"fase":"Fase de Grupos","grupo":"C","rotulo":null,"data":"2026-06-13","hora":"22:00","mandante":"HAI","visitante":"SCO","mandanteRotulo":null,"visitanteRotulo":null,"estadio":8,"id":7},{"fase":"Fase de Grupos","grupo":"D","rotulo":null,"data":"2026-06-14","hora":"01:00","mandante":"AUS","visitante":"TUR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":15,"id":8},{"fase":"Fase de Grupos","grupo":"E","rotulo":null,"data":"2026-06-14","hora":"14:00","mandante":"GER","visitante":"CUW","mandanteRotulo":null,"visitanteRotulo":null,"estadio":13,"id":9},{"fase":"Fase de Grupos","grupo":"F","rotulo":null,"data":"2026-06-14","hora":"17:00","mandante":"NED","visitante":"JPN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":5,"id":10},{"fase":"Fase de Grupos","grupo":"E","rotulo":null,"data":"2026-06-14","hora":"20:00","mandante":"CIV","visitante":"ECU","mandanteRotulo":null,"visitanteRotulo":null,"estadio":10,"id":11},{"fase":"Fase de Grupos","grupo":"F","rotulo":null,"data":"2026-06-14","hora":"23:00","mandante":"SWE","visitante":"TUN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":2,"id":12},{"fase":"Fase de Grupos","grupo":"H","rotulo":null,"data":"2026-06-15","hora":"13:00","mandante":"ESP","visitante":"CPV","mandanteRotulo":null,"visitanteRotulo":null,"estadio":12,"id":13},{"fase":"Fase de Grupos","grupo":"G","rotulo":null,"data":"2026-06-15","hora":"16:00","mandante":"BEL","visitante":"EGY","mandanteRotulo":null,"visitanteRotulo":null,"estadio":7,"id":14},{"fase":"Fase de Grupos","grupo":"H","rotulo":null,"data":"2026-06-15","hora":"19:00","mandante":"KSA","visitante":"URU","mandanteRotulo":null,"visitanteRotulo":null,"estadio":9,"id":15},{"fase":"Fase de Grupos","grupo":"G","rotulo":null,"data":"2026-06-15","hora":"22:00","mandante":"IRN","visitante":"NZL","mandanteRotulo":null,"visitanteRotulo":null,"estadio":4,"id":16},{"fase":"Fase de Grupos","grupo":"I","rotulo":null,"data":"2026-06-16","hora":"16:00","mandante":"FRA","visitante":"SEN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":3,"id":17},{"fase":"Fase de Grupos","grupo":"I","rotulo":null,"data":"2026-06-16","hora":"19:00","mandante":"IRQ","visitante":"NOR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":8,"id":18},{"fase":"Fase de Grupos","grupo":"J","rotulo":null,"data":"2026-06-16","hora":"22:00","mandante":"ARG","visitante":"ALG","mandanteRotulo":null,"visitanteRotulo":null,"estadio":11,"id":19},{"fase":"Fase de Grupos","grupo":"J","rotulo":null,"data":"2026-06-17","hora":"01:00","mandante":"AUT","visitante":"JOR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":6,"id":20},{"fase":"Fase de Grupos","grupo":"K","rotulo":null,"data":"2026-06-17","hora":"14:00","mandante":"POR","visitante":"COD","mandanteRotulo":null,"visitanteRotulo":null,"estadio":13,"id":21},{"fase":"Fase de Grupos","grupo":"L","rotulo":null,"data":"2026-06-17","hora":"17:00","mandante":"ENG","visitante":"CRO","mandanteRotulo":null,"visitanteRotulo":null,"estadio":5,"id":22},{"fase":"Fase de Grupos","grupo":"L","rotulo":null,"data":"2026-06-17","hora":"20:00","mandante":"GHA","visitante":"PAN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":14,"id":23},{"fase":"Fase de Grupos","grupo":"K","rotulo":null,"data":"2026-06-17","hora":"23:00","mandante":"UZB","visitante":"COL","mandanteRotulo":null,"visitanteRotulo":null,"estadio":0,"id":24},{"fase":"Fase de Grupos","grupo":"A","rotulo":null,"data":"2026-06-18","hora":"13:00","mandante":"CZE","visitante":"RSA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":12,"id":25},{"fase":"Fase de Grupos","grupo":"B","rotulo":null,"data":"2026-06-18","hora":"16:00","mandante":"SUI","visitante":"BIH","mandanteRotulo":null,"visitanteRotulo":null,"estadio":4,"id":26},{"fase":"Fase de Grupos","grupo":"B","rotulo":null,"data":"2026-06-18","hora":"19:00","mandante":"CAN","visitante":"QAT","mandanteRotulo":null,"visitanteRotulo":null,"estadio":15,"id":27},{"fase":"Fase de Grupos","grupo":"A","rotulo":null,"data":"2026-06-18","hora":"22:00","mandante":"MEX","visitante":"KOR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":1,"id":28},{"fase":"Fase de Grupos","grupo":"D","rotulo":null,"data":"2026-06-19","hora":"16:00","mandante":"USA","visitante":"AUS","mandanteRotulo":null,"visitanteRotulo":null,"estadio":7,"id":29},{"fase":"Fase de Grupos","grupo":"C","rotulo":null,"data":"2026-06-19","hora":"19:00","mandante":"SCO","visitante":"MAR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":8,"id":30},{"fase":"Fase de Grupos","grupo":"C","rotulo":null,"data":"2026-06-19","hora":"21:30","mandante":"BRA","visitante":"HAI","mandanteRotulo":null,"visitanteRotulo":null,"estadio":10,"id":31},{"fase":"Fase de Grupos","grupo":"D","rotulo":null,"data":"2026-06-20","hora":"00:00","mandante":"TUR","visitante":"PAR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":6,"id":32},{"fase":"Fase de Grupos","grupo":"F","rotulo":null,"data":"2026-06-20","hora":"14:00","mandante":"NED","visitante":"SWE","mandanteRotulo":null,"visitanteRotulo":null,"estadio":13,"id":33},{"fase":"Fase de Grupos","grupo":"E","rotulo":null,"data":"2026-06-20","hora":"17:00","mandante":"GER","visitante":"CIV","mandanteRotulo":null,"visitanteRotulo":null,"estadio":14,"id":34},{"fase":"Fase de Grupos","grupo":"E","rotulo":null,"data":"2026-06-20","hora":"21:00","mandante":"ECU","visitante":"CUW","mandanteRotulo":null,"visitanteRotulo":null,"estadio":11,"id":35},{"fase":"Fase de Grupos","grupo":"F","rotulo":null,"data":"2026-06-21","hora":"01:00","mandante":"TUN","visitante":"JPN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":2,"id":36},{"fase":"Fase de Grupos","grupo":"H","rotulo":null,"data":"2026-06-21","hora":"13:00","mandante":"ESP","visitante":"KSA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":12,"id":37},{"fase":"Fase de Grupos","grupo":"G","rotulo":null,"data":"2026-06-21","hora":"16:00","mandante":"BEL","visitante":"IRN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":4,"id":38},{"fase":"Fase de Grupos","grupo":"H","rotulo":null,"data":"2026-06-21","hora":"19:00","mandante":"URU","visitante":"CPV","mandanteRotulo":null,"visitanteRotulo":null,"estadio":9,"id":39},{"fase":"Fase de Grupos","grupo":"G","rotulo":null,"data":"2026-06-21","hora":"22:00","mandante":"NZL","visitante":"EGY","mandanteRotulo":null,"visitanteRotulo":null,"estadio":15,"id":40},{"fase":"Fase de Grupos","grupo":"J","rotulo":null,"data":"2026-06-22","hora":"14:00","mandante":"ARG","visitante":"AUT","mandanteRotulo":null,"visitanteRotulo":null,"estadio":5,"id":41},{"fase":"Fase de Grupos","grupo":"I","rotulo":null,"data":"2026-06-22","hora":"18:00","mandante":"FRA","visitante":"IRQ","mandanteRotulo":null,"visitanteRotulo":null,"estadio":10,"id":42},{"fase":"Fase de Grupos","grupo":"I","rotulo":null,"data":"2026-06-22","hora":"21:00","mandante":"NOR","visitante":"SEN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":3,"id":43},{"fase":"Fase de Grupos","grupo":"J","rotulo":null,"data":"2026-06-23","hora":"00:00","mandante":"JOR","visitante":"ALG","mandanteRotulo":null,"visitanteRotulo":null,"estadio":6,"id":44},{"fase":"Fase de Grupos","grupo":"K","rotulo":null,"data":"2026-06-23","hora":"14:00","mandante":"POR","visitante":"UZB","mandanteRotulo":null,"visitanteRotulo":null,"estadio":13,"id":45},{"fase":"Fase de Grupos","grupo":"L","rotulo":null,"data":"2026-06-23","hora":"17:00","mandante":"ENG","visitante":"GHA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":8,"id":46},{"fase":"Fase de Grupos","grupo":"L","rotulo":null,"data":"2026-06-23","hora":"20:00","mandante":"PAN","visitante":"CRO","mandanteRotulo":null,"visitanteRotulo":null,"estadio":14,"id":47},{"fase":"Fase de Grupos","grupo":"K","rotulo":null,"data":"2026-06-23","hora":"23:00","mandante":"COL","visitante":"COD","mandanteRotulo":null,"visitanteRotulo":null,"estadio":1,"id":48},{"fase":"Fase de Grupos","grupo":"B","rotulo":null,"data":"2026-06-24","hora":"16:00","mandante":"SUI","visitante":"CAN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":15,"id":49},{"fase":"Fase de Grupos","grupo":"B","rotulo":null,"data":"2026-06-24","hora":"16:00","mandante":"BIH","visitante":"QAT","mandanteRotulo":null,"visitanteRotulo":null,"estadio":7,"id":50},{"fase":"Fase de Grupos","grupo":"C","rotulo":null,"data":"2026-06-24","hora":"19:00","mandante":"SCO","visitante":"BRA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":9,"id":51},{"fase":"Fase de Grupos","grupo":"C","rotulo":null,"data":"2026-06-24","hora":"19:00","mandante":"MAR","visitante":"HAI","mandanteRotulo":null,"visitanteRotulo":null,"estadio":12,"id":52},{"fase":"Fase de Grupos","grupo":"A","rotulo":null,"data":"2026-06-24","hora":"22:00","mandante":"CZE","visitante":"MEX","mandanteRotulo":null,"visitanteRotulo":null,"estadio":0,"id":53},{"fase":"Fase de Grupos","grupo":"A","rotulo":null,"data":"2026-06-24","hora":"22:00","mandante":"RSA","visitante":"KOR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":2,"id":54},{"fase":"Fase de Grupos","grupo":"E","rotulo":null,"data":"2026-06-25","hora":"17:00","mandante":"ECU","visitante":"GER","mandanteRotulo":null,"visitanteRotulo":null,"estadio":3,"id":55},{"fase":"Fase de Grupos","grupo":"E","rotulo":null,"data":"2026-06-25","hora":"17:00","mandante":"CUW","visitante":"CIV","mandanteRotulo":null,"visitanteRotulo":null,"estadio":10,"id":56},{"fase":"Fase de Grupos","grupo":"F","rotulo":null,"data":"2026-06-25","hora":"20:00","mandante":"JPN","visitante":"SWE","mandanteRotulo":null,"visitanteRotulo":null,"estadio":5,"id":57},{"fase":"Fase de Grupos","grupo":"F","rotulo":null,"data":"2026-06-25","hora":"20:00","mandante":"TUN","visitante":"NED","mandanteRotulo":null,"visitanteRotulo":null,"estadio":11,"id":58},{"fase":"Fase de Grupos","grupo":"D","rotulo":null,"data":"2026-06-25","hora":"23:00","mandante":"TUR","visitante":"USA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":4,"id":59},{"fase":"Fase de Grupos","grupo":"D","rotulo":null,"data":"2026-06-25","hora":"23:00","mandante":"PAR","visitante":"AUS","mandanteRotulo":null,"visitanteRotulo":null,"estadio":6,"id":60},{"fase":"Fase de Grupos","grupo":"I","rotulo":null,"data":"2026-06-26","hora":"16:00","mandante":"NOR","visitante":"FRA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":8,"id":61},{"fase":"Fase de Grupos","grupo":"I","rotulo":null,"data":"2026-06-26","hora":"16:00","mandante":"SEN","visitante":"IRQ","mandanteRotulo":null,"visitanteRotulo":null,"estadio":14,"id":62},{"fase":"Fase de Grupos","grupo":"H","rotulo":null,"data":"2026-06-26","hora":"21:00","mandante":"CPV","visitante":"KSA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":13,"id":63},{"fase":"Fase de Grupos","grupo":"H","rotulo":null,"data":"2026-06-26","hora":"21:00","mandante":"URU","visitante":"ESP","mandanteRotulo":null,"visitanteRotulo":null,"estadio":1,"id":64},{"fase":"Fase de Grupos","grupo":"G","rotulo":null,"data":"2026-06-27","hora":"00:00","mandante":"EGY","visitante":"IRN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":7,"id":65},{"fase":"Fase de Grupos","grupo":"G","rotulo":null,"data":"2026-06-27","hora":"00:00","mandante":"NZL","visitante":"BEL","mandanteRotulo":null,"visitanteRotulo":null,"estadio":15,"id":66},{"fase":"Fase de Grupos","grupo":"L","rotulo":null,"data":"2026-06-27","hora":"18:00","mandante":"PAN","visitante":"ENG","mandanteRotulo":null,"visitanteRotulo":null,"estadio":3,"id":67},{"fase":"Fase de Grupos","grupo":"L","rotulo":null,"data":"2026-06-27","hora":"18:00","mandante":"CRO","visitante":"GHA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":10,"id":68},{"fase":"Fase de Grupos","grupo":"K","rotulo":null,"data":"2026-06-27","hora":"20:30","mandante":"COL","visitante":"POR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":9,"id":69},{"fase":"Fase de Grupos","grupo":"K","rotulo":null,"data":"2026-06-27","hora":"20:30","mandante":"COD","visitante":"UZB","mandanteRotulo":null,"visitanteRotulo":null,"estadio":12,"id":70},{"fase":"Fase de Grupos","grupo":"J","rotulo":null,"data":"2026-06-27","hora":"23:00","mandante":"ALG","visitante":"AUT","mandanteRotulo":null,"visitanteRotulo":null,"estadio":11,"id":71},{"fase":"Fase de Grupos","grupo":"J","rotulo":null,"data":"2026-06-27","hora":"23:00","mandante":"JOR","visitante":"ARG","mandanteRotulo":null,"visitanteRotulo":null,"estadio":5,"id":72},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 3","data":"2026-06-28","hora":"16:00","mandante":"RSA","visitante":"CAN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":4,"id":73},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 9","data":"2026-06-29","hora":"14:00","mandante":"BRA","visitante":"JPN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":13,"id":74},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 1","data":"2026-06-29","hora":"17:30","mandante":"GER","visitante":"PAR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":8,"id":75},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 4","data":"2026-06-29","hora":"22:00","mandante":"NED","visitante":"MAR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":2,"id":76},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 10","data":"2026-06-30","hora":"14:00","mandante":"CIV","visitante":"NOR","mandanteRotulo":null,"visitanteRotulo":null,"estadio":5,"id":77},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 2","data":"2026-06-30","hora":"18:00","mandante":"FRA","visitante":"SWE","mandanteRotulo":null,"visitanteRotulo":null,"estadio":3,"id":78},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 11","data":"2026-06-30","hora":"22:00","mandante":"MEX","visitante":"ECU","mandanteRotulo":null,"visitanteRotulo":null,"estadio":0,"id":79},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 12","data":"2026-07-01","hora":"13:00","mandante":"ENG","visitante":"COD","mandanteRotulo":null,"visitanteRotulo":null,"estadio":12,"id":80},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 8","data":"2026-07-01","hora":"17:00","mandante":"BEL","visitante":"SEN","mandanteRotulo":null,"visitanteRotulo":null,"estadio":7,"id":81},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 7","data":"2026-07-01","hora":"21:00","mandante":"USA","visitante":"BIH","mandanteRotulo":null,"visitanteRotulo":null,"estadio":6,"id":82},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 6","data":"2026-07-02","hora":"16:00","mandante":"ESP","visitante":"AUT","mandanteRotulo":null,"visitanteRotulo":null,"estadio":4,"id":83},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 5","data":"2026-07-02","hora":"20:00","mandante":"POR","visitante":"CRO","mandanteRotulo":null,"visitanteRotulo":null,"estadio":14,"id":84},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 15","data":"2026-07-03","hora":"00:00","mandante":"SUI","visitante":"ALG","mandanteRotulo":null,"visitanteRotulo":null,"estadio":15,"id":85},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 14","data":"2026-07-03","hora":"15:00","mandante":"AUS","visitante":"EGY","mandanteRotulo":null,"visitanteRotulo":null,"estadio":5,"id":86},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 13","data":"2026-07-03","hora":"19:00","mandante":"ARG","visitante":"CPV","mandanteRotulo":null,"visitanteRotulo":null,"estadio":9,"id":87},{"fase":"Segunda Fase","grupo":null,"rotulo":"Segunda Fase 16","data":"2026-07-03","hora":"22:30","mandante":"COL","visitante":"GHA","mandanteRotulo":null,"visitanteRotulo":null,"estadio":11,"id":88},{"fase":"Oitavas de Final","grupo":null,"rotulo":"Oitavas 2","data":"2026-07-04","hora":"14:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Segunda Fase 3","visitanteRotulo":"Venc. Segunda Fase 4","estadio":13,"id":89},{"fase":"Oitavas de Final","grupo":null,"rotulo":"Oitavas 1","data":"2026-07-04","hora":"18:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Segunda Fase 1","visitanteRotulo":"Venc. Segunda Fase 2","estadio":10,"id":90},{"fase":"Oitavas de Final","grupo":null,"rotulo":"Oitavas 5","data":"2026-07-05","hora":"17:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Segunda Fase 9","visitanteRotulo":"Venc. Segunda Fase 10","estadio":3,"id":91},{"fase":"Oitavas de Final","grupo":null,"rotulo":"Oitavas 6","data":"2026-07-05","hora":"21:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Segunda Fase 11","visitanteRotulo":"Venc. Segunda Fase 12","estadio":0,"id":92},{"fase":"Oitavas de Final","grupo":null,"rotulo":"Oitavas 3","data":"2026-07-06","hora":"16:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Segunda Fase 5","visitanteRotulo":"Venc. Segunda Fase 6","estadio":5,"id":93},{"fase":"Oitavas de Final","grupo":null,"rotulo":"Oitavas 4","data":"2026-07-06","hora":"21:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Segunda Fase 7","visitanteRotulo":"Venc. Segunda Fase 8","estadio":7,"id":94},{"fase":"Oitavas de Final","grupo":null,"rotulo":"Oitavas 7","data":"2026-07-07","hora":"13:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Segunda Fase 13","visitanteRotulo":"Venc. Segunda Fase 14","estadio":12,"id":95},{"fase":"Oitavas de Final","grupo":null,"rotulo":"Oitavas 8","data":"2026-07-07","hora":"17:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Segunda Fase 15","visitanteRotulo":"Venc. Segunda Fase 16","estadio":15,"id":96},{"fase":"Quartas de Final","grupo":null,"rotulo":"Quartas 1","data":"2026-07-09","hora":"17:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Oitavas 1","visitanteRotulo":"Venc. Oitavas 2","estadio":8,"id":97},{"fase":"Quartas de Final","grupo":null,"rotulo":"Quartas 2","data":"2026-07-10","hora":"16:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Oitavas 3","visitanteRotulo":"Venc. Oitavas 4","estadio":4,"id":98},{"fase":"Quartas de Final","grupo":null,"rotulo":"Quartas 3","data":"2026-07-11","hora":"18:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Oitavas 5","visitanteRotulo":"Venc. Oitavas 6","estadio":9,"id":99},{"fase":"Quartas de Final","grupo":null,"rotulo":"Quartas 4","data":"2026-07-11","hora":"22:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Oitavas 7","visitanteRotulo":"Venc. Oitavas 8","estadio":11,"id":100},{"fase":"Semifinais","grupo":null,"rotulo":"Semifinal 1","data":"2026-07-14","hora":"16:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Quartas 1","visitanteRotulo":"Venc. Quartas 2","estadio":5,"id":101},{"fase":"Semifinais","grupo":null,"rotulo":"Semifinal 2","data":"2026-07-15","hora":"16:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Quartas 3","visitanteRotulo":"Venc. Quartas 4","estadio":12,"id":102},{"fase":"3º Lugar","grupo":null,"rotulo":"Terceiro lugar","data":"2026-07-18","hora":"18:00","mandante":null,"visitante":null,"mandanteRotulo":"Perd. Semifinal 1","visitanteRotulo":"Perd. Semifinal 2","estadio":9,"id":103},{"fase":"Final","grupo":null,"rotulo":"Final","data":"2026-07-19","hora":"16:00","mandante":null,"visitante":null,"mandanteRotulo":"Venc. Semifinal 1","visitanteRotulo":"Venc. Semifinal 2","estadio":3,"id":104}],
"ranking":[{"posicao":1,"nome":"Argentina","pontos":1877.72,"codigo":"ARG"},{"posicao":2,"nome":"Espanha","pontos":1874.71,"codigo":"ESP"},{"posicao":3,"nome":"França","pontos":1870.7,"codigo":"FRA"},{"posicao":4,"nome":"Inglaterra","pontos":1828.02,"codigo":"ENG"},{"posicao":5,"nome":"Portugal","pontos":1767.85,"codigo":"POR"},{"posicao":6,"nome":"Brasil","pontos":1765.86,"codigo":"BRA"},{"posicao":7,"nome":"Marrocos","pontos":1755.1,"codigo":"MAR"},{"posicao":8,"nome":"Holanda","pontos":1753.57,"codigo":"NED"},{"posicao":9,"nome":"Bélgica","pontos":1742.24,"codigo":"BEL"},{"posicao":10,"nome":"Alemanha","pontos":1735.77,"codigo":"GER"},{"posicao":11,"nome":"Croácia","pontos":1720.07,"codigo":"CRO"},{"posicao":12,"nome":"Itália","pontos":1703.37,"codigo":null},{"posicao":13,"nome":"Uruguai","pontos":1702.35,"codigo":"URU"},{"posicao":14,"nome":"Colômbia","pontos":1697.92,"codigo":"COL"},{"posicao":15,"nome":"México","pontos":1685.68,"codigo":"MEX"},{"posicao":16,"nome":"Senegal","pontos":1682.54,"codigo":"SEN"},{"posicao":17,"nome":"Estados Unidos","pontos":1678.82,"codigo":"USA"},{"posicao":18,"nome":"Japão","pontos":1661.38,"codigo":"JPN"},{"posicao":19,"nome":"Suíça","pontos":1652.43,"codigo":"SUI"},{"posicao":20,"nome":"Equador","pontos":1635.64,"codigo":"ECU"},{"posicao":21,"nome":"Dinamarca","pontos":1626.09,"codigo":null},{"posicao":22,"nome":"Turquia","pontos":1602.95,"codigo":"TUR"},{"posicao":23,"nome":"Irã","pontos":1600.01,"codigo":"IRN"},{"posicao":24,"nome":"Canadá","pontos":1599.2,"codigo":"CAN"},{"posicao":25,"nome":"Coreia do Sul","pontos":1590.69,"codigo":"KOR"},{"posicao":26,"nome":"Nigéria","pontos":1589.22,"codigo":null},{"posicao":27,"nome":"Áustria","pontos":1587.22,"codigo":"AUT"},{"posicao":28,"nome":"Austrália","pontos":1582.72,"codigo":"AUS"},{"posicao":29,"nome":"Argélia","pontos":1571.65,"codigo":"ALG"},{"posicao":30,"nome":"Ucrânia","pontos":1564.69,"codigo":null},{"posicao":31,"nome":"Egito","pontos":1560.23,"codigo":"EGY"},{"posicao":32,"nome":"Noruega","pontos":1551.81,"codigo":"NOR"},{"posicao":33,"nome":"Panamá","pontos":1550.44,"codigo":"PAN"},{"posicao":34,"nome":"Polônia","pontos":1539.27,"codigo":null},{"posicao":35,"nome":"Costa do Marfim","pontos":1532,"codigo":"CIV"},{"posicao":36,"nome":"Rússia","pontos":1526.57,"codigo":null},{"posicao":37,"nome":"País de Gales","pontos":1520,"codigo":null},{"posicao":38,"nome":"Suécia","pontos":1515.88,"codigo":"SWE"},{"posicao":39,"nome":"República Tcheca","pontos":1510.15,"codigo":"CZE"},{"posicao":40,"nome":"Tunísia","pontos":1504.92,"codigo":"TUN"},{"posicao":41,"nome":"Hungria","pontos":1502.88,"codigo":null},{"posicao":42,"nome":"Escócia","pontos":1497.93,"codigo":"SCO"},{"posicao":43,"nome":"Camarões","pontos":1487.86,"codigo":null},{"posicao":44,"nome":"Paraguai","pontos":1485.42,"codigo":"PAR"},{"posicao":45,"nome":"Romênia","pontos":1480.2,"codigo":null},{"posicao":46,"nome":"Eslováquia","pontos":1478.71,"codigo":null},{"posicao":47,"nome":"Grécia","pontos":1477.25,"codigo":null},{"posicao":48,"nome":"Geórgia","pontos":1475.13,"codigo":null},{"posicao":49,"nome":"Irlanda","pontos":1474.12,"codigo":null},{"posicao":50,"nome":"RD Congo","pontos":1473,"codigo":"COD"},{"posicao":51,"nome":"Bolívia","pontos":1436.96,"codigo":null},{"posicao":52,"nome":"Sérvia","pontos":1430.94,"codigo":null},{"posicao":53,"nome":"Albânia","pontos":1425.79,"codigo":null},{"posicao":54,"nome":"Gabão","pontos":1420.64,"codigo":null},{"posicao":55,"nome":"Catar","pontos":1419.02,"codigo":"QAT"},{"posicao":56,"nome":"Burkina Faso","pontos":1415.44,"codigo":null},{"posicao":57,"nome":"Israel","pontos":1410.32,"codigo":null},{"posicao":58,"nome":"EA Unidos","pontos":1409.72,"codigo":null},{"posicao":59,"nome":"Angola","pontos":1404.57,"codigo":null},{"posicao":60,"nome":"Benim","pontos":1400.03,"codigo":null},{"posicao":61,"nome":"Jordânia","pontos":1397.9,"codigo":"JOR"},{"posicao":62,"nome":"Zâmbia","pontos":1392.33,"codigo":null},{"posicao":63,"nome":"Haiti","pontos":1388.38,"codigo":"HAI"},{"posicao":64,"nome":"Jamaica","pontos":1376.29,"codigo":null},{"posicao":65,"nome":"Guiné","pontos":1372.56,"codigo":null},{"posicao":66,"nome":"Venezuela","pontos":1371.62,"codigo":null},{"posicao":67,"nome":"Iraque","pontos":1368.99,"codigo":"IRQ"},{"posicao":68,"nome":"Kosovo","pontos":1368.59,"codigo":null},{"posicao":69,"nome":"Finlândia","pontos":1355.15,"codigo":null},{"posicao":70,"nome":"Peru","pontos":1352.99,"codigo":null},{"posicao":71,"nome":"Tadjiquistão","pontos":1349.1,"codigo":null},{"posicao":72,"nome":"Síria","pontos":1338.82,"codigo":null},{"posicao":73,"nome":"Montenegro","pontos":1333.11,"codigo":null},{"posicao":74,"nome":"África do Sul","pontos":1332.99,"codigo":"RSA"},{"posicao":75,"nome":"Palau","pontos":1329.65,"codigo":null},{"posicao":76,"nome":"Bahrain","pontos":1325.96,"codigo":null},{"posicao":77,"nome":"Belarus","pontos":1324.21,"codigo":null},{"posicao":78,"nome":"Eslovênia","pontos":1323.49,"codigo":null},{"posicao":79,"nome":"Líbia","pontos":1318.33,"codigo":null},{"posicao":80,"nome":"Uganda","pontos":1307.62,"codigo":null},{"posicao":81,"nome":"Congo","pontos":1304.08,"codigo":null},{"posicao":82,"nome":"Mac. do Norte","pontos":1302.52,"codigo":null},{"posicao":83,"nome":"Chipre","pontos":1301.69,"codigo":null},{"posicao":84,"nome":"Omã","pontos":1292.72,"codigo":null},{"posicao":85,"nome":"Armênia","pontos":1290.06,"codigo":null},{"posicao":86,"nome":"Ilhas Salomão","pontos":1284.35,"codigo":null},{"posicao":87,"nome":"Estônia","pontos":1283.83,"codigo":null},{"posicao":88,"nome":"Letônia","pontos":1282.91,"codigo":null},{"posicao":89,"nome":"Líbano","pontos":1278.04,"codigo":null},{"posicao":90,"nome":"Ilhas Faroe","pontos":1277.39,"codigo":null},{"posicao":91,"nome":"Cazaquistão","pontos":1268.75,"codigo":null},{"posicao":92,"nome":"China","pontos":1265.12,"codigo":null},{"posicao":93,"nome":"Tailândia","pontos":1258.32,"codigo":null},{"posicao":94,"nome":"Burundi","pontos":1252.66,"codigo":null},{"posicao":95,"nome":"Malawi","pontos":1247.63,"codigo":null},{"posicao":96,"nome":"Quênia","pontos":1245.95,"codigo":null},{"posicao":97,"nome":"Vietnã","pontos":1241.15,"codigo":null},{"posicao":98,"nome":"Islândia","pontos":1239.57,"codigo":null}],
"jogadores":{"ALG":[["Melvin Mastil",26,"Goleiro",0],["Aissa Mandi",34,"Defensor",8],["Achref Abada",27,"Defensor",1],["Mohamed Amine Tougai",26,"Defensor",2],["Zineddine Belaid",27,"Defensor",1],["Ramiz Zerrouki",28,"Meio-campista",3],["Riyad Mahrez",35,"Atacante",38],["Houssem Aouar",27,"Meio-campista",6],["Amine Gouri",26,"Atacante",10],["Farès Chaibi",23,"Meio-campista",3],["Anis Hadj Moussa",24,"Atacante",2],["Nadhir Benbouali",26,"Atacante",1],["Jaouen Hadjam",23,"Defensor",3],["Hicham Boudaqui",26,"Meio-campista",0],["Rayan Ait-Nouri",25,"Defensor",0],["Oussama Benbot",31,"Goleiro",0],["Rafik Belghali",24,"Defensor",1],["Mohamed Amine Amoura",26,"Atacante",19],["Nabil Bentaleb",31,"Meio-campista",6],["Adil Boulbina",23,"Atacante",5],["Ramy Bensebaini",31,"Defensor",9],["Ibrahim Maza",20,"Meio-campista",2],["Luca Zidane",28,"Goleiro",0],["Yacine Titraoui",22,"Meio-campista",0],["Farès Ghedjemis",23,"Atacante",1],["Samir Chergui",27,"Defensor",0]],"ARG":[["Juan Musso",32,"Goleiro",0],["Leonardo Balerdi",29,"Defensor",0],["Nicolás Tagliafico",33,"Defensor",1],["Gonzalo Montiel",29,"Defensor",2],["Leandro Paredes",31,"Meio-campista",5],["Lisandro Martínez",28,"Defensor",1],["Rodrigo De Paul",32,"Meio-campista",2],["Valentín Barco",21,"Meio-campista",2],["Julián Álvarez",26,"Atacante",14],["Lionel Messi",38,"Atacante",20],["Giovani Lo Celso",30,"Meio-campista",4],["Gerónimo Rulli",34,"Goleiro",0],["Cristian Romero",28,"Defensor",3],["Exequiel Palacios",27,"Meio-campista",0],["Nico González",28,"Meio-campista",6],["Thiago Almada",25,"Atacante",5],["Giuliano Simeone",23,"Atacante",2],["Nicolás Paz",21,"Atacante",1],["Nicolás Otamendi",38,"Defensor",38],["Alexis Mac Allister",27,"Meio-campista",6],["Flaco López",25,"Atacante",0],["Lautaro Martínez",28,"Atacante",37],["Emiliano “Dibu” Martínez",33,"Goleiro",0],["Enzo Fernández",25,"Meio-campista",6],["Facundo Medina",27,"Defensor",0],["Nahuel Molina",28,"Defensor",1]],"AUS":[["Mat Ryan",34,"Goleiro",40],["Milos Degenek",32,"Defensor",1],["Alessandro Circati",22,"Defensor",1],["Jacob Italiano",24,"Defensor",0],["Jordan Bos",23,"Defensor",4],["Jason Geria",33,"Defensor",0],["Mathew Leckie",35,"Atacante",14],["Connor Metcalfe",26,"Meio-campista",2],["Mohamed Toure",22,"Atacante",2],["Ajdin Hrustic",29,"Atacante",3],["Awer Mabil",30,"Atacante",10],["Paul Izzo",31,"Goleiro",0],["Aiden O'Neill",27,"Meio-campista",0],["Cameron Devlin",28,"Meio-campista",0],["Kai Trewin",25,"Defensor",0],["Aziz Behich",35,"Defensor",3],["Nestory Irankunda",20,"Atacante",6],["Patrick Beach",22,"Goleiro",0],["Harry Souttar",27,"Defensor",11],["Cristian Volpato",22,"Atacante",0],["Cameron Burgess",30,"Defensor",0],["Jackson Irvine",33,"Meio-campista",14],["Nishan Velupillay",25,"Atacante",3],["Paul Okon-Engstler",21,"Meio-campista",0],["Lucas Herrington",18,"Defensor",0],["Tete Yengi",25,"Atacante",1]],"AUT":[["Alexander Schelager",30,"Goleiro",0],["David Affengruber",25,"Defensor",0],["Kevin Danso",27,"Defensor",0],["Schlager",28,"Meio-campista",4],["Stefan Posch",29,"Defensor",5],["Nicolas Seiwald",25,"Meio-campista",1],["Marko Arnautovic",37,"Atacante",48],["David Alaba",33,"Defensor",15],["Sabitzer",32,"Meio-campista",26],["Florian Grillitsch",30,"Meio-campista",1],["Michael Gregoritsch",32,"Atacante",24],["Florian Wiegele",25,"Goleiro",0],["Patrick Pentz",29,"Goleiro",0],["Sasa Kalajdzic",28,"Atacante",4],["Philipp Lienhart",29,"Defensor",3],["Philipp Mwene",32,"Defensor",0],["Carney Chukwuenmeka",22,"Meio-campista",1],["Romano Schmid",26,"Meio-campista",4],["Dejan Ljubicic",28,"Meio-campista",1],["Konrad Laimer",29,"Meio-campista",7],["Patrick Wimmer",25,"Atacante",1],["Alexander Prass",25,"Meio-campista",0],["Marco Fiedl",28,"Defensor",0],["Paul Wanner",20,"Meio-campista",0],["Michael Svoboda",27,"Defensor",0],["Alessandro Schöpf",32,"Meio-campista",6]],"BEL":[["Courtois",34,"Goleiro",0],["Zeno Debast",22,"Defensor",1],["Arthur Theate",26,"Defensor",1],["Brandon Mechele",33,"Defensor",1],["Maxim De Cuyper",25,"Defensor",4],["Axel Witsel",37,"Meio-campista",12],["Kevin De Bruyne",34,"Meio-campista",37],["Youri Tielemans",29,"Meio-campista",13],["Romelu Lukaku",33,"Atacante",90],["Leandro Trossard",31,"Atacante",12],["Jeremy Doku",24,"Atacante",7],["Lammens",23,"Goleiro",0],["Mike Penders",20,"Goleiro",0],["Dodi Lukebakio",28,"Atacante",6],["Thomas Meunier",34,"Defensor",10],["Koni De Winter",24,"Defensor",0],["Charles De Ketelaere",25,"Atacante",6],["Joaquin Seys",21,"Defensor",0],["Diego Moreira",21,"Meio-campista",0],["Hans Vanaken",33,"Meio-campista",7],["Timothy Castagne",30,"Defensor",2],["Alexis Saelemaekers",26,"Meio-campista",2],["Nicolas Raskin",25,"Meio-campista",2],["Amadou Onana",24,"Meio-campista",1],["Nathan Ngoy",23,"Defensor",0],["Mathias Fernandez-Pardo",21,"Atacante",0]],"BIH":[["Nikola Vasilj",30,"Goleiro",0],["Nihad Mujakic",28,"Defensor",1],["Dennis Hadzikadunic",27,"Defensor",0],["Tarik Muharemovic",23,"Defensor",1],["Sead Kolasinac",33,"Defensor",0],["Benjamin Tahirovic",23,"Meio-campista",2],["Amar Dedic",23,"Defensor",1],["Armin Gigovic",24,"Meio-campista",1],["Samed Bazdar",22,"Atacante",1],["Ermedin Demirovic",28,"Atacante",4],["Edin Dzeko",40,"Atacante",73],["Mladen Jurkas",18,"Goleiro",0],["Ivan Basic",24,"Meio-campista",0],["Ivan Sunjic",29,"Meio-campista",0],["Amar Memic",25,"Meio-campista",1],["Amir Hadziahmetovic",29,"Meio-campista",0],["Dzenis Burnic",28,"Meio-campista",0],["Nikola Katic",29,"Defensor",2],["Kerim Alajbegovic",18,"Atacante",1],["Esmir Bajraktarevic",21,"Atacante",1],["Stjepan Radeljic",28,"Defensor",0],["Martin Zlomislic",27,"Goleiro",0],["Haris Tabakovic",32,"Atacante",4],["Arjan Malic",20,"Defensor",0],["Jovo Lukic",27,"Atacante",1],["Ermin Mahmic",21,"Meio-campista",1]],"BRA":[["Alisson",33,"Goleiro",0],["Éderson",26,"Meio-campista",0],["Gabriel Magalhães",28,"Defensor",1],["Alex Sandro",35,"Defensor",2],["Vinicius Junior",25,"Atacante",11],["Bruno Guimarães",28,"Meio-campista",3],["Matheus Cunha",27,"Atacante",3],["Neymar",34,"Atacante",79],["Raphinha",29,"Atacante",11],["Weverton",38,"Goleiro",0],["Danilo",34,"Defensor",1],["Bremer",29,"Defensor",1],["Léo Pereira",30,"Defensor",0],["Douglas Santos",32,"Defensor",0],["Fabinho",32,"Meio-campista",0],["Danilo Santos",25,"Meio-campista",2],["Endrick",19,"Atacante",4],["Lucas Paquetá",28,"Meio-campista",13],["Luiz Henrique",25,"Atacante",2],["Gabriel Martinelli",25,"Atacante",4],["Roger",27,"Defensor",0],["Igor Thiago",24,"Atacante",2],["Rayan",19,"Atacante",1]],"CPV":[["Josimar Dias",40,"Goleiro",0],["Ianique Tavares",38,"Defensor",4],["Edilson Borges",31,"Defensor",2],["Roberto Lopes",34,"Defensor",0],["Logan Costa",25,"Defensor",0],["Kevin Pina",29,"Meio-campista",3],["Jovane Cabral",28,"Meio-campista",3],["João Paulo Fernandes",28,"Meio-campista",1],["Gilson Benchimol",24,"Atacante",6],["Jamiro Monteiro",32,"Meio-campista",5],["Garry Rodrigues",35,"Meio-campista",10],["Márcio da Rosa",29,"Goleiro",0],["Sidny Cabral",23,"Defensor",3],["Deroy Duarte",26,"Meio-campista",0],["Laros Duarte",29,"Meio-campista",1],["Yannick Semedo",30,"Meio-campista",1],["Willy Semedo",32,"Meio-campista",3],["Telmo Arcanjo",25,"Meio-campista",1],["Dailon Livramento",25,"Atacante",7],["Ryan Mendes",36,"Atacante",22],["Nuno da Costa",35,"Meio-campista",2],["Steven Moreira",31,"Defensor",0],["Carlos Santos",25,"Goleiro",0],["Wagner Pina",23,"Defensor",0],["Kelvin Pires",26,"Defensor",1],["Hélio Varela",24,"Meio-campista",0]],"CAN":[["Dayne St. Clair",29,"Goleiro",0],["Alistair Johnson",27,"Defensor",1],["Alfie Jones",28,"Defensor",0],["Luc De Fougerolles",20,"Defensor",0],["Joel Waterman",30,"Defensor",0],["Mathieu Choinière",27,"Meio-campista",0],["Stephen Eustáquio",29,"Meio-campista",4],["Ismaël Koné",24,"Meio-campista",4],["Cyle Larin",31,"Atacante",32],["Jonathan David",26,"Atacante",42],["Liam Miller",26,"Meio-campista",1],["Tani Oluwaseyi",26,"Atacante",2],["Derek Cornelius",28,"Defensor",1],["Jacob Shaffelburg",26,"Meio-campista",6],["Moïse Bombito",26,"Defensor",0],["Maxime Crépeau",32,"Goleiro",0],["Tajon Buchanan",27,"Atacante",8],["Owen Goodman",22,"Goleiro",0],["Alphonso Davies",25,"Defensor",15],["Ali Ahmed",25,"Atacante",1],["Jonathan Osario",34,"Meio-campista",10],["Richie Laryea",31,"Defensor",1],["Niko Sigur",22,"Defensor",2],["Promise David",24,"Atacante",3],["Nathan Saliba",22,"Meio-campista",3],["Jayden Nelson",23,"Atacante",3]],"COL":[["David Ospina",37,"Goleiro",0],["Daniel Muñoz",30,"Defensor",4],["Jhon Lucumí",27,"Defensor",1],["Santiago Arias",34,"Defensor",0],["Kevin Castaño",25,"Meio-campista",0],["Richard Ríos",26,"Meio-campista",2],["Luis Díaz",29,"Atacante",23],["Jorge Carrascal",28,"Meio-campista",2],["Jhon Córdoba",33,"Atacante",6],["James Rodríguez",34,"Meio-campista",31],["Jhon Arias",28,"Meio-campista",6],["Camilo Vargas",37,"Goleiro",0],["Yerry Mina",31,"Defensor",8],["Gustavo Puerta",22,"Defensor",1],["Juan Camilo Portilla",27,"Meio-campista",0],["Jefferson Lerma",31,"Meio-campista",5],["Johan Mojica",33,"Defensor",1],["Willer Ditta",28,"Defensor",0],["Juan Camilo Hernández",27,"Atacante",2],["Juan Fernando Quintero",33,"Meio-campista",6],["Jaminton Campaz",26,"Atacante",2],["Deiver Machado",32,"Defensor",0],["Davinson Sánchez",30,"Defensor",4],["Álvaro Montero",31,"Goleiro",0],["Luis Javier Suárez",28,"Atacante",5],["Carlos Gómez",23,"Atacante",2]],"COD":[["Lionel Mpasi",31,"Goleiro",0],["Aaron Wan-Bissaka",28,"Defensor",0],["Steve Kapuadi",28,"Defensor",0],["Alex Tuanzebe",28,"Defensor",1],["Dylan Batubinsika",30,"Defensor",1],["Ngal'ayel Mukau",21,"Meio-campista",0],["Nathanael Mbuku",24,"Meio-campista",2],["Samuel Moutoussamy",29,"Meio-campista",0],["Brian Cipenga",28,"Atacante",0],["Théo Bongonda",30,"Meio-campista",7],["Gaël Kakuta",35,"Atacante",5],["Joris Kayembe",31,"Defensor",1],["Meschack Elia",28,"Atacante",12],["Noah Sadiki",21,"Meio-campista",0],["Aaron Tshibola",31,"Meio-campista",1],["Thimothy Fayulu",26,"Goleiro",0],["Cédric Bakambu",35,"Atacante",21],["Charles Pickel",29,"Meio-campista",1],["Fiston Mayele",31,"Atacante",5],["Yoane Wissa",29,"Atacante",9],["Matthieu Epolo",21,"Goleiro",0],["Chancel Mbemba",31,"Defensor",7],["Simon Banza",29,"Atacante",2],["Gédéon Kalulu",28,"Defensor",0],["Edo Kayembe",28,"Meio-campista",2],["Arthur Masuaku",32,"Defensor",4]],"CIV":[["Yahia Fofana",25,"Goleiro",0],["Ousmane Diomande",22,"Defensor",1],["Ghislain Konan",30,"Defensor",0],["Jean Michaël Seri",34,"Meio-campista",4],["Wilfried Singo",25,"Defensor",1],["Seko Fofana",31,"Meio-campista",7],["Odilon Kossounou",25,"Defensor",0],["Franck Kessié",29,"Meio-campista",16],["Ange-Yoan Bonny",22,"Atacante",0],["Simon Adingra",24,"Atacante",5],["Yan Diomande",19,"Atacante",3],["Elye Wahi",23,"Atacante",0],["Christopher Operi",29,"Defensor",0],["Oumar Diakité",22,"Atacante",6],["Amad Diallo",23,"Atacante",7],["Mohamed Koné",24,"Goleiro",0],["Guéla Doué",23,"Defensor",3],["Ibrahim Sangaré",28,"Meio-campista",11],["Nicolas Pépé",31,"Atacante",12],["Emmanuel Agbadou",29,"Defensor",2],["Evan Ndicka",26,"Defensor",0],["Evann Guessand",24,"Atacante",4],["Alban Lafont",27,"Goleiro",0],["Bazoumana Touré",20,"Atacante",2],["Parfait Guiagon",25,"Meio-campista",0],["Christ Inao Oulaï",20,"Meio-campista",0]],"CRO":[["Dominik Livakovic",31,"Goleiro",0],["Josip Stanisic",26,"Defensor",0],["Marin Pongracic",28,"Defensor",0],["Josko Gvardiol",24,"Defensor",4],["Duje Caleta-Car",29,"Defensor",1],["Josip Sutalo",26,"Defensor",0],["Nikola Moro",28,"Meio-campista",0],["Mateo Kovacic",32,"Meio-campista",5],["Andrej Kramaric",35,"Atacante",36],["Luka Modric",40,"Meio-campista",29],["Ante Budimir",34,"Atacante",6],["Ivor Pandur",26,"Goleiro",0],["Nikola Vlasic",28,"Meio-campista",10],["Ivan Perisic",37,"Atacante",38],["Mario Pasalic",31,"Meio-campista",12],["Martin Baturina",23,"Meio-campista",2],["Luka Sucic",22,"Meio-campista",1],["Kristijan Jakic",29,"Defensor",2],["Toni Fruk",25,"Meio-campista",1],["Igor Matanovic",23,"Atacante",2],["Petar Sucic",23,"Meio-campista",1],["Luka Vuskovic",19,"Defensor",1],["Dominik Kotarski",26,"Goleiro",0],["Marco Pasalic",25,"Atacante",1],["Martin Erlic",28,"Defensor",1],["Petar Musa",28,"Atacante",2]],"CUW":[["Eloy Room",37,"Goleiro",0],["Shurandy Sambo",24,"Defensor",0],["Juriën Gaari",32,"Defensor",1],["Roshon van Eijma",28,"Defensor",1],["Sherel Floranus",27,"Defensor",0],["Godfried Romeratoe",26,"Meio-campista",1],["Juninho Bacuna",28,"Meio-campista",14],["Livano Comenencia",22,"Meio-campista",3],["Jürgen Locadia",32,"Atacante",1],["Leandro Bacuna",34,"Meio-campista",16],["Jeremy Antonisse",24,"Atacante",4],["Sontje Hansen",24,"Atacante",1],["Tyrese Noslin",23,"Atacante",1],["Kenji Gorré",31,"Atacante",6],["Ar’Jany Martha",22,"Meio-campista",2],["Jearl Margaritha",26,"Atacante",5],["Brandley Kuwas",33,"Atacante",2],["Armando Obispo",27,"Defensor",0],["Gervane Kastaneer",30,"Atacante",9],["Joshua Brenet",32,"Defensor",2],["Tahith Chong",26,"Meio-campista",3],["Kevin Felida",26,"Meio-campista",1],["Riechedly Bazoer",29,"Defensor",0],["Deveron Fonville",23,"Defensor",0],["Tyrick Bodak",24,"Goleiro",0],["Trevor Doornbusch",26,"Goleiro",0]],"CZE":[["Matěj Kovář",26,"Goleiro",0],["David Zima",25,"Defensor",1],["Tomáš Holeš",33,"Defensor",2],["Robin Hranáč",26,"Defensor",1],["Vladimír Coufal",33,"Defensor",2],["Štěpán Chaloupek",23,"Defensor",0],["Ladislav Krejčí",27,"Defensor",6],["Vladimír Darida",35,"Meio-campista",8],["Adam Hložek",23,"Atacante",5],["Patrik Schick",30,"Atacante",26],["Jan Kuchta",29,"Atacante",3],["Lukáš Červ",25,"Meio-campista",2],["Mojmír Chytil",27,"Atacante",6],["David Jurásek",25,"Defensor",1],["Pavel Šulc",25,"Atacante",5],["Jindřich Staněk",30,"Goleiro",0],["Lukáš Provod",29,"Meio-campista",3],["Michal Sadílek",27,"Meio-campista",2],["Tomáš Chorý",31,"Atacante",7],["Jaroslav Zelený",33,"Defensor",0],["David Douděra",28,"Defensor",2],["Tomáš Souček",31,"Meio-campista",17],["Lukáš Horníček",23,"Goleiro",0],["Alexandr Sojka",23,"Meio-campista",0],["Hugo Sochůrek",18,"Meio-campista",0],["Denis Višinský",23,"Atacante",1]],"ECU":[["Hernán Galíndez",39,"Goleiro",0],["Félix Torres",29,"Defensor",5],["Piero Hincapié",24,"Defensor",2],["Joel Ordóñez",22,"Defensor",0],["Jordy Alcívar",26,"Meio-campista",1],["Willian Pacho",24,"Defensor",2],["Pervis Estupiñán",28,"Defensor",5],["Enner Valencia",22,"Meio-campista",1],["John Yeboah",25,"Atacante",3],["Kendry Páez",19,"Meio-campista",2],["Kevin Rodríguez",26,"Atacante",2],["Moisés Ramírez",25,"Goleiro",0],["Anthony Valencia",36,"Atacante",49],["Alan Minda",23,"Meio-campista",2],["Pedro Vite",24,"Meio-campista",1],["Jordy Caicedo",28,"Atacante",4],["Ángelo Preciado",28,"Defensor",0],["Denil Castillo",22,"Meio-campista",0],["Gonzalo Plata",25,"Atacante",8],["Nilson Angulo",23,"Atacante",2],["Alan Franco",27,"Meio-campista",1],["Gonzalo Valle",30,"Goleiro",0],["Moisés Caicedo",24,"Meio-campista",3],["Jeremy Arévalo",21,"Atacante",0],["Jackson Porozo",25,"Defensor",1],["Yaimar Medina",21,"Defensor",0]],"EGY":[["Mohamed El Shenawy",37,"Goleiro",0],["Yasser Ibrahim",33,"Defensor",1],["Mohamed Hany",30,"Defensor",0],["Hossam Abdelmaguid",25,"Defensor",0],["Ramy Rabia",33,"Defensor",6],["Mohamed Abdelmonem",27,"Defensor",3],["Mahmoud Trezeguet",31,"Atacante",23],["Emam Ashour",28,"Meio-campista",1],["Hamza Abdel Karim",18,"Atacante",0],["Mohamed Salah",34,"Atacante",67],["Mostafa Ziko",29,"Meio-campista",2],["Aktay Abdullah",24,"Atacante",0],["Ahmed Fatouh",28,"Defensor",1],["Hamdi Fathi",31,"Meio-campista",4],["Karim Hafez",30,"Defensor",0],["El Mahdy Soliman",39,"Goleiro",0],["Mohannad Lasheen",30,"Meio-campista",0],["Nabil Emad Dunga",30,"Meio-campista",0],["Marwan Attia",27,"Meio-campista",1],["Ibrahim Adel",25,"Atacante",3],["Mahmoud Saber",24,"Meio-campista",1],["Omar Marmoush",27,"Atacante",11],["Mostafa Shobeir",26,"Goleiro",0],["Tarek Alaa",24,"Defensor",0],["Ahmed Sayed Zizo",30,"Atacante",5],["Mohamed Alaa",27,"Goleiro",0]],"ENG":[["Jordan Pickford",32,"Goleiro",0],["Ezri Konsa",28,"Defensor",1],["Nico O'Reilly",21,"Defensor",0],["Declan Rice",27,"Meio-campista",7],["John Stones",32,"Defensor",3],["Marc Guehi",25,"Defensor",1],["Bukayo Saka",24,"Atacante",14],["Elliot Anderson",23,"Meio-campista",0],["Harry Kane",32,"Atacante",81],["Jude Bellingham",22,"Meio-campista",7],["Marcus Rashford",28,"Atacante",19],["Chalobah",26,"Defensor",0],["Dean Henderson",29,"Goleiro",0],["Jordan Henderson",36,"Meio-campista",3],["Dan Burn",34,"Defensor",0],["Kobbie Mainoo",21,"Meio-campista",0],["Morgan Rogers",23,"Meio-campista",1],["Anthony Gordon",25,"Atacante",3],["Ollie Watkins",30,"Atacante",7],["Noni Madueke",24,"Atacante",1],["Eberechi Eze",27,"Meio-campista",3],["Ivan Toney",30,"Atacante",1],["James Trafford",23,"Goleiro",0],["eece James",26,"Defensor",1],["Djed Spence",25,"Defensor",0],["Jarell Quansah",23,"Defensor",0]],"FRA":[["Brice Samba",32,"Goleiro",0],["Malo Gusto",23,"Defensor",0],["Lucas Digne",32,"Defensor",0],["Dayot Upamecano",27,"Defensor",2],["Jules Koundé",27,"Defensor",0],["Manu Koné",25,"Meio-campista",0],["Ousmane Dembélé",29,"Atacante",7],["Aurélien Tchouaméni",26,"Meio-campista",3],["Marcus Thuram",28,"Atacante",3],["Kylian Mbappé",27,"Atacante",58],["Michael Olise",24,"Atacante",7],["Bradley Barcola",23,"Atacante",4],["N'Golo Kanté",35,"Meio-campista",2],["Adrien Rabiot",31,"Meio-campista",7],["Ibrahima Konaté",27,"Defensor",0],["Mike Maignan",30,"Goleiro",0],["William Saliba",25,"Defensor",0],["Warren Zaïre-Emery",20,"Meio-campista",1],["Lucas Hernandez",28,"Defensor",2],["Désiré Doué",21,"Atacante",2],["Theo Hernandez",30,"Defensor",0],["Jean-Philippe Mateta",28,"Atacante",2],["Robin Risser",21,"Goleiro",0],["Rayan Cherki",22,"Meio-campista",2],["Maghnès Akliouche",24,"Meio-campista",1],["Maxence Lacroix",26,"Defensor",0]],"GER":[["Manuel Neuer",40,"Goleiro",60],["Antonio Rudiger",33,"Defensor",3],["Waldemar Anton",29,"Defensor",0],["Jonathan Tah",30,"Defensor",1],["Aleksandar Pavlovic",22,"Meio-campista",1],["Joshua Kimmich",31,"Defensor",10],["Kai Havertz",27,"Atacante",24],["Leon Goretzka",31,"Meio-campista",15],["Jamie Leweling",25,"Meio-campista",1],["Jamal Musiala",23,"Meio-campista",10],["Nick Woltemade",24,"Atacante",4],["Oliver Baumann",36,"Goleiro",0],["Pascal Gross",35,"Meio-campista",1],["Maximilian Beier",23,"Atacante",0],["Nico Schlotterbeck",26,"Defensor",1],["Angelo Stiller",25,"Meio-campista",0],["Florian Wirtz",23,"Meio-campista",11],["Nathaniel Brown",23,"Defensor",1],["Leroy Sané",30,"Meio-campista",17],["Nadiem Amiri",29,"Meio-campista",1],["Alexander Nubel",29,"Goleiro",0],["David Raum",28,"Defensor",1],["Felix Nmecha",25,"Meio-campista",2],["Malick Thiaw",24,"Defensor",0],["Lennart Karl",20,"Meio-campista",1],["Deniz Undav",29,"Atacante",9]],"GHA":[["Lawrence Ati-Zigi",29,"Goleiro",0],["Alidu Seidu",26,"Defensor",1],["Caleb Yirenkyi",20,"Meio-campista",2],["Jonas Adjetey",22,"Defensor",0],["Thomas Partey",33,"Meio-campista",16],["Abdul Mumin",28,"Defensor",0],["Abdul Fatawu Issahaku",22,"Atacante",3],["Kwasi Sibo",27,"Meio-campista",0],["Jordan Ayew",34,"Atacante",34],["Brandon Thomas-Asante",27,"Atacante",1],["Antoine Semenyo",26,"Meio-campista",3],["Joseph Anang",26,"Goleiro",0],["Christopher Bonsu Baah",21,"Atacante",0],["Gideoh Mensah",27,"Defensor",0],["Elisha Owusu",28,"Meio-campista",0],["Benjamin Asare",33,"Goleiro",0],["Baba Abdul Rahman",31,"Defensor",1],["Jerome Opoku",27,"Defensor",1],["Iñaki Williams",32,"Atacante",2],["Augustine Boakye",25,"Meio-campista",0],["Kojo Oppong Peprah",22,"Defensor",0],["Kamal Deen Sulemana",24,"Atacante",1],["Derrick Luckassen",30,"Defensor",0],["Ernest Nuamah",22,"Atacante",4],["Prince Kwabena Adu",22,"Atacante",0],["Marvin Senaya",25,"Defensor",0]],"HAI":[["Johnny Placide",38,"Goleiro",0],["Carlens Arcus",29,"Defensor",1],["Keeto Thermoncy",20,"Defensor",0],["Ricardo Ade",36,"Defensor",2],["Hannes Delcroix",27,"Defensor",0],["Carl-Fred Sainthe",23,"Meio-campista",0],["Derrick Etienne",29,"Atacante",8],["Martin Experience",27,"Defensor",0],["Duckens Nazon",32,"Atacante",44],["Jeanricner Bellegarde",27,"Meio-campista",0],["Louicius Deedson",25,"Atacante",10],["Alexandre Pierre",25,"Goleiro",0],["Duke Lacroix",32,"Defensor",3],["Garven-Michée Metusala",26,"Defensor",0],["Ruben Providence",24,"Atacante",3],["Lenny Joseph",25,"Atacante",1],["Jean-Jacques Danley",26,"Meio-campista",6],["Wilson Isidor",25,"Atacante",2],["Yassin Fortune",27,"Atacante",0],["Frantzdy Pierrot",31,"Atacante",34],["Josué Casimir",24,"Atacante",0],["JK Duverne",28,"Defensor",1],["Josué Duverger",26,"Goleiro",0],["Wilguens Pauguain",24,"Defensor",0],["Dominique Simon",25,"Meio-campista",0],["Pierre Woodenski",21,"Meio-campista",0]],"IRN":[["Alireza Beyranvand",33,"Goleiro",0],["Saleh Hardani",27,"Defensor",1],["Ehsan Hajisafi",36,"Defensor",77],["Shoja Khalilzadeh",37,"Defensor",2],["Milad Mohammadi",32,"Defensor",1],["Saeid Ezatolahi",29,"Meio-campista",2],["Alireza Jahanbakhsh",32,"Meio-campista",17],["Mohammad Mohebbi",27,"Meio-campista",14],["Mehdi Taremi",33,"Atacante",59],["Mehdi Ghayedi",27,"Atacante",10],["Ali Alipour",30,"Atacante",1],["Payam Niazmand",31,"Goleiro",0],["Hossein Kanani",32,"Defensor",6],["Saman Ghoddos",32,"Meio-campista",3],["Roozbeh Cheshmi",32,"Meio-campista",3],["Mehdi Torabi",31,"Meio-campista",7],["Arya Yousefi",24,"Defensor",1],["Amirhossein Hosseinzadeh",25,"Atacante",5],["Ali Nemati",30,"Defensor",0],["Shahriyar Moghanloo",31,"Atacante",2],["Mohammad Ghorbani",24,"Meio-campista",0],["Hosein Hoseini",33,"Goleiro",0],["Ramin Rezaeian",36,"Defensor",9],["Denis Dargahi",29,"Atacante",0],["Danial Iri",22,"Defensor",0],["Amirmohammad Razaghinia",20,"Meio-campista",0]],"IRQ":[["Fahad Talib",31,"Goleiro",0],["Rebin Ghareeb",34,"Defensor",1],["Hussein Ali",24,"Defensor",1],["Zaid Tahseen",25,"Defensor",1],["Akam Hashim",27,"Defensor",1],["Munaf Younus",29,"Defensor",1],["Youssef Amyn",22,"Meio-campista",2],["Ibrahim Bayesh",26,"Meio-campista",8],["Ali Al-Hamadi",24,"Atacante",5],["Ali Jassim",26,"Atacante",26],["Ahmed Qasim",22,"Atacante",0],["Jalal Hassan",35,"Goleiro",50],["Mohanad Ali",30,"Atacante",1],["Zidane Iqbal",23,"Meio-campista",2],["Ahmed Maknzi",24,"Defensor",0],["Amir Al-Ammari",28,"Meio-campista",3],["Ali Yousif",22,"Atacante",2],["Aymen Hussein",30,"Atacante",34],["Kevin Yakob",25,"Meio-campista",0],["Aimar Sher",23,"Meio-campista",0],["Marko Farji",22,"Atacante",0],["Ahmed Basil",29,"Goleiro",0],["Merchas Doski",26,"Defensor",1],["Zaid Ismail",24,"Meio-campista",0],["Mustafa Saadoun",25,"Defensor",0],["Frans Putros",32,"Defensor",0]],"JPN":[["Zion Suzuki",23,"Goleiro",0],["Yukinari Sugawara",25,"Defensor",2],["Shogo Taniguchi",34,"Defensor",1],["Ko Itakura",29,"Defensor",3],["Yuto Nagatomo",39,"Defensor",4],["Shuto Machino",26,"Atacante",5],["Ao Tanaka",27,"Meio-campista",8],["Takefusa Kubo",25,"Meio-campista",7],["Keisuke Goto",21,"Atacante",0],["Ritsu Doan",28,"Meio-campista",11],["Daizen Maeda",28,"Meio-campista",5],["Keisuke Osako",26,"Goleiro",0],["Keito Nakamura",25,"Meio-campista",12],["Junya Ito",33,"Meio-campista",16],["Daichi Kamada",29,"Meio-campista",14],["Tsuyoshi Watanabe",29,"Defensor",0],["Yuito Suzuki",24,"Meio-campista",0],["Ayase Ueda",27,"Atacante",18],["Koki Ogawa",28,"Atacante",11],["Ayumu Seko",26,"Defensor",0],["Hiroki Ito",27,"Defensor",1],["Takehiro Tomiyasu",27,"Defensor",1],["Tomoki Hayakawa",27,"Goleiro",0],["Kaishu Sano",25,"Meio-campista",0],["Junnosuke Suzuki",22,"Defensor",0],["Kento Shiogai",21,"Atacante",0]],"JOR":[["Yazeed Abu Laila",33,"Goleiro",0],["Mohammad Abualnadi",31,"Defensor",1],["Abdallah Nasib",32,"Defensor",2],["Husam Abu Dahab",26,"Defensor",0],["Yazan Al-Arab",30,"Defensor",3],["Amer Jamous",23,"Meio-campista",1],["Mohammad Al-Dawoud",28,"Atacante",5],["Nour Al-Rawabdeh",29,"Meio-campista",3],["Ali Al-Azaizeh",26,"Atacante",30],["Musa Al-Taamari",29,"Atacante",24],["Odeh Fakhouri",20,"Atacante",1],["Nour Bani Attiah",33,"Goleiro",0],["Mahmoud Al-Mardi",32,"Atacante",8],["Rajaei Ayed",32,"Meio-campista",0],["Ibrahim Sadeh",26,"Meio-campista",3],["Mohammad Abu Hashish",25,"Defensor",0],["Saleem Obaid",34,"Defensor",0],["Mohammad Abu Zrayq",20,"Meio-campista",0],["Saed Al-Rosan",29,"Defensor",2],["Mohannad Abu Taha",23,"Meio-campista",1],["Nizar Al-Rashdan",27,"Meio-campista",4],["Abdullah Al-Fakhouri",26,"Goleiro",0],["Ihsan Haddad",32,"Defensor",2],["Ali Olwan",22,"Atacante",0],["Mohammad bu Ghoush",34,"Meio-campista",1],["Anas Badawi",28,"Defensor",0]],"KOR":[["Kim Seung-gyu",35,"Goleiro",0],["Lee Hanbeom",24,"Defensor",0],["Lee Kihyuk",25,"Meio-campista",0],["Kim Minjae",29,"Defensor",4],["Kim Moonhwan",25,"Defensor",0],["Hwang Heechan",29,"Meio-campista",7],["Son Heungmin",33,"Atacante",56],["Paik Seungho",29,"Meio-campista",3],["Cho Guesung",28,"Atacante",12],["Lee Taeseok",33,"Meio-campista",15],["Hwang Inbeom",30,"Meio-campista",17],["Song Bumkeun",28,"Goleiro",0],["Lee Donggyeong",23,"Defensor",1],["Jo Wije",24,"Defensor",0],["Kim Taehyeon",30,"Defensor",0],["Park Jinseob",30,"Defensor",1],["Bae Junho",22,"Meio-campista",2],["Oh Hyeongyu",25,"Atacante",7],["Lee Jaesung",25,"Meio-campista",10],["Yang Hyunjun",24,"Meio-campista",0],["Jo Hyeonwoo",34,"Goleiro",0],["Seol Youngwoo",27,"Defensor",0],["Jens Castrop",22,"Defensor",0],["Kim Jingyu",29,"Meio-campista",3],["Eom Jisung",24,"Meio-campista",2],["Lee Kangin",28,"Meio-campista",4]],"MEX":[["Raúl Rangel",26,"Goleiro",0],["Jorge Sánchez",28,"Defensor",3],["César Montes",29,"Defensor",4],["Edson Álvarez",28,"Defensor",17],["Joah Vásquez",27,"Defensor",3],["Erik Lira",26,"Meio-campista",0],["Luis Romo",31,"Meio-campista",5],["Álvaro Fidalgo",29,"Meio-campista",0],["Raúl Jiménez",35,"Atacante",46],["Alexis Veja",28,"Atacante",7],["Santiago Giménez",25,"Atacante",6],["Carlos Acevedo",30,"Goleiro",0],["Guillermo Ochoa",40,"Goleiro",30],["Armando González",23,"Atacante",1],["Israel Reyes",26,"Defensor",2],["Julián Quiñones",29,"Atacante",3],["Orbelín Pineda",30,"Meio-campista",12],["Obed Vargas",20,"Meio-campista",0],["Gilberto Mora",17,"Meio-campista",0],["Mateo Chávez",22,"Defensor",0],["César Huerta",25,"Atacante",3],["Guillermo Martínez",31,"Atacante",3],["Jesús Gallardo",31,"Defensor",43],["Luis Chávez",30,"Meio-campista",5],["Roberto Alvarado",27,"Atacante",6],["Brian Gutiérrez",23,"Meio-campista",2]],"MAR":[["Yassine Bounou",35,"Goleiro",0],["Achraf Hakimi",27,"Defensor",11],["Noussair Mazraoui",28,"Defensor",2],["Sofyan Amrabat",29,"Meio-campista",0],["Marwane Saadne",34,"Defensor",1],["Ayoub Bouaddi",18,"Meio-campista",0],["Chemsdine Talbi",21,"Meio-campista",0],["Azzedine Ounahi",26,"Meio-campista",9],["Soufiane Rahimi",30,"Atacante",12],["Brahim Díaz",26,"Atacante",15],["Ismaël Saibari",25,"Meio-campista",11],["Munir El Kajoui",37,"Goleiro",0],["Zakaria El Ouahdi",24,"Defensor",0],["Issa Diop",29,"Defensor",0],["Neil El Aynaoui",20,"Meio-campista",0],["Yassine Bessime",20,"Meio-campista",0],["Amine Sabai",25,"Atacante",0],["Chadi Riad",23,"Defensor",1],["Youssef Belammari",27,"Defensor",0],["Ayoub El Kaabi",32,"Atacante",36],["Ayoube Amahount",21,"Atacante",0],["Ahmed Reda Tagnaouti",30,"Goleiro",0],["Samir El Mourabet",22,"Meio-campista",3],["Bilal El Khannouss",24,"Meio-campista",2],["Redouane Halhal",23,"Defensor",0],["Anass Salah-Eddine",24,"Defensor",0]],"NED":[["Bart Verbruggen",23,"Goleiro",0],["Lutsharel Geertruida",25,"Defensor",0],["Frenkie de Jong",35,"Meio-campista",1],["Virgil van Dijk",34,"Defensor",13],["Nathan Aké",31,"Defensor",5],["Jan Paul van Hecke",26,"Defensor",0],["Justin Kluivert",27,"Meio-campista",0],["Ryan Gravenberch",24,"Meio-campista",1],["Wout Weghorst",33,"Atacante",14],["Memphis Depay",32,"Atacante",55],["Cody Gakpo",27,"Atacante",23],["Mats Wieffer",26,"Defensor",1],["Robin Roefs",23,"Goleiro",0],["Tijjani Reijnders",27,"Meio-campista",7],["Micky van de Ven",25,"Defensor",1],["Guus Til",28,"Meio-campista",1],["Noa Lang",27,"Atacante",3],["Donyell Malen",27,"Atacante",13],["Brian Brobbey",24,"Atacante",3],["Teun Koopmeiners",28,"Meio-campista",3],["Marten de Roon",29,"Meio-campista",2],["Denzel Dumfries",30,"Defensor",11],["Mark Flekken",33,"Goleiro",0],["Crysencio Summerville",24,"Atacante",2],["Jorrel Hato",20,"Defensor",0],["Quinten Timber",25,"Meio-campista",1]],"NZL":[["Max Crocombe",32,"Goleiro",0],["Tim Payne",32,"Defensor",3],["Francis de Vries",31,"Defensor",1],["Tyler Bindon",21,"Defensor",2],["Michael Boxall",37,"Defensor",1],["Callum McCowatt",27,"Meio-campista",1],["Logan Rogerson",28,"Atacante",2],["Marko Stamenić",24,"Meio-campista",3],["Chris Wood",34,"Atacante",45],["Sarpreet Singh",27,"Meio-campista",3],["Eli Just",26,"Meio-campista",11],["Alex Paulsen",23,"Goleiro",0],["Liberato Cacace",25,"Defensor",1],["Alex Rufer",30,"Meio-campista",0],["Nando Pijnaker",27,"Defensor",0],["Finn Surman",22,"Defensor",2],["Kosta Barbarouses",36,"Atacante",10],["Ben Waine",25,"Atacante",9],["Ben Old",23,"Meio-campista",2],["Jesse Randall",23,"Atacante",2],["Michael Woud",27,"Goleiro",0],["Ryan Thomas",31,"Meio-campista",3],["Callan Elliot",26,"Defensor",0],["Lachlan Bayliss",23,"Meio-campista",0],["Tommy Smith",36,"Defensor",2]],"NOR":[["Orjan Nyland",35,"Goleiro",0],["Morten Thorsby",30,"Meio-campista",0],["Kristoffer Ajer",28,"Defensor",2],["Leo Ostigard",26,"Defensor",2],["David Moller",24,"Defensor",1],["Patrick Berg",28,"Meio-campista",0],["Alexander Sorloth",30,"Atacante",26],["Sander Berge",28,"Meio-campista",1],["Erling Haaland",25,"Atacante",57],["Martin Odegaard",27,"Meio-campista",5],["Strand Larsen",26,"Atacante",6],["Sander Tangvik",23,"Goleiro",0],["Egil Selvik",28,"Goleiro",0],["Fredrik Aursnes",30,"Meio-campista",1],["Fredrik Bjorkan",27,"Defensor",1],["Holmgren Pedersen",25,"Defensor",0],["Torbjorn Heggem",27,"Defensor",0],["Kristian Thorstvedt",27,"Meio-campista",4],["Thelo Aasgaard",24,"Meio-campista",5],["Antonio Nusa",21,"Atacante",8],["Andreas Schjelderup",22,"Meio-campista",1],["Oscar Bobb",22,"Meio-campista",2],["Jens Petter Hauge",26,"Meio-campista",1],["Sondre Langas",25,"Defensor",0],["Henrik Falchener",23,"Defensor",0],["Julian Ryerson",28,"Atacante",1]],"PAN":[["Luis Mejía",35,"Goleiro",0],["Cesar Blackman",28,"Defensor",3],["José Cordoba",25,"Defensor",1],["Fidel Escobar",31,"Defensor",4],["Edgardo Fariña",24,"Defensor",0],["Cristian Martínez",29,"Meio-campista",2],["Tomás Rodríguez",28,"Meio-campista",8],["Adalberto Carrasquilla",27,"Meio-campista",3],["Puma Rodríguez",27,"Atacante",4],["Ismael Díaz",29,"Meio-campista",17],["Yoel Bárcenas",32,"Meio-campista",10],["César Samudio",32,"Goleiro",0],["Jiovany Ramos",29,"Defensor",2],["Carlos Harvey",26,"Defensor",3],["Éric Davis",35,"Defensor",79],["Andrés Andrade",27,"Defensor",1],["José Fajardo",32,"Atacante",17],["Cecílio Waterman",35,"Atacante",15],["Alberto Quintero",38,"Meio-campista",17],["Aníbal Godoy",36,"Meio-campista",4],["César Yanis",30,"Meio-campista",5],["Orlando Mosquera",31,"Goleiro",0],["Michael Murillo",30,"Defensor",9],["Azarias Londoño",25,"Atacante",1],["Roderick Miller",34,"Defensor",2],["Jorge Gutiérrez",27,"Defensor",0]],"PAR":[["Gatito Fernández",38,"Goleiro",0],["Gustavo Velázquez",35,"Defensor",1],["Omar Alderete",29,"Defensor",3],["Juan Cáceres",26,"Defensor",0],["Fabián Balbuena",34,"Defensor",2],["Junior Alonso",33,"Defensor",3],["Ramón Sosa",26,"Meio-campista",1],["Diego Gómez",23,"Meio-campista",3],["Antonio Sanabria",30,"Atacante",7],["Miguel Almirón",32,"Meio-campista",10],["Mauricio",24,"Meio-campista",1],["Orlando Gill",26,"Goleiro",0],["José Canale",29,"Defensor",0],["Andrés Cubas",30,"Meio-campista",0],["Gustavo Gómez",33,"Defensor",4],["Damián Bobadilla",24,"Meio-campista",1],["Alejandro Romero Gamarra",31,"Atacante",6],["Álex Arce",31,"Atacante",1],["Julio Enciso",22,"Atacante",4],["Braian Ojeda",25,"Meio-campista",0],["Gabriel Ávalos",34,"Atacante",2],["Gastón Olveira",33,"Goleiro",0],["Matías Galarza",24,"Meio-campista",4],["Gustavo Caballero",24,"Meio-campista",1],["Isidro Pitta",26,"Atacante",0],["Alexandro Maidana",20,"Defensor",1]],"POR":[["Diogo Costa",26,"Goleiro",0],["Nélson Semedo",32,"Defensor",0],["Rúben Dias",29,"Defensor",3],["Tomás Araújo",24,"Defensor",0],["Diogo Dalot",27,"Defensor",3],["Matheus Nunes",27,"Meio-campista",2],["Cristiano Ronaldo",41,"Atacante",43],["Bruno Fernandes",31,"Meio-campista",29],["Gonçalo Guedes",25,"Atacante",10],["Bernardo Silva",31,"Meio-campista",14],["João Félix",26,"Atacante",12],["José Sá",33,"Goleiro",0],["Renato Veiga",22,"Defensor",1],["Gonçalo Inácio",24,"Defensor",2],["João Neves",21,"Meio-campista",4],["Francisco Conceição",26,"Atacante",3],["Rafael Leão",27,"Atacante",5],["Pedro Neto",26,"Atacante",3],["Gonçalo Ramos",29,"Atacante",8],["João Cancelo",32,"Defensor",12],["Rúben Neves",29,"Meio-campista",1],["Rui Silva",32,"Goleiro",0],["Vitinha",26,"Meio-campista",0],["Samuel Costa",25,"Defensor",0],["Nuno Mendes",24,"Defensor",1],["Trincão",23,"Atacante",4]],"QAT":[["Mahmoud Abunada",26,"Goleiro",0],["Pedro Miguel",35,"Defensor",34],["Lucas Mendes",35,"Defensor",2],["Issa Laye",28,"Defensor",0],["Jassem Gaber",24,"Defensor",1],["Abdulaziz Hatem",36,"Meio-campista",11],["Ahmed Fathy",33,"Atacante",10],["Edmilson Junior",31,"Atacante",0],["Mohammed Muntari",32,"Atacante",17],["Hasan Al-Haydos",35,"Atacante",39],["Akram Afif",29,"Atacante",40],["Karim Boudiaf",35,"Meio-campista",96],["Ayoub Al-Alawi",21,"Defensor",0],["Homam Ahmed",26,"Defensor",3],["Youssef Abdulrazzaq",26,"Atacante",3],["Boualem Khoukhi",35,"Defensor",21],["Ahmed Al-Ganehi",25,"Meio-campista",1],["Sultan Al-Brake",30,"Defensor",0],["AlMoez Ali",29,"Atacante",58],["Ahmed Alaa",33,"Meio-campista",0],["Salah Zakaria",27,"Goleiro",0],["Meshaal Barsham",28,"Goleiro",0],["Assim Madibo",29,"Meio-campista",0],["Tahsin Mohammed",20,"Atacante",0],["Al-Hashmi Al-Hussain",22,"Defensor",0],["Mohamed Mannaj",23,"Atacante",0]],"KSA":[["Nawaf Al Aqidi",26,"Goleiro",0],["Ali Lajami",26,"Defensor",0],["Ali Majrashi",30,"Defensor",1],["Abdulelah Al Amri",29,"Defensor",2],["Hassan Kadesh",27,"Defensor",1],["Nasser Al Dawsari",27,"Meio-campista",1],["Musab Al Juwayr",23,"Meio-campista",6],["Ayman Yahya",25,"Atacante",0],["Feras Al Brikan",26,"Atacante",16],["Salem Al Dawsari",34,"Atacante",27],["Saleh Al Shehri",32,"Atacante",17],["Saud Abdulhamid",26,"Defensor",1],["Nawaf Boushal",26,"Defensor",0],["Hassan Tambakti",33,"Defensor",2],["Abdullah Al Khaibari",29,"Meio-campista",0],["Ziyad Al Johani",24,"Meio-campista",0],["Khalid Al Ghannam",25,"Atacante",0],["Alaa Al Hajji",30,"Meio-campista",0],["Abdullah Al Hamdan",26,"Atacante",13],["Sultan Mandash",31,"Atacante",2],["Mohammed Al Owais",34,"Goleiro",0],["Ahmed Al Kassar",35,"Goleiro",0],["Mohammed Kanno",31,"Meio-campista",8],["Moteb Al Harbi",26,"Defensor",0],["Jehad Thikri",24,"Defensor",0],["Mohammed Abu Al Shamat",23,"Defensor",0]],"SCO":[["Angus Gunn",30,"Goleiro",0],["Aaron Hickey",24,"Defensor",0],["Andy Robertson",32,"Defensor",4],["Grant Hanley",34,"Defensor",2],["Kieran Tierney",29,"Defensor",2],["Tyller Fletcher",19,"Meio-campista",0],["Lyndon Dykes",30,"Atacante",10],["Che Adams",29,"Atacante",13],["Ryan Christie",31,"Meio-campista",10],["Liam Kelly",30,"Goleiro",0],["Jack Hendry",31,"Defensor",3],["Ross Steward",29,"Atacante",0],["John Souttar",29,"Defensor",2],["Dom Hyam",30,"Defensor",0],["Ben Gannon-Doak",20,"Atacante",1],["George Hirst",27,"Atacante",1],["Lewis Fergunson",26,"Meio-campista",1],["Lawrence Shankland",30,"Atacante",7],["Craig Gordon",43,"Goleiro",0],["Nathan Patterson",24,"Defensor",1],["Anthony Ralston",27,"Defensor",1],["Findlay Curtis",20,"Atacante",1]],"SEN":[["Yehvann Diouf",26,"Goleiro",0],["Mamadou Sarr",20,"Defensor",0],["Kalidou Koulibaly",35,"Defensor",52],["Abdoulaye Seck",34,"Defensor",4],["Idrissa Gana Gueye",36,"Meio-campista",77],["Pathé Ciss",32,"Meio-campista",0],["Assane Diao",20,"Atacante",0],["Lamine Camara",22,"Meio-campista",7],["Bamba Dieng",26,"Atacante",2],["Sadio Mané",34,"Atacante",54],["Nicolas Jackson",25,"Atacante",8],["Iliman Ndiaye",30,"Atacante",4],["Chérif Ndiaye",26,"Atacante",4],["Ismail Jakobs",26,"Defensor",0],["Krépin Diatta",27,"Defensor",2],["Édouard Mendy",34,"Goleiro",0],["Pape Matar Sarr",23,"Meio-campista",4],["Ismaila Sarr",28,"Atacante",19],["Moussa Niakhaté",30,"Defensor",0],["Ibrahim Mbaye",18,"Atacante",4],["Habib Diarra",22,"Meio-campista",4],["Bara Sapoko Ndiaye",18,"Meio-campista",0],["Mory Diaw",32,"Goleiro",0],["Antoine Mendy",22,"Defensor",0],["El Hadji Malich Diouf",21,"Defensor",1],["Pape Gueye",27,"Meio-campista",6]],"RSA":[["Ronwen Williams",34,"Goleiro",0],["Thabang Matuludi",27,"Defensor",0],["Khulumani Ndamane",22,"Defensor",0],["Teboho Mokoena",29,"Meio-campista",10],["Thalente Mbatha",26,"Meio-campista",3],["Aubrey Modiba",30,"Defensor",3],["Oswin Appollis",24,"Atacante",8],["Tshepang Moremi",25,"Atacante",1],["Lyle Foster",25,"Atacante",10],["Relebohile Mofokeng",21,"Atacante",1],["Themba Zwane",36,"Meio-campista",12],["Thapelo Maseko",22,"Atacante",1],["Sphephelo Sithole",27,"Meio-campista",1],["Mbekezeli Mbokazi",20,"Defensor",1],["Iqraam Rayners",30,"Atacante",5],["Sipho Chaine",29,"Goleiro",0],["Evidence Makgopa",26,"Atacante",6],["Samukelo Kabini",22,"Defensor",0],["Nkosinathi Sibisi",30,"Defensor",0],["Khuliso Mudau",31,"Defensor",1],["Ime Okon",22,"Defensor",1],["Ricardo Goss",32,"Goleiro",0],["Jayden Adams",25,"Meio-campista",2],["Olwethu Makhanya",22,"Defensor",0],["Kamogelo Sebelebele",23,"Atacante",1],["Bradley Cross",25,"Defensor",0]],"ESP":[["David Raya",30,"Goleiro",0],["Arnau Pubill",23,"Defensor",0],["Álex Grimaldo",30,"Defensor",0],["Eric García",25,"Defensor",0],["Marcos Llorente",31,"Defensor",0],["Mikel Merino",29,"Meio-campista",10],["Ferran Torres",26,"Atacante",24],["Fabián Ruiz",30,"Meio-campista",6],["Gavi",21,"Meio-campista",5],["Dani Olmo",28,"Atacante",12],["Yeremy Pino",23,"Atacante",4],["Pedro Porro",26,"Defensor",0],["Joan García",25,"Goleiro",0],["Aymeric Laporte",32,"Defensor",2],["Álex Baena",24,"Meio-campista",2],["Rodri",29,"Meio-campista",4],["Nico Williams",23,"Atacante",6],["Martín Zubimendi",27,"Meio-campista",3],["Lamine Yamal",18,"Atacante",6],["Pedri",23,"Meio-campista",6],["Mikel Oyarzabal",29,"Atacante",25],["Pau Cubarsí",19,"Defensor",0],["Unai Simón",29,"Goleiro",0],["Marc Cucurella",27,"Defensor",1],["Víctor Muñoz",22,"Atacante",1],["Borja Iglesias",33,"Atacante",0]],"SWE":[["Jacob Zetterström",27,"Goleiro",0],["Gustaf Lagerbielke",26,"Defensor",2],["Victor Lindelöf",31,"Defensor",3],["Isak Hien",27,"Defensor",0],["Gabriel Gudmundsson",27,"Defensor",0],["Herman Johansson",28,"Defensor",0],["Lucas Bergvall",20,"Meio-campista",0],["Daniel Svensson",24,"Defensor",0],["Alexander Isak",26,"Atacante",18],["Benjamin Nygren",24,"Meio-campista",3],["Anthony Elanga",24,"Atacante",7],["Viktor Johansson",27,"Goleiro",0],["Ken Sema",32,"Meio-campista",5],["Hjalmar Ekdal",27,"Defensor",0],["Carl Starfelt",31,"Defensor",0],["Jesper Karlstrom",31,"Meio-campista",0],["Viktor Gyökeres",28,"Atacante",21],["Yasin Ayari",22,"Meio-campista",5],["Mattias Svanberg",27,"Meio-campista",3],["Eric Smith",29,"Defensor",0],["Alexander Bernhardsson",27,"Defensor",0],["Besfort Zenelie",23,"Meio-campista",0],["Kristoffer Nordfeldt",36,"Goleiro",0],["Elliot Stroud",23,"Defensor",0],["Gustaf Nilsson",29,"Atacante",4],["Taha Ali",27,"Atacante",0]],"SUI":[["Gregor Kobel",28,"Goleiro",0],["Miro Muheim",28,"Defensor",0],["Silvan Widmer",33,"Defensor",5],["Nico Elvedi",29,"Defensor",3],["Manuel Akanji",30,"Defensor",4],["Denis Zakaria",29,"Meio-campista",3],["Breel Embolo",29,"Atacante",25],["Remo Freuler",34,"Meio-campista",11],["Johan Manzambi",20,"Meio-campista",5],["Granit Xhaka",33,"Meio-campista",18],["Dan Ndoye",25,"Atacante",8],["Yvon Mvogo",32,"Goleiro",0],["Ricardo Rodriguez",33,"Defensor",9],["Ardon Jashari",23,"Meio-campista",0],["Djibril Sow",29,"Meio-campista",0],["Christian Fassnacht",32,"Atacante",5],["Ruben Vargas",27,"Atacante",12],["Eray Comert",28,"Defensor",0],["Noah Okafor",26,"Atacante",2],["Michel Aebischer",29,"Meio-campista",2],["Marvin Keller",23,"Goleiro",0],["Fabian Rieder",24,"Meio-campista",1],["Zeki Amdouni",25,"Atacante",11],["Aurele Amenda",22,"Defensor",0],["Luca Jaquez",23,"Defensor",0],["Cedric Itten",29,"Atacante",5]],"TUN":[["Abdelmouhib Chamakh",24,"Goleiro",0],["Ali Abdi",32,"Defensor",7],["Montassar Talbi",28,"Defensor",4],["Omar Rekik",24,"Defensor",1],["Adem Arous",21,"Defensor",0],["Dylan Bronn",31,"Defensor",2],["Elias Achouri",27,"Atacante",5],["Elias Saäd",26,"Atacante",3],["Hazem Mastouri",29,"Atacante",4],["Mohamed Hadj-Mahmoud",23,"Meio-campista",1],["Ismaël Gharbi",22,"Meio-campista",2],["Ben Hmida",31,"Defensor",0],["Rani Khedira",32,"Meio-campista",0],["Khalil Ayari",21,"Meio-campista",0],["Hannbial",26,"Meio-campista",0],["Aymen Dahmen",29,"Goleiro",0],["Ellyes Skhiri",31,"Meio-campista",4],["Rayan Elloumi",18,"Atacante",0],["Firas Chawat",30,"Atacante",6],["Yan Valéry",27,"Defensor",0],["Mortadha Ben Ouanes",30,"Defensor",0],["Sabri Ben Hassen",30,"Goleiro",0],["Moutaz Neffati",21,"Defensor",0],["Raed Chikhaoui",22,"Defensor",0],["Anis Ben Slimane",25,"Meio-campista",4],["Sebastian Tounekti",23,"Meio-campista",1]],"TUR":[["Mert Günok",37,"Goleiro",0],["Zeki Celik",29,"Defensor",3],["Merih Demiral",28,"Defensor",6],["Caglar Soyuncu",30,"Defensor",2],["Salih Ozcan",28,"Meio-campista",1],["Orkun Kökçü",25,"Meio-campista",4],["Kerem Akturkoglu",27,"Atacante",15],["Arda Güler",21,"Atacante",6],["Deniz Gül",21,"Atacante",2],["Hakan Calhanoglu",32,"Meio-campista",22],["Kenan Yildiz",21,"Atacante",5],["Altay Bayindir",28,"Goleiro",0],["Eren Elmalı",25,"Defensor",0],["Abdulkerim Bardakci",31,"Defensor",2],["Ozan Kabak",26,"Defensor",2],["Ismail Yuksek",27,"Meio-campista",1],["Irfan Can Kahveci",30,"Atacante",6],["Mert Müldür",27,"Defensor",3],["Yunus Akgun",25,"Atacante",4],["Ferdi Kadıoğlu",26,"Defensor",2],["Barış Alper Yılmaz",26,"Atacante",4],["Kaan Ayhan",31,"Meio-campista",5],["Ugurcan Cakir",30,"Goleiro",0],["Oguz Aydin",25,"Atacante",0],["Akaydin",32,"Defensor",1],["Can Uzun",20,"Atacante",1]],"URU":[["Sergio Rochet",33,"Goleiro",0],["José María Giménez",31,"Defensor",8],["Sebastián Cáceres",26,"Defensor",0],["Ronald Araujo",27,"Defensor",1],["Manuel Ugarte",25,"Meio-campista",1],["Rodrigo Bentancur",28,"Meio-campista",3],["Giorgian De Arrascaeta",29,"Meio-campista",5],["Frederico Valverde",27,"Meio-campista",9],["Darwin Núñez",26,"Atacante",13],["Nicolás De La Cruz",32,"Meio-campista",13],["Facundo Pellistri",24,"Atacante",2],["Santiago Mele",28,"Goleiro",0],["Guillermo Varela",33,"Defensor",0],["Agustín Canobbio",27,"Meio-campista",1],["Emiliano Martínez",26,"Meio-campista",0],["Mathías Olivera",28,"Defensor",2],["Matías Viña",28,"Defensor",1],["Brian Rodríguez",26,"Atacante",4],["Rodrigo Aguirre",31,"Atacante",3],["Maximiliano Araújo",26,"Meio-campista",4],["Federico Viñas",27,"Atacante",2],["Joaquín Piquerez",27,"Meio-campista",0],["Fernando Muslera",40,"Goleiro",50],["Santiago Bueno",27,"Defensor",0],["Juan Manuel Sanabria",26,"Meio-campista",1],["Rodrigo Zalazar",26,"Meio-campista",2]],"USA":[["Matt Turner",31,"Goleiro",0],["Sergiño Dest",25,"Defensor",3],["Chris Richards",26,"Defensor",3],["Tyler Adams",27,"Meio-campista",2],["Antonee Robinson",28,"Defensor",5],["Auston Trusty",27,"Defensor",0],["Gio Reyna",23,"Meio-campista",10],["Ricardo Pepi",23,"Atacante",13],["Christian Pulisic",27,"Atacante",33],["Brenden Aaronson",25,"Atacante",9],["Miles Robinson",29,"Defensor",3],["Tim Ream",38,"Defensor",1],["Weston McKennie",25,"Meio-campista",1],["Cristian Roldan",31,"Meio-campista",0],["Alex Freeman",21,"Defensor",3],["Malik Tillman",24,"Meio-campista",3],["Max Arfsten",25,"Defensor",1],["Haji Wright",28,"Atacante",7],["Folarin Balogun",24,"Atacante",11],["Tim Weah",26,"Atacante",7],["Joe Scally",23,"Defensor",0],["Matt Freese",27,"Goleiro",0],["Chris Brady",22,"Goleiro",0],["Alex Zendejas",28,"Atacante",2]],"UZB":[["Otkir Yusupov",35,"Goleiro",0],["Abdukodir Husanov",22,"Defensor",0],["Khojiakbar Alijonov",29,"Defensor",3],["Farruh Sayfiyev",35,"Defensor",1],["Rustam Ashurmatov",29,"Defensor",1],["Akmal Mozgovoy",27,"Meio-campista",1],["Otabek Shukurov",29,"Meio-campista",10],["Jamshid Iskanderov",32,"Meio-campista",4],["Odijion Xamrobekov",30,"Meio-campista",1],["Jaloliddin Masharipov",25,"Meio-campista",1],["Oston Orunov",25,"Meio-campista",10],["Abduvohid Nematov",25,"Goleiro",0],["Sherzod Nasrullayev",27,"Defensor",2],["Eldor Shomurodov",30,"Atacante",44],["Umar Eshmurodov",33,"Defensor",0],["Botirali Ergashev",30,"Goleiro",0],["Dostonbek Kahmdamov",29,"Meio-campista",5],["Abdulla Abdullaev",28,"Defensor",0],["Azizjon Ganiev",28,"Meio-campista",0],["Azizbek Amonov",28,"Atacante",2],["Igor Sergeev",33,"Atacante",25],["Abbosbek Fayzullayev",22,"Meio-campista",9],["Sherzod Esanov",23,"Meio-campista",0],["Behruz Karimov",18,"Defensor",0],["Avazbek Ulmasaliyev",26,"Defensor",0],["Jahongir Orozov",22,"Defensor",1]]},
"regraTerceiros":["Pontos conquistados","Saldo de gols","Gols marcados","Fair play (cartões)","Ranking da Fifa"],
"regrasTexto":"### RN-01 — Classificação de Grupos\nOrdem de critérios:\n1. Pontos\n2. Saldo de gols\n3. Gols marcados\n4. Resultado do confronto direto\n5. Saldo de gols nos confrontos diretos\n6. Fair Play (cartões)\n7. Ranking FIFA\n\n### RN-02 — Avanço da Fase de Grupos\n- 1º e 2º de cada grupo avançam automaticamente (24 times)\n- Os 8 melhores entre os 12 terceiros colocados avançam (8 times)\n- Total de 32 times nas oitavas\n\n### RN-03 — Mata-Mata\n- Em caso de empate no tempo normal: prorrogação (2 × 15 min)\n- Se persistir empate: pênaltis\n- Não há gol de ouro/prata"};

/* ==========================================================================
   Utilitários
   ========================================================================== */
const FLAG_URL = codigo => `https://api.fifa.com/api/v3/picture/flags-sq-4/${codigo}`;
const LOGO_URL = 'https://api.fifa.com/api/v3/picture/tournaments-sq-4/285023';
const SIM_KEY = 'portalcopa26.simulacao';

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const selecaoPorCodigo = Object.fromEntries(COPA.selecoes.map(s => [s.codigo, s]));
const GRUPOS = [...new Set(COPA.selecoes.map(s => s.grupo))].sort();
const ORDEM_POSICAO = ['Goleiro', 'Defensor', 'Meio-campista', 'Atacante'];

/** Data/hora do jogo — horários das fontes estão no horário de Brasília (UTC-3). */
const dataHoraJogo = j => new Date(`${j.data}T${j.hora}:00-03:00`);
const fmtDiaLongo = data => { const t = new Date(`${data}T12:00:00`).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); return t.charAt(0).toUpperCase() + t.slice(1); };
const fmtDiaCurto = data => new Date(`${data}T12:00:00`).toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' });
const estadioDoJogo = j => COPA.estadios[j.estadio];
const faseOuGrupo = j => j.grupo ? `Grupo ${j.grupo}` : (j.rotulo || j.fase);

function flagImg(codigo, classe = 'flag') {
  const s = selecaoPorCodigo[codigo];
  return `<img class="${classe}" src="${FLAG_URL(codigo)}" alt="Bandeira de ${esc(s ? s.nome : codigo)}" loading="lazy">`;
}
function timeHtml(codigo, rotulo, classeExtra = '') {
  if (!codigo) return `<span class="time placeholder ${classeExtra}">${esc(rotulo)}</span>`;
  return `<span class="time ${classeExtra}">${flagImg(codigo)}<span>${esc(selecaoPorCodigo[codigo].nome)}</span></span>`;
}

/* ==========================================================================
   Layout compartilhado (cabeçalho e rodapé)
   ========================================================================== */
const PAGINAS = [
  ['index.html', 'Home', 'home'],
  ['jogos.html', 'Jogos', 'jogos'],
  ['grupos.html', 'Grupos', 'grupos'],
  ['equipes.html', 'Equipes', 'equipes'],
  ['ranking.html', 'Ranking', 'ranking'],
  ['simulador.html', 'Simulador', 'simulador']
];

function renderLayout(pagina) {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <div class="container">
      <a class="brand" href="index.html"><img src="${LOGO_URL}" alt="Logo da Copa do Mundo FIFA 2026"><span>Portal<b>Copa26</b></span></a>
      <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>
      <nav class="nav" aria-label="Navegação principal">
        ${PAGINAS.map(([href, nome, id]) => `<a href="${href}" class="${id === pagina ? 'ativo' : ''}" ${id === pagina ? 'aria-current="page"' : ''}>${nome}</a>`).join('')}
      </nav>
    </div>`;
  document.body.prepend(header);
  const toggle = $('.menu-toggle', header), nav = $('.nav', header);
  toggle.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    toggle.setAttribute('aria-expanded', aberto);
  });

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <span>PortalCopa26 — protótipo para fãs da Copa do Mundo FIFA 2026 · Canadá · Estados Unidos · México</span>
      <span>Horários no fuso de Brasília · Bandeiras e logo: API pública da FIFA</span>
    </div>`;
  document.body.append(footer);
}

/* ==========================================================================
   Resultados (oficiais e simulados)
   As fontes não trazem placares; os resultados oficiais começam vazios.
   ========================================================================== */
const RESULTADOS_OFICIAIS = {};

function carregarSimulacao() {
  try { return JSON.parse(localStorage.getItem(SIM_KEY)) || {}; } catch { return {}; }
}
function salvarSimulacao(res) {
  try { localStorage.setItem(SIM_KEY, JSON.stringify(res)); } catch { /* armazenamento indisponível */ }
}

/* ==========================================================================
   Classificação — RN-01
   1 Pontos · 2 Saldo · 3 Gols marcados · 4 Confronto direto · 5 Saldo no confronto direto
   6 Fair Play (sem dados de cartões nas fontes: não aplicado) · 7 Ranking FIFA
   ========================================================================== */
const jogosDoGrupo = g => COPA.jogos.filter(j => j.grupo === g);
const placarValido = p => Array.isArray(p) && Number.isInteger(p[0]) && Number.isInteger(p[1]);

function estatisticas(codigos, jogos, resultados) {
  const t = Object.fromEntries(codigos.map(c => [c, { codigo: c, j: 0, v: 0, e: 0, d: 0, gm: 0, gc: 0, sg: 0, pts: 0 }]));
  for (const jogo of jogos) {
    const p = resultados[jogo.id];
    if (!placarValido(p) || !t[jogo.mandante] || !t[jogo.visitante]) continue;
    const [a, b] = [t[jogo.mandante], t[jogo.visitante]];
    a.j++; b.j++;
    a.gm += p[0]; a.gc += p[1]; b.gm += p[1]; b.gc += p[0];
    if (p[0] > p[1]) { a.v++; b.d++; a.pts += 3; }
    else if (p[0] < p[1]) { b.v++; a.d++; b.pts += 3; }
    else { a.e++; b.e++; a.pts++; b.pts++; }
  }
  Object.values(t).forEach(x => x.sg = x.gm - x.gc);
  return t;
}

const rankingFifa = c => selecaoPorCodigo[c].rankingFifa ?? Infinity; // sem ranking na fonte → último
const cmpGeral = (a, b) => b.pts - a.pts || b.sg - a.sg || b.gm - a.gm;

function classificarGrupo(grupo, resultados) {
  const codigos = COPA.selecoes.filter(s => s.grupo === grupo).map(s => s.codigo);
  const jogos = jogosDoGrupo(grupo);
  const stats = estatisticas(codigos, jogos, resultados);
  const lista = Object.values(stats).sort(cmpGeral);

  // Desempate por confronto direto entre equipes empatadas nos critérios 1–3
  const final = [];
  for (let i = 0; i < lista.length;) {
    let k = i + 1;
    while (k < lista.length && cmpGeral(lista[i], lista[k]) === 0) k++;
    const bloco = lista.slice(i, k);
    if (bloco.length > 1) {
      const cods = bloco.map(x => x.codigo);
      const h2h = estatisticas(cods, jogos.filter(j => cods.includes(j.mandante) && cods.includes(j.visitante)), resultados);
      bloco.sort((a, b) =>
        h2h[b.codigo].pts - h2h[a.codigo].pts ||
        h2h[b.codigo].sg - h2h[a.codigo].sg ||
        rankingFifa(a.codigo) - rankingFifa(b.codigo) ||
        selecaoPorCodigo[a.codigo].nome.localeCompare(selecaoPorCodigo[b.codigo].nome, 'pt-BR'));
    }
    final.push(...bloco);
    i = k;
  }
  const completos = jogos.every(j => placarValido(resultados[j.id]));
  return final.map((x, i) => ({ ...x, posicao: i + 1, grupo, grupoCompleto: completos }));
}

/** Regra dos terceiros colocados: pontos, saldo, gols marcados, (fair play), ranking FIFA. */
function classificarTerceiros(resultados) {
  const terceiros = GRUPOS.map(g => classificarGrupo(g, resultados)[2]);
  terceiros.sort((a, b) => cmpGeral(a, b) || rankingFifa(a.codigo) - rankingFifa(b.codigo));
  return terceiros.map((t, i) => ({ ...t, posTerceiro: i + 1, avanca: i < 8 }));
}

function tabelaClassificacao(linhas, opcoes = {}) {
  const { terceirosAvancam = new Set(), grupoCompleto = false } = opcoes;
  const zona = l => {
    if (l.posicao <= 2) return 'zona-class';
    if (l.posicao === 3) return grupoCompleto ? (terceirosAvancam.has(l.codigo) ? 'zona-terc' : 'zona-elim') : 'zona-terc';
    return grupoCompleto ? 'zona-elim' : '';
  };
  return `
    <div class="tabela-wrap"><table class="tabela">
      <thead><tr>
        <th class="num">Pos</th><th>Seleção</th>
        <th class="num" title="Jogos">J</th><th class="num" title="Vitórias">V</th><th class="num" title="Empates">E</th>
        <th class="num" title="Derrotas">D</th><th class="num" title="Gols marcados">GM</th><th class="num" title="Saldo de gols">SG</th>
        <th class="num" title="Pontos">Pts</th>
      </tr></thead>
      <tbody>${linhas.map(l => {
        const s = selecaoPorCodigo[l.codigo];
        return `<tr class="${zona(l)}">
          <td class="num"><span class="pos">${l.posicao}</span></td>
          <td><a class="time" href="equipes.html#${s.codigo}">${flagImg(s.codigo)}<span>${esc(s.nome)}</span></a>
            ${s.cabecaDeChave ? '<span class="badge" title="Cabeça de chave">CC</span>' : ''}</td>
          <td class="num">${l.j}</td><td class="num">${l.v}</td><td class="num">${l.e}</td><td class="num">${l.d}</td>
          <td class="num">${l.gm}</td><td class="num">${l.sg > 0 ? '+' : ''}${l.sg}</td><td class="num pts">${l.pts}</td>
        </tr>`;
      }).join('')}</tbody>
    </table></div>`;
}

const LEGENDA_HTML = `
  <div class="legenda">
    <span class="l-class">1º e 2º — classificados à Segunda Fase</span>
    <span class="l-terc">3º — disputa entre os 8 melhores terceiros</span>
    <span class="l-elim">Eliminado (grupo encerrado)</span>
    <span><span class="badge">CC</span> Cabeça de chave</span>
  </div>`;

/* ==========================================================================
   Página: Home
   ========================================================================== */
function initHome() {
  const sedes = ['Canadá', 'Estados Unidos', 'México'];
  const codSede = { 'Canadá': 'CAN', 'Estados Unidos': 'USA', 'México': 'MEX' };

  $('#hero-sedes').innerHTML = sedes.map(p => `<span class="chip">${flagImg(codSede[p])}${p}</span>`).join('');

  const totalJogos = COPA.fases.reduce((s, f) => s + f.jogos, 0);
  $('#stats').innerHTML = [
    [COPA.selecoes.length, 'seleções'],
    [GRUPOS.length, 'grupos'],
    [totalJogos, 'jogos'],
    [COPA.estadios.length, 'cidades-sede'],
    [sedes.length, 'países-sede']
  ].map(([n, t]) => `<div class="card stat"><strong>${n}</strong><span>${t}</span></div>`).join('');

  $('#sedes').innerHTML = sedes.map(p => {
    const est = COPA.estadios.filter(e => e.pais === p);
    return `<article class="card card-pad sede-card">
      <h3>${flagImg(codSede[p])}${p}</h3>
      <p class="muted small">${est.length} ${est.length > 1 ? 'cidades-sede' : 'cidade-sede'}</p>
      <ul>${est.map(e => `<li><span><b>${esc(e.cidade)}</b><br><span class="muted">${esc(e.estadio)}</span></span><span class="muted">${esc(e.capacidade)} lugares</span></li>`).join('')}</ul>
    </article>`;
  }).join('');

  const agora = new Date();
  let proximos = COPA.jogos.filter(j => dataHoraJogo(j) >= agora).slice(0, 6);
  if (!proximos.length) {
    const ultimo = COPA.jogos[COPA.jogos.length - 1];
    $('#proximos-aviso').innerHTML = `<div class="aviso">Não há próximos jogos: a última partida da competição (${esc(ultimo.rotulo)}) estava marcada para ${new Date(ultimo.data + 'T12:00').toLocaleDateString('pt-BR')}. Abaixo, os jogos de abertura do torneio.</div>`;
    proximos = COPA.jogos.slice(0, 6);
    $('#proximos-titulo').textContent = 'Jogos de abertura';
  }
  $('#proximos').innerHTML = proximos.map(cardJogo).join('');
}

function cardJogo(j) {
  const e = estadioDoJogo(j);
  return `<article class="card jogo-card">
    <div class="jogo-meta"><span>${fmtDiaCurto(j.data)} · ${j.hora}</span><span class="badge badge-azul">${esc(faseOuGrupo(j))}</span></div>
    <div class="jogo-times">${timeHtml(j.mandante, j.mandanteRotulo)}<span class="jogo-x">x</span>${timeHtml(j.visitante, j.visitanteRotulo)}</div>
    <div class="jogo-local">🏟️ ${esc(e.estadio)} · ${esc(e.cidade)}</div>
  </article>`;
}

/* ==========================================================================
   Página: Jogos
   ========================================================================== */
function initJogos() {
  const fFase = $('#filtro-fase'), fGrupo = $('#filtro-grupo'), fSel = $('#filtro-selecao');
  fFase.innerHTML = '<option value="">Todas as fases</option>' + COPA.fases.map(f => `<option>${esc(f.nome)}</option>`).join('');
  fGrupo.innerHTML = '<option value="">Todos os grupos</option>' + GRUPOS.map(g => `<option value="${g}">Grupo ${g}</option>`).join('');
  fSel.innerHTML = '<option value="">Todas as seleções</option>' +
    [...COPA.selecoes].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR')).map(s => `<option value="${s.codigo}">${esc(s.nome)}</option>`).join('');

  const params = new URLSearchParams(location.search);
  if (params.get('grupo')) fGrupo.value = params.get('grupo');
  if (params.get('selecao')) fSel.value = params.get('selecao');

  const render = () => {
    const lista = COPA.jogos
      .filter(j => !fFase.value || j.fase === fFase.value)
      .filter(j => !fGrupo.value || j.grupo === fGrupo.value)
      .filter(j => !fSel.value || j.mandante === fSel.value || j.visitante === fSel.value)
      .sort((a, b) => dataHoraJogo(a) - dataHoraJogo(b));

    $('#total-jogos').textContent = `${lista.length} ${lista.length === 1 ? 'jogo' : 'jogos'}`;
    if (!lista.length) { $('#lista-dias').innerHTML = '<div class="card vazio">Nenhum jogo encontrado para os filtros selecionados.</div>'; return; }

    const dias = {};
    lista.forEach(j => (dias[j.data] ||= []).push(j));
    $('#lista-dias').innerHTML = Object.entries(dias).map(([data, js]) => `
      <section class="dia">
        <h2 class="dia-titulo">${fmtDiaLongo(data)}<small>${js.length} ${js.length === 1 ? 'jogo' : 'jogos'}</small></h2>
        <div class="card lista-jogos">${js.map(linhaJogo).join('')}</div>
      </section>`).join('');
  };
  [fFase, fGrupo, fSel].forEach(el => el.addEventListener('change', render));
  $('#limpar-filtros').addEventListener('click', () => { fFase.value = fGrupo.value = fSel.value = ''; render(); });
  render();
}

function linhaJogo(j) {
  const e = estadioDoJogo(j);
  const grupo = j.grupo
    ? `<a class="badge badge-azul" href="grupos.html#grupo-${j.grupo}">Grupo ${j.grupo}</a>`
    : `<span class="badge">${esc(j.rotulo)}</span>`;
  return `<div class="linha-jogo">
    <span class="hora">${j.hora}</span>
    <span class="confronto">${timeHtml(j.mandante, j.mandanteRotulo)}<span class="jogo-x">x</span>${timeHtml(j.visitante, j.visitanteRotulo)}</span>
    <span class="grupo-col">${grupo}</span>
    <span class="estadio"><strong>${esc(e.estadio)}</strong>${esc(e.cidade)} · ${esc(e.pais)}</span>
  </div>`;
}

/* ==========================================================================
   Página: Grupos
   ========================================================================== */
function initGrupos() {
  const tabs = $('#fonte-resultados');
  let fonte = 'oficial';
  const render = () => {
    const res = fonte === 'oficial' ? RESULTADOS_OFICIAIS : carregarSimulacao();
    const jogados = COPA.jogos.filter(j => j.grupo && placarValido(res[j.id])).length;
    const terceiros = classificarTerceiros(res);
    const avancam = new Set(terceiros.filter(t => t.avanca).map(t => t.codigo));
    $('#info-resultados').innerHTML = fonte === 'oficial'
      ? `<div class="aviso">As fontes de dados do portal não contêm placares; a classificação oficial exibe ${jogados} de 72 jogos com resultado. Use o <a href="simulador.html">Simulador</a> para projetar a classificação.</div>`
      : `<div class="aviso">Classificação calculada a partir da sua simulação: ${jogados} de 72 jogos com placar. <a href="simulador.html">Editar simulação</a></div>`;

    $('#grupos').innerHTML = GRUPOS.map(g => {
      const linhas = classificarGrupo(g, res);
      return `<article class="card grupo-card" id="grupo-${g}">
        <h3>Grupo ${g} <a href="jogos.html?grupo=${g}">ver jogos →</a></h3>
        ${tabelaClassificacao(linhas, { terceirosAvancam: avancam, grupoCompleto: linhas[0].grupoCompleto })}
      </article>`;
    }).join('');
    $('#terceiros').innerHTML = tabelaTerceiros(terceiros);
    if (location.hash) { const alvo = document.querySelector(location.hash); if (alvo) alvo.scrollIntoView(); }
  };
  tabs.addEventListener('click', ev => {
    const b = ev.target.closest('button'); if (!b) return;
    fonte = b.dataset.fonte;
    tabs.querySelectorAll('button').forEach(x => x.classList.toggle('ativo', x === b));
    render();
  });
  render();
}

function tabelaTerceiros(terceiros) {
  return `<div class="tabela-wrap"><table class="tabela">
    <thead><tr><th class="num">#</th><th>Seleção</th><th class="num">Grupo</th><th class="num">J</th><th class="num">GM</th><th class="num">SG</th><th class="num">Pts</th><th class="num esconde-mobile">Ranking FIFA</th><th>Situação</th></tr></thead>
    <tbody>${terceiros.map(t => {
      const s = selecaoPorCodigo[t.codigo];
      return `<tr class="${t.avanca ? 'zona-terc' : 'zona-elim'}">
        <td class="num"><span class="pos">${t.posTerceiro}</span></td>
        <td><span class="time">${flagImg(s.codigo)}<span>${esc(s.nome)}</span></span></td>
        <td class="num">${t.grupo}</td><td class="num">${t.j}</td><td class="num">${t.gm}</td>
        <td class="num">${t.sg > 0 ? '+' : ''}${t.sg}</td><td class="num pts">${t.pts}</td>
        <td class="num esconde-mobile">${s.rankingFifa ?? '—'}</td>
        <td>${t.avanca ? '<span class="badge badge-verde">Avança</span>' : '<span class="muted small">Fora</span>'}</td>
      </tr>`;
    }).join('')}</tbody></table></div>`;
}

/* ==========================================================================
   Página: Equipes
   ========================================================================== */
function initEquipes() {
  const busca = $('#busca-equipe');
  const renderLista = () => {
    const termo = busca.value.trim().toLocaleLowerCase('pt-BR');
    const html = GRUPOS.map(g => {
      const sels = COPA.selecoes.filter(s => s.grupo === g && s.nome.toLocaleLowerCase('pt-BR').includes(termo));
      if (!sels.length) return '';
      return `<div class="equipes-grupo"><h3>Grupo ${g}</h3><div class="equipes-grid">
        ${sels.map(s => `<button class="equipe-btn" data-codigo="${s.codigo}">${flagImg(s.codigo)}<span>${esc(s.nome)}</span></button>`).join('')}
      </div></div>`;
    }).join('');
    $('#lista-equipes').innerHTML = html || '<div class="card vazio">Nenhuma seleção encontrada.</div>';
    marcarAtiva();
  };
  const marcarAtiva = () => {
    const cod = location.hash.slice(1);
    document.querySelectorAll('.equipe-btn').forEach(b => b.classList.toggle('ativo', b.dataset.codigo === cod));
  };
  const renderDetalhe = () => {
    const cod = location.hash.slice(1).toUpperCase();
    const det = $('#detalhe-equipe');
    if (!selecaoPorCodigo[cod]) { det.innerHTML = ''; det.hidden = true; marcarAtiva(); return; }
    det.hidden = false;
    det.innerHTML = detalheEquipe(cod);
    marcarAtiva();
    det.scrollIntoView({ behavior: 'smooth', block: 'start' });
    $('#filtro-posicao').addEventListener('change', ev => {
      det.querySelectorAll('tbody tr').forEach(tr => tr.hidden = ev.target.value && tr.dataset.posicao !== ev.target.value);
    });
  };
  $('#lista-equipes').addEventListener('click', ev => {
    const b = ev.target.closest('.equipe-btn'); if (!b) return;
    if (location.hash === '#' + b.dataset.codigo) renderDetalhe(); else location.hash = b.dataset.codigo;
  });
  busca.addEventListener('input', renderLista);
  window.addEventListener('hashchange', renderDetalhe);
  renderLista();
  renderDetalhe();
}

function detalheEquipe(cod) {
  const s = selecaoPorCodigo[cod];
  const elenco = (COPA.jogadores[cod] || [])
    .map(([nome, idade, posicao, gols]) => ({ nome, idade, posicao, gols }))
    .sort((a, b) => ORDEM_POSICAO.indexOf(a.posicao) - ORDEM_POSICAO.indexOf(b.posicao) || a.nome.localeCompare(b.nome, 'pt-BR'));
  const jogos = COPA.jogos.filter(j => j.mandante === cod || j.visitante === cod);
  const idadeMedia = elenco.length ? (elenco.reduce((t, p) => t + p.idade, 0) / elenco.length).toFixed(1) : '—';
  return `<article class="card">
    <div class="equipe-topo">
      ${flagImg(cod, 'flag flag-lg')}
      <div>
        <h2>${esc(s.nome)} ${s.cabecaDeChave ? '<span class="badge">Cabeça de chave</span>' : ''}</h2>
        <div class="equipe-info">
          <span>Grupo: <b><a href="grupos.html#grupo-${s.grupo}">${s.grupo}</a></b></span>
          <span>Técnico: <b>${esc(s.tecnico || '—')}</b></span>
          <span>Ranking FIFA: <b>${s.rankingFifa ? s.rankingFifa + 'º' : 'não consta'}</b></span>
          <span>Jogadores: <b>${elenco.length}</b></span>
          <span>Idade média: <b>${idadeMedia}</b></span>
        </div>
      </div>
    </div>
    <div class="equipe-corpo">
      <h3>Jogos na Fase de Grupos e Segunda Fase</h3>
      <div class="mini-jogos">${jogos.map(j => {
        const e = estadioDoJogo(j);
        return `<div class="mini-jogo"><div class="muted">${fmtDiaCurto(j.data)} · ${j.hora} · ${esc(faseOuGrupo(j))}</div>
          <div class="mini-jogo-times">${timeHtml(j.mandante, j.mandanteRotulo)}<span class="jogo-x">x</span>${timeHtml(j.visitante, j.visitanteRotulo)}</div>
          <div class="muted">${esc(e.estadio)} · ${esc(e.cidade)}</div></div>`;
      }).join('')}</div>
      <div class="secao-head"><h3>Elenco</h3>
        <label class="small muted">Posição
          <select id="filtro-posicao"><option value="">Todas</option>${ORDEM_POSICAO.map(p => `<option>${p}</option>`).join('')}</select>
        </label>
      </div>
      <div class="tabela-wrap"><table class="tabela">
        <thead><tr><th>Nome</th><th>Posição</th><th class="num">Idade</th><th class="num">Gols marcados</th><th class="num">Participações em Copas</th></tr></thead>
        <tbody>${elenco.map(p => `<tr data-posicao="${esc(p.posicao)}">
          <td><b>${esc(p.nome)}</b></td>
          <td><span class="pos-tag pos-${esc(p.posicao)}">${esc(p.posicao)}</span></td>
          <td class="num">${p.idade}</td><td class="num">${p.gols}</td>
          <td class="num muted" title="Informação não disponível nas fontes de dados">n/d</td>
        </tr>`).join('')}</tbody>
      </table></div>
      <p class="muted small">n/d: participações em Copas não constam nas fontes de dados do portal.</p>
    </div>
  </article>`;
}

/* ==========================================================================
   Página: Ranking
   ========================================================================== */
function initRanking() {
  const so = $('#so-copa'), busca = $('#busca-ranking');
  const render = () => {
    const termo = busca.value.trim().toLocaleLowerCase('pt-BR');
    const lista = COPA.ranking
      .filter(r => !so.checked || r.codigo)
      .filter(r => r.nome.toLocaleLowerCase('pt-BR').includes(termo));
    $('#ranking').innerHTML = lista.length ? `<div class="tabela-wrap"><table class="tabela ranking-tabela">
      <thead><tr><th class="num">Posição</th><th>Seleção</th><th class="esconde-mobile">Copa 2026</th><th class="pontos">Pontuação</th></tr></thead>
      <tbody>${lista.map(r => `<tr class="${r.codigo ? 'destaque' : ''}">
        <td class="num"><span class="pos">${r.posicao}</span></td>
        <td>${r.codigo ? `<a class="time" href="equipes.html#${r.codigo}">${flagImg(r.codigo)}<span>${esc(r.nome)}</span></a>` : `<span class="time">${esc(r.nome)}</span>`}</td>
        <td class="esconde-mobile">${r.codigo ? `<span class="badge badge-azul">Grupo ${selecaoPorCodigo[r.codigo].grupo}</span>` : ''}</td>
        <td class="pontos">${r.pontos.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
      </tr>`).join('')}</tbody></table></div>` : '<div class="vazio">Nenhuma seleção encontrada.</div>';
  };
  so.addEventListener('change', render);
  busca.addEventListener('input', render);
  const fora = COPA.selecoes.filter(s => !s.rankingFifa);
  $('#fora-ranking').innerHTML = fora.length
    ? `Seleções da Copa que não constam na lista de ranking das fontes: ${fora.map(s => `<a href="equipes.html#${s.codigo}">${esc(s.nome)}</a>`).join(', ')}.`
    : '';
  render();
}

/* ==========================================================================
   Página: Simulador
   ========================================================================== */
function initSimulador() {
  let resultados = carregarSimulacao();
  let grupoAtual = (location.hash.match(/^#([A-L])$/) || [])[1] || 'A';

  $('#tabs-grupos').innerHTML = GRUPOS.map(g => `<button data-grupo="${g}">Grupo ${g}</button>`).join('');
  $('#regras').innerHTML = `
    <h3>Critérios de classificação (RN-01)</h3>
    <ol><li>Pontos</li><li>Saldo de gols</li><li>Gols marcados</li><li>Resultado do confronto direto</li><li>Saldo de gols nos confrontos diretos</li><li>Fair Play (cartões) — <span class="muted">não aplicado: as fontes não trazem dados de cartões</span></li><li>Ranking FIFA</li></ol>
    <h3>Avanço da Fase de Grupos (RN-02)</h3>
    <ul><li>1º e 2º de cada grupo avançam automaticamente (24 seleções)</li><li>Os 8 melhores entre os 12 terceiros colocados avançam (8 seleções)</li></ul>
    <h3>Terceiros colocados</h3>
    <ol>${COPA.regraTerceiros.map(r => `<li>${esc(r)}${/fair play/i.test(r) ? ' — <span class="muted">não aplicado</span>' : ''}</li>`).join('')}</ol>`;

  const renderGrupo = () => {
    document.querySelectorAll('#tabs-grupos button').forEach(b => b.classList.toggle('ativo', b.dataset.grupo === grupoAtual));
    $('#sim-titulo').textContent = `Grupo ${grupoAtual}`;
    $('#sim-jogos').innerHTML = jogosDoGrupo(grupoAtual).map(j => {
      const p = resultados[j.id] || [];
      const e = estadioDoJogo(j);
      const s1 = selecaoPorCodigo[j.mandante], s2 = selecaoPorCodigo[j.visitante];
      return `<div class="sim-jogo" data-id="${j.id}">
        <span class="sim-jogo-meta">${fmtDiaCurto(j.data)} · ${j.hora} · ${esc(e.estadio)}, ${esc(e.cidade)}</span>
        ${timeHtml(j.mandante, null)}
        <input type="number" min="0" max="99" inputmode="numeric" aria-label="Gols de ${esc(s1.nome)}" value="${p[0] ?? ''}" data-lado="0">
        <span class="jogo-x">x</span>
        <input type="number" min="0" max="99" inputmode="numeric" aria-label="Gols de ${esc(s2.nome)}" value="${p[1] ?? ''}" data-lado="1">
        ${timeHtml(j.visitante, null, 'dir')}
      </div>`;
    }).join('');
    renderClassificacao();
  };

  const renderClassificacao = () => {
    const terceiros = classificarTerceiros(resultados);
    const avancam = new Set(terceiros.filter(t => t.avanca).map(t => t.codigo));
    const linhas = classificarGrupo(grupoAtual, resultados);
    $('#sim-classificacao').innerHTML = tabelaClassificacao(linhas, { terceirosAvancam: avancam, grupoCompleto: linhas[0].grupoCompleto });
    $('#sim-terceiros').innerHTML = tabelaTerceiros(terceiros);
    const jogados = COPA.jogos.filter(j => j.grupo && placarValido(resultados[j.id])).length;
    $('#sim-progresso').textContent = `${jogados} de 72 jogos da Fase de Grupos com placar`;
    renderClassificados(terceiros);
  };

  const renderClassificados = terceiros => {
    const todos = GRUPOS.every(g => jogosDoGrupo(g).every(j => placarValido(resultados[j.id])));
    if (!todos) { $('#sim-classificados').innerHTML = '<p class="muted">Preencha todos os 72 placares da Fase de Grupos para ver as 32 seleções classificadas à Segunda Fase.</p>'; return; }
    const lista = [];
    GRUPOS.forEach(g => classificarGrupo(g, resultados).slice(0, 2).forEach(l => lista.push([l.codigo, `${l.posicao}º Grupo ${g}`])));
    terceiros.filter(t => t.avanca).forEach(t => lista.push([t.codigo, `3º Grupo ${t.grupo}`]));
    $('#sim-classificados').innerHTML = `<div class="equipes-grid">${lista.map(([c, r]) =>
      `<div class="equipe-btn">${flagImg(c)}<span>${esc(selecaoPorCodigo[c].nome)}<br><span class="muted small">${r}</span></span></div>`).join('')}</div>`;
  };

  $('#tabs-grupos').addEventListener('click', ev => {
    const b = ev.target.closest('button'); if (!b) return;
    grupoAtual = b.dataset.grupo;
    history.replaceState(null, '', '#' + grupoAtual);
    renderGrupo();
  });

  $('#sim-jogos').addEventListener('input', ev => {
    const linha = ev.target.closest('.sim-jogo'); if (!linha) return;
    const [a, b] = linha.querySelectorAll('input');
    const ler = el => el.value === '' ? null : Math.max(0, Math.min(99, parseInt(el.value, 10)));
    const p = [ler(a), ler(b)];
    if (p[0] === null && p[1] === null) delete resultados[linha.dataset.id];
    else resultados[linha.dataset.id] = p;
    salvarSimulacao(resultados);
    renderClassificacao();
  });

  $('#btn-simular-grupo').addEventListener('click', () => { simularJogos(jogosDoGrupo(grupoAtual)); renderGrupo(); });
  $('#btn-simular-todos').addEventListener('click', () => { simularJogos(COPA.jogos.filter(j => j.grupo)); renderGrupo(); });
  $('#btn-limpar-grupo').addEventListener('click', () => {
    jogosDoGrupo(grupoAtual).forEach(j => delete resultados[j.id]); salvarSimulacao(resultados); renderGrupo();
  });
  $('#btn-limpar-todos').addEventListener('click', () => {
    if (!confirm('Apagar todos os placares simulados?')) return;
    resultados = {}; salvarSimulacao(resultados); renderGrupo();
  });

  /** Gera placares aleatórios; a força relativa usa a pontuação do Ranking FIFA das fontes. */
  function simularJogos(jogos) {
    const forca = c => selecaoPorCodigo[c].pontosFifa ?? 1350;
    const gols = media => { let L = Math.exp(-media), k = 0, p = 1; do { k++; p *= Math.random(); } while (p > L); return Math.min(k - 1, 9); };
    jogos.forEach(j => {
      const dif = (forca(j.mandante) - forca(j.visitante)) / 250;
      resultados[j.id] = [gols(Math.max(0.3, 1.3 + dif * 0.6)), gols(Math.max(0.3, 1.3 - dif * 0.6))];
    });
    salvarSimulacao(resultados);
  }

  renderGrupo();
}

/* ==========================================================================
   Inicialização
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const pagina = document.body.dataset.page;
  renderLayout(pagina);
  const legenda = $('#legenda');
  if (legenda) legenda.innerHTML = LEGENDA_HTML;
  ({ home: initHome, jogos: initJogos, grupos: initGrupos, equipes: initEquipes, ranking: initRanking, simulador: initSimulador }[pagina] || (() => {}))();
});
