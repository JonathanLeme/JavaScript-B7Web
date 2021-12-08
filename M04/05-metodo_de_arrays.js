let lista = [45, 4, 9, 16, 25];
let lista2 = [];


lista2 = lista.findIndex(function(item) {
    return(item == 16) ? true : false;
});

let res = lista2;

console.log(res);

/* 

Função de string apresentadas:

"lista.toString()" Transforma o array e um String; 

"lista.join('')" 

"lista.indexOf('')" Retorna a posição exata de um item em um array. Se der -1 quer dizer que não existe;

"lista.concat(lista2)" Junta duas listas de array;

*** Os itens a seguir alteram o array. Por isso é escrito da seguinte forma:

        lista.push('Prato');

        let res = lista;

        console.log(res);

"lista.shift()" Remove o primeiro item da lista; OBS: É utilizado sozinho. 

"lista.pop()" Remove o último item da lista; OBS: É utilizado sozinho.

"lista.push()" Adiciona um item na lista array; OBS: É utilizado sozinho.

"lista[Posição a ser alterado] = 'Valor que deseja alterar'" Se adicionar em uma posição que não existe, será adicionado.

"lista.splice(X, Y)" Remove um item do array, sendo que X é a posição do item e Y é a quantida de item a ser removida a partir da posição X esscolhida;

"lista.sort()" Coloca a lista array em ordem alfabética crescente. Caso queira decrescente add "lista.reverse()";

"lista.reverse()" Inverte a lista array do jeito que mesma está apresentada;

***

        "map"

        let lista1 = [45, 4, 9, 16, 25];
        let lista2 = [];


        lista2 = lista.map(function(item) {
            return item * 2;

        });

        let res = lista2;

        console.log(res); 
        
        >>> Cria a lista2 multiplicando a lista1

***

        "filter"

        let lista = [45, 4, 9, 16, 25];
        let lista2 = [];


        lista2 = lista.filter(function(item) {
            if(item < 20) {
                return true;
            } else{
                return false;
            }
        });

        let res = lista2;

        console.log(res);

        >>> Cria a lista2 filtrando o "if" proposto.

***

        "every"

        let lista = [45, 4, 9, 16, 25];
        let lista2 = [];


        lista2 = lista.every(function(item) {
            if(item < 20) {
                return true;
            } else{
                return false;
            }
        });

        let res = lista2;

        console.log(res);

***

        "some"

        let lista = [45, 4, 9, 16, 25];
        let lista2 = [];


        lista2 = lista.same(function(item) {
            if(item < 20) {
                return true;
            } else{
                return false;
            }
        });

        let res = lista2;

        console.log(res);

***

Forma comprimida: return (item > 30)? true : false;


*/