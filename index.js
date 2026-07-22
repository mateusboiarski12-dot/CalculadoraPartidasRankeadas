CalculadoraRanked(59, 21)


function CalculadoraRanked (Vitorias, Derrotas) {
  let TotalDeVitorias = Vitorias - Derrotas;
let Nivel = "";

  if (Vitorias <= 10) {
        Nivel = "Ranked: Ferro";
  } else if (Vitorias >= 11 && Vitorias <= 20) {
        Nivel = "Ranked: Bronze";
  } 
    else if (Vitorias >= 21 && Vitorias <= 50) {
        Nivel = "Ranked: Prata";
    }
    else if (Vitorias >= 51 && Vitorias <= 80) {
        Nivel = "Ranked: Ouro";
    }
    else if (Vitorias >= 81 && Vitorias <= 90) {
        Nivel = "Ranked: Diamante";
    }   
    else if (Vitorias >= 91 && Vitorias <= 100) {
        Nivel = "Ranked: Lendario";
    }
    else if (Vitorias >= 101) {
        Nivel = "Ranked: Imortal";
    }
console.log("O Herói tem de saldo de " + TotalDeVitorias + " Vitorias e está no nível de " + Nivel); }