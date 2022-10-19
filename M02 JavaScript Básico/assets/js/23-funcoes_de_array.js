let fruits = [
    'Maçã',
    'Uva',
    'Laranja',
    'Banana'
];

// ".push" é usada para inserir um item na lista/array;

fruits.push('Mamão');

// ".shift" é usado para remover o primeiro item da lista/array;

fruits.shift();

// ".pop" é usado para remover o último item da lista/array;

fruits.pop();

// "join" é usado para pegar seu array e colocar um separador qualquer entre eles. O mesmo não altera nada no array. Veja o exemplo no "console":

console.log(fruits.join(', '));

// Exemplo de como alterar um determinado "array"

fruits[2] = 'Pêra'

/* 
    Uma forma de alterar o último item do 'array' sem precisar saber quantos 'arrays' têm.

    fruits[fruits.length - 1] = 'Pêra';;

    OR

    fruits.pop();
    fruits.push('Pera');
*/

// ".length" é usada para contar quantos itens eu tenho no meu "array";

console.log(`Total de Frutas são: ${fruits.length}`);

console.log(fruits);


