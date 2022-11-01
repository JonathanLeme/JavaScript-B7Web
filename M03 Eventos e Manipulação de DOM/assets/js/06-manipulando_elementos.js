// "append" usado para adicionar/acrescentar textos sem alterar/substituir o já exitente.

/* 
    function clicou() {
        const teste = document.querySelector('#teste1');
        const ul = teste.querySelector('ul');

        ul.children[0].append(" (alterado)");
    }  
*/ 

// Adicionando um novo elemento com "innerHTML". Apaga todo o conteúdo e recoloca novamenta + o item adicional. Não é a melhor forma para adiconar algo.

    function clicou() {
        const teste = document.querySelector('#teste1');
        const ul = teste.querySelector('ul');

        ul.innerHTML += "<li>Algum item adicionado!</li>";
    } 

// Forma correta/efetiva de adicionar um novo elemento com "appendChild". O mesmo apenas acrescenta e não remove todo o conteúdo para recolacar como o "innerHTML".

    function clicou() {
        const teste = document.querySelector('#teste1');
        const ul = teste.querySelector('ul');

        let newLi = document.createElement("li");
        newLi.innerHTML = "Algum item adicionado!"

        ul.appendChild(newLi);
    }

/* 
    "prepend" é o inverso de 'appendChild'. 
    "appendCHild" ou apenas "append" adiciona no fim da lista;
    "prepend" adiciona no começo da lista.
*/

    function clicou() {
        const teste = document.querySelector('#teste1');
        const ul = teste.querySelector('ul');

        let newLi = document.createElement("li");
        newLi.innerHTML = "Algum item adicionado!"

        ul.prepend(newLi);
    }