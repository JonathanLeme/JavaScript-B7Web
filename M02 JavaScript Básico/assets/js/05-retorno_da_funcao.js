/* 
    function nomeCompleto(nome, sobrenome) {
        console.log(`${nome} ${sobrenome}`);
    }

    nomeCompleto("Jonathan", "Leme");
    nomeCompleto("Bonieky", "Lacerda");
*/

// Segue abaixo o mesmo código usando "return"

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("Jonathan", "Leme");
console.log('Nome Completo: ' + completo);