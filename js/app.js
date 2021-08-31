let btnVitoriaCruzeiro = document.querySelector("#vitoria-cruzeiro");

btnVitoriaCruzeiro.onclick = () => {
    console.log("Derrota Cruzeiro");
};

let btnVitoriaFlamengo = document.querySelector("#vitoria-flamengo");

btnVitoriaFlamengo.addEventListener('click', () => {
    console.log("Derrota Flamengo")
});