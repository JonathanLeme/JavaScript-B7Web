function addSquares(a, b) {

    function square(x) {
        return x * x;
    }

/* 
    *Opinião do teacher - Quando precisar criar uma "function" dentro de outra, o mesmo prefere usar "Arrow Function" dentro de outra "function". Ficaria assim:

    const square = (x) => {
        return x * x;
    }

    ou

    const square = (x) => x * x;

*/

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));