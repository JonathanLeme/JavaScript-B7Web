/* 
".children" é usado para saber os elementos 'filhos que há dentro do elemento. Por exemplo: 

    <div id="teste1">
        <ul>  => ** elemento filho de 'teste' ** <=
            <li>Algum item 01</li>  => ** elemento filho de 'ul' ** <=
            <li>Algum item 02</li>  => ** elemento filho de 'ul' ** <=
        </ul>
        <strong>Testando 1,2,3...</strong> => ** elemento filho de 'teste' ** <=
    </div>
*/

// "function" para buscar os filhos de 'teste'

/* 
    function clicou() {
        const teste = document.querySelector('#teste1');
        console.log(teste.children);
    }  
*/

// "function" para buscar os filhos de 'ul'

/* 
    function clicou() {
        const teste = document.querySelector('#teste1');
        console.log(teste.children[0].children);
    }  
*/

// "function" para alterar 1 elemento "innerHTML".

/* 
    function clicou() {
        const teste = document.querySelector('#teste1');
        const ul = teste.querySelector('ul');

        ul.children[0].innerHTML = "<li>Item Alterado</li>"
    }  
*/

// "function" para adicionar elementos "innerHTML".

/* 
    function clicou() {
        const teste = document.querySelector('#teste1');
        const ul = teste.querySelector('ul');

        ul.innerHTML = ul.innerHTML + "<li>Item <strong>Adicionado</strong></li>"
    }  
*/

// "function" para alterar um conjunto de elmento inteiro "outerHTML".


    function clicou() {
        const teste = document.querySelector('#teste1');
        const ul = teste.querySelector('ul');

        ul.outerHTML = "<strong>Alterado!</strong></li>";
    }  


