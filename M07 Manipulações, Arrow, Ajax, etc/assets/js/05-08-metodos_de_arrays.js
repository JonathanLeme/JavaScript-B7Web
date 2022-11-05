// METÓDOS DE ARRAYS AULA 01

/* 
    "?.toString()" transforma um os 'arrays' em 'string';
    --

    "?.join('?')" transforma os 'array' em 'strings' separando-as conforma o parâmetro que indicar em ('?');
    --

    "?.indexOf('')" serve para encontrar uma palavra/letra e posição que ela se encontra. Caso não exista, retornará '-1';
*/

// METÓDOS DE ARRAYS AULA 02

/* 
    "?.splice(1°, 2°)" usado para remover arrays:

    1° parâmetro serve para definir apartir de que arrary você quer remover;

    2° parâmetro serve para definir quantos arrays você quer remover a partir do 1° parâmetro.
    --

    "?.concat(?)" serve para concaterna 2 lista arrays. No caso eu precisaria cria um 2° lista de array onde seria colocado entre (). 
    Exemplo: 'lista.concat(lista2)'. 
    --

    "?.sort()" usado para ordenar em ordem alfabética;
    --

    "?.reverse()" usado para reverte a lista de trás para frente.
*/

let lista = ['Farinha', 'Ovo', 'Leite', 'Fermento'];

let resultado1 = lista;

console.log(resultado1);

// METÓDOS DE ARRAYS AULA 03

// "map" usado para mapear item a item e gerar uma novo array. Veja no 'console' do navegador. ;)

let lista1 = [45, 4, 9, 16, 25];
let lista2 = []

lista2 = lista1.map(function(item) {
    return item * 2;
});

let resultado2 = lista2;

console.log(resultado2)

// "?.filter" usado para filtrar. Perceba no exemplo abaixo e no 'console'.

let lista3 = [45, 4, 9, 16, 25];
let lista4 = []

lista4 = lista3.filter(function(item) {
    if(item < 20) {
        return true;
    } else {
        return false;
    }
});

let resultado3 = lista4;

console.log(resultado3)

/* 
    "?.every" para retorna 'true' todos(every) tem que ser verdadeiro, caso contrário ele retornará 'false'.
    --

    "?.some" diferente de every aqui em some(alguns), se apenas um der verdadeiro, já e o suficiente para retornar 'true'.
    --
*/

let lista5 = [45, 4, 9, 16, 25];
let lista6 = []

// o código a seguir é forma resumida de fazer a mesma coisa com exemplo acima usado com 'filter'.

lista6 = lista5.some(function(item) {
    return (item < 20)? true : false
});

let resultado4 = lista6;

console.log(resultado4)

// METÓDOS DE ARRAYS AULA 04

// "?.find" usado para encontrar um item específico;

let lista7 = [45, 4, 9, 16, 25];
let lista8 = []

lista8 = lista7.find(function(item) {
    return (item == 16)? true : false ;
});

let resultado5 = lista8;

console.log(resultado5)

// "?.findIndex" usado para mostrar a posição da 'array' que o mesmo se encontra;

let lista9 = [45, 4, 9, 16, 25];
let lista10 = []

lista10 = lista9.findIndex(function(item) {
    return (item == 16)? true : false ;
});

let resultado6 = lista10;

console.log(resultado6)
