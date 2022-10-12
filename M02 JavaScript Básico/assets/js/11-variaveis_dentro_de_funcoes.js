// Váriavel "let" de escopo global;

let count = 0;

function add() {
    // Váriavel "let" de escopo local/privado
    // let count = 0;
    count++;
}

add();
add();

console.log(count);

/* 
    Quando criamos duas váriáveis, iguais, dentro e fora de "function", o código sempre vai dá preferência para a variável de escopo local/privado.
    Perceba que se tirar o comentário da variável dentro de "function", escopo local/privado, o resultado será "0" no console.
*/