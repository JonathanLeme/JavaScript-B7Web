let pessoa = {
    nome: 'Jonathan',
    sobrenome: 'Leme',
    idade: 36,
    social: {
        facebook: 'jonathanleme',
        instagram: '@jonathanleme'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
};

let { nome, sobrenome, idade = 0 } = pessoa;

console.log(nomeCompleto);