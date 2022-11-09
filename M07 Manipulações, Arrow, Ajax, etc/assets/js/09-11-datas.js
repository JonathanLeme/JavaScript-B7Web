// DATAS AULA 01

/* 
    "Apenas a variável '?'" retorna data, hora, completa. Ele puxa essa iformação do PC que está acessando;

   "?.toDateString()" retorna data, hora, resumida;

   "?.toUTCString()" retorna data, hora em GMT, sem fuso-horário;

   "d.toString()" mesmo como se tivesse colocado só a variável.
*/

/* 
    let d = new Date();

    console.log( d.toString() );
*/

// DATAS AULA 02

/* 
    "?.getFullYear()" retorna o ano atual;  

    "?.getMonth()" retorna o mês. Lembre-se o mês começa no '0' = Janeiro;

    "?.getDay()" retorna o dia da semana. Lembre-se a seman começa no '0' = domingo;

    "?.getDate();" retorna o dia;

    "?.getHours()" retorna as horas;

    "?.getMinutes()" retorna os minutos;

    "?.getSeconds()" retorna os segundos;

    "?.getMilliseconds()" retorna os mili-segundos;

    "?.getTime()" retorna a quantidade mili-segundos desde 1970 até a data atual;
*/

/* 
    let d = new Date();

    let novoValor = d.getTime();

    console.log( novoValor );
*/

// DATAS AULA 03

/* 
    Diferente da AULA 02 que usamos 'get' para pegar/retorna, aqui usamos 'set' para 'colocar/determinar' uma data, hora, minutos e etc. A lista é a mesma da aula anterior. Apenas trocamos 'get' por 'set'. 
    
    O código "d.setDate( d.getDate() + 1 )" é um exmplo de como trablhar 'set' e 'get' juntos.
*/

let d = new Date();

d.setDate( d.getDate() + 1 );

let novoValor = d;

console.log( novoValor );