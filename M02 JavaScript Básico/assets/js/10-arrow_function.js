/* 
    Forma Tradiconal de "function":

    function somar(x, y) {
        return x + y;
    } 
*/

// 1° Forma de "Arrow Function". Parametros [ () => {} ]

const somar = (x, y) => {
    return x + y;
}

/* 
    Quando há apenas uma linha de código pode ser feito conforme abaixo:

    const somar = (x, y) => x + y; 
*/

console.log(somar(10, 5));