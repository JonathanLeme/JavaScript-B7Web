let fruits = ['Banana', 'Laranja', 'Maçã', 'Pêra', 'Uva'];

/* 
    // "filter" usado para filtrar. Ele gera uma novo 'array' deve se salva em um outra váriavel. No exemplo abaixo usamos 'bigFruits'.

    let bigFruits = fruits.filter((value) => {
        return value.length > 4
    });

    OR

    let bigFruits = fruits.filter((value) => value.length > 4 );

    console.log(bigFruits); 
*/

/* 
    // "every" assim como "filter" ele gera um novo 'array' deve se salva em uma outra váriavel. No exemplo abaixo usamos 'everyFruits'.

    let everyFruits = fruits.every((value) => {
        return value.length > 3
    });

    if (everyFruits) {
        console.log('Todos os itens são maiores que 3');
    } else {
        console.log('Nem todos os itens são maiores que 3');
    }
*/

/*
    // "some" assim como "filter and every" ele gera um novo 'array' deve se salva em uma outra váriavel. No exemplo abaixo usamos 'everyFruits'.

    let everyFruits = fruits.some((value) => {
        return value.length > 3
    });

    if (everyFruits) {
        console.log('Algum dos itens são maiores que 3');
    } else {
        console.log('Nenhum dos itens são maiores que 3');
    } 
*/

// "includes" é usado para saber se há algo dentro de uma lista 'array'.

fruits.pop()

if (fruits.includes('Uva')) {
    console.log('Tem Uva sim.')
} else {
    console.log('Não tem uva...')
}
