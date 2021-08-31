let pontosCruzeiro = 0, pontosFlamengo = 0;

let btnVitoriaCruzeiro = document.querySelector("#vitoria-cruzeiro");
let btnVitoriaFlamengo = document.querySelector("#vitoria-flamengo");
let btnEmpateCruzeiro = document.querySelector("#empate-cruzeiro");
let btnEmpateFlamengo = document.querySelector("#empate-flamengo");
let btnDerrotaCruzeiro = document.querySelector("#derrota-cruzeiro");
let btnDerrotaFlamengo = document.querySelector("#derrota-flamengo");

btnVitoriaCruzeiro.onclick = () => {
    pontosCruzeiro += (CalcularPontos("vitória"));
    AtualizarTabelaPontos("cruzeiro");
};

btnVitoriaFlamengo.onclick = () => {
    pontosFlamengo += (CalcularPontos("vitória"));
    AtualizarTabelaPontos("flamengo");
};

btnEmpateCruzeiro.onclick = () => {
    pontosCruzeiro += (CalcularPontos("empate"));
    AtualizarTabelaPontos("cruzeiro");
};

btnEmpateFlamengo.onclick = () => {
    pontosFlamengo += (CalcularPontos("empate"));
    AtualizarTabelaPontos("flamengo");
};

btnDerrotaCruzeiro.onclick = () => {
    pontosCruzeiro += (CalcularPontos("derrota"));
    AtualizarTabelaPontos("cruzeiro");
};

btnDerrotaFlamengo.onclick = () => {
    pontosFlamengo += (CalcularPontos("derrota"));
    AtualizarTabelaPontos("flamengo");
};

function CalcularPontos(resultado){
    if(resultado == "vitória") {
        return 3;
    }else if(resultado == "empate") {
        return 1;
    }else{
        return 0;
    }
}

function AtualizarTabelaPontos(time) {
    if(time == "cruzeiro"){
        document.querySelector(".pontos-cruzeiro").innerHTML = pontosCruzeiro;
    }else if(time == "flamengo"){
        document.querySelector(".pontos-flamengo").innerHTML = pontosFlamengo;
    }
}