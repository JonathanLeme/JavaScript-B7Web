let pessoa = {
    nome: 'Jonathan',
    sobrenome: 'Leme',
    idade: 36,

    nomeCOmpleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }

    /* 
    "Arrow Function" não tem acesso ao "this". Neste caso o código não funcionará.

    nomeCOmpleto: () => {
        return `${this.nome} ${this.sobrenome}`;
    } 
    */

}

console.log(pessoa.nomeCOmpleto())