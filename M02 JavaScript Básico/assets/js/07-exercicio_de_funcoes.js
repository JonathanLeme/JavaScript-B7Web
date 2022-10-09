/* 
    Calcule a porcentagem entre 2 números.
    Exemplo: 25% de 40 é 10

    Fórmula da porcentagem: (y / x) * 100

    Uso da função:

    let x = 40;
    let y = 10;
    let pct = calcPct(x, y);
    console.log(`${pct}% de ${x} é ${10}`);
*/

/* 
    * 1° Forma da "function":

    function calcPct(x, y) {
        let pct = (y / x) * 100;
        return pct;
    }
*/

// * 2° Forma da "function":

function calcPct(x, y) {
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

