// Apenas com essa "function" e "onclick="clicou()"" lá na tag 'buttom' no HTML já conseguimos fazer esse evento funcionar no console do navegador. 

function clicou() {
    console.log('Clicou no Botão')
}

// ALternativa apenas pelo JavaScript.

let botao = document.querySelector('.botao');

botao.addEventListener("click", () => clicou());