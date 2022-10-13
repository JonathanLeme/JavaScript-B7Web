/* 
    let personagem = {
        nome: 'Jonathan',
        idade: 36,
        pais: 'Brasil',
        olhos: ['preto', 'azul'],
        caracteristicas: {
            forca: 20,
            magia: 5,
            stamina: 15,
            rola: '20cm' // kkkkk.... só que não
        }
    }

    // Acessando e Alterando

    personagem.nome = 'Pedro';
    personagem.caracteristicas.forca += 5;
    personagem.olhos.push('verde'); 
*/

let personagem = {
    nome: 'Jonathan',
    idade: 36,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(personagem.carros[1].cor)


