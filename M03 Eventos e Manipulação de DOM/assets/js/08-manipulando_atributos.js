// "getAttribute" usado para pegar um 'atributo';

    function clicou() {
        const input = document.querySelector('input');

        console.log(input.getAttribute('placeholder'));
    }

// "hasAttribute" usado para saber se há um 'atributo';

    function clicou() {
        const input = document.querySelector('input');

        if (input.hasAttribute('name')) {
            console.log('O atributo existe!')
        } else {
            console.log('O atributo NÂO existe!')
        }
    }

// "setAttribute" usado para colocar ou alterar o 'atributo'. Existem dois parâmetros. Veja abaixo;

    function clicou() {
        const input = document.querySelector('input');

        input.setAttribute('placeholder', 'Placeholder Alterado!'); // 1° o atributo, 2° pelo que quer ser alterado.
    }

// Juntando tudo e fazendo um botão mostra e ocultar senha;

    function clicou() {
        const input = document.querySelector('input');
        const botao = document.querySelector('.botao');

        if (input.getAttribute('type') === 'text') {
            input.setAttribute('type', 'password');
            botao.innerText = "Show Password"
        }  else {
            input.setAttribute('type', 'text');
            botao.innerText = "Hide Password"
        } 
    }