/* 
    *Variável

    let nome = 'Jonathan' 

    *Array []

    let nomes = ['Jonathan', 'Raphael', 'Eduarda']
*/

// *Objetos {}

let personagem = {
    nome: 'Jonathan',
    idade: 36,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15,
        altura: '180cm' 
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos`)
console.log(`${personagem.nome} tem ${personagem.caracteristicas.altura} de altura.`)
console.log(`A cor do olhos esquerdo é: ${personagem.olhos[0]}`);