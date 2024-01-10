function calCuladoraRank(victorias,derrotas){
    let saldoRankeadas = victorias - derrotas;

    if(saldoRankeadas <= 10){
       alert(`O Herói tem de saldo de ${saldoRankeadas} está no nível de Ferro`)
    } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20){
        alert(`O Herói tem de saldo de ${saldoRankeadas} está no nível de Bronze`)
    } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50){
        alert(`O Herói tem de saldo de90 ${saldoRankeadas} está no nível de Prata`)
    } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80){
        alert(`O Herói tem de saldo de ${saldoRankeadas} está no nível de Ouro`)
    } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90){
        alert(`O Herói tem de saldo de ${saldoRankeadas} está no nível de Diamante`)
    } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100){
        alert(`O Herói tem de saldo de ${saldoRankeadas} está no nível de Lendário`)
    } else if (saldoRankeadas >= 101){
        alert(`O Herói tem de saldo de ${saldoRankeadas} está no nível de Imortal`)
    }
}


calCuladoraRank(prompt('ingresse suas vitorias'), prompt('ingrese suas derrtotas?'))