let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false, 
    ligar: function() {
        this.ligado = true;
        console.log("VRUM VRUM!");
    }, 
    acelerar:function() {
        if(this.ligado == true) {
        console.log("Rooooooooooom");
        } else {
            console.log(this.nome+" "+this.modelo+" não esá ligado!");
        }
    }
};

console.log( "Modelo: "+carro.modelo );

carro.ligar();
carro.acelerar();

/* 

Como acessar no console?

console.log( carro.nome ); (RECOMENDADO)
console.log( carro['nome'] );

***

Diferença de Array e Objeto:

Array - é uma listagem numerada e o símbolo usado é [];
Objeto - é uma listagem nomeada e o símbolo usado é {};

***

Podemos também criar objetos dentro de um array. Exemplo:

let carros = [
    {nome:'Fiat', modelo:'Palio'};
    {nome:'Fiat', modelo:'Uno'};
    {nome:'Toyota', modelo:'Corolla'};
    {nome:'Ferrari', modelo:'Spider'};
];

Como acessar por exemplo o modelo 'Corolla' no console?

1° forma: console.log(carros[2].modelo); (RECOMENDADO)
2° forma: console.log(carros[2]['modelo']); 

*/