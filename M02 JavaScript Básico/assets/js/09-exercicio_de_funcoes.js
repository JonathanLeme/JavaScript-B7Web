/* 
    Crie uma função que valide usuário e senha.
    - Usuário Correto: Pedro
    - Senha Correta: 123

    * Uso da função:

    let usuario = "Jonathan";
    let senha = 1234;

    let validacao = validar(usuario, senha);

    if (validacao) {
        console.log('Acesso Permitido');
    } else {
        console.log('Acesso NEGADO!');
    }
*/

// 1° Forma: If / Else

function validar(usuario, senha) {
    if (usuario === 'Pedro' && senha === 123) {
        return true;
    } else {
        return false;
    }        
}

/* 
    2° Forma: Condicional Ternária

    function validar(usuario, senha) {
        return usuario === 'Pedro' && senha === 123 ? true : false
    } 
*/

let usuario = "Jonathan";
let senha = 123;

let validacao = validar(usuario, senha);

if (validacao) {
    console.log('Acesso Permitido');
} else {
    console.log('Acesso NEGADO!');
}