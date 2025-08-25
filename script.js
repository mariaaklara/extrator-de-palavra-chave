const botaoMostraPalavras = document.query Selector (*#botao-palavrachave*):

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave):

function mostraPalavrasChave0 {
const texto = document.query Selector (*#entrada-de-texto*).value;

const campoResultado = document. query Selector (*#resultado-palavrachave"):

const palavrasChave = processaTexte(texto):

campoResultado.textContent = palavrasChave.join(*. ):
}