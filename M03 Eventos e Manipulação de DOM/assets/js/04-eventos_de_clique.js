// Apenas com essa "function" e "onclick="clicou()"" lá na tag 'buttom' no HTML já conseguimos fazer esse evento funcionar no console do navegador. Veja o exemplo do código abaixo:

function clicou() {
    console.log('Clicou no Botão')
} 

// ALternativa apenas pelo JavaScript. è usada em conjunto com a 'function acima'. Porém não é necessário colocar o evento 'onclick' no HTML.

let botao = document.querySelector('.botao');

botao.addEventListener("click", () => {
    clicou();
});