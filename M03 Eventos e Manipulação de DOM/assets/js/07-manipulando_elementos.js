// "before" and "after" usado para adicionar texto/elemento 'antes' e 'depois'.

    function clicou() {
        const teste = document.querySelector('#teste1');
        const ul = teste.querySelector('ul');

        let newUl = document.createElement('ul');

        for (let i = 0; i < 5; i++) {
            let newLi = document.createElement('li');
            newLi.innerHTML = "Item add " + (i + 1);
            newUl.append(newLi);
        }

        ul.after(newUl);
    }  