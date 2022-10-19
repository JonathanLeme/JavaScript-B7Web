//  1. Faça um loop que mostre todas as frutas.
let fruits = ['Maçã', 'Uva', 'Banana'];

/* 
    for (let i in fruits) {
        console.log(fruits[i]);
    }  
*/

// OR

for (let fruit of fruits) {
    console.log(fruit);
}

// 2. Conte de 1 até 100 através de um WHILE.

let numero = 1;

while (numero <= 100) {
    console.log(`Número ${numero}`);
    numero++;
}