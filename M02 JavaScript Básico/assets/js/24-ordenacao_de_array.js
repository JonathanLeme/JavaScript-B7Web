/* 
    let fruits = ['Maçã', 'Uva', 'Laranja', 'Banana'];

    // "sort" é usado para coloca a ordem no 'array' em ordem alfabética (crescente).

    fruits.sort();

    // "reverse" é usado para colocar uma lista inversa. Caso queira usar uma lista decrescente deve-se usar 'sort' e 'reverse' em conjunto.

    fruits.reverse();

    console.log(fruits); 
*/

// Ordenação de 'objetos' dentro de um 'array'.

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

/* 
    cars.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            return 0;
        }       
    });

    OR

    cars.sort((a, b) => {
        return a.year - b.year      
    }); 
*/

// OR

cars.sort((a, b) => a.year - b.year);

console.log(cars);