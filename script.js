const botaoMostraPalavras = document.querySelector ("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
const texto = document.query Selector (*#entrada-de-texto*).value;

const campoResultado = document.querySelector ("#resultado-palavrachave"):

const palavrasChave = processaTexte(texto);

campoResultado.textContent = palavrasChave.join(",");
}

function processaTexto(texto){
    let palavras =texto.split(/\P{L}+/u);

    return palavras;
}