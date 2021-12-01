let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function() {
        console.log("VRUM VRUM!");
    }, 
    acelerar:function() {
        console.log("Rooooooooooom");
    }
};

console.log( "Modelo: "+carro.modelo );

carro.ligar();
carro.acelerar();

/* 

console.log( carro['nome'] );
console.log( carro.nome );

*/

/* 

Diferença de Array e Objeto:

Array - é uma listagem numerada e o síbolo usado é [];
Objeto - é uma listagem nomeada e o síbolo usado é {};

*/