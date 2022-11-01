// "classList" puxa a lista de classe que tenho naquele elemento;

    function clicou() {
        const button = document.querySelector('button');

        console.log(button.classList);
        
    }

/* 
    "classList.add" para adicionar uma classe;
    "classList.remove" para remover uma classe;
 */

    function clicou() {
        const button = document.querySelector('button');

        button.classList.add('green');
        
    }

// adicionando e removendo entre 'verde' e 'azul';

    function clicou() {
        const button = document.querySelector('button');

        if (button.classList.contains('blue')) {
            button.classList.remove('blue');
            button.classList.add('green')
        } else {
            button.classList.add('blue');
            button.classList.remove('grenn');
        }      
    }

// Forma resumida de adicionar e remover uma classe usando "toggle";

    function clicou() {
        const button = document.querySelector('button');

        button.classList.toggle('azul')     
    }

// "replace" usadado para subtituir uma classe;

    function clicou() {
        const button = document.querySelector('button');

        button.classList.replace('azul', 'yellow')     
    }

// "replace" usadado para subtituir uma classe;

    function clicou() {
        const button = document.querySelector('button');

        if (button.classList.contains('azul'))
        button.classList.replace('azul', 'yellow')     
    }