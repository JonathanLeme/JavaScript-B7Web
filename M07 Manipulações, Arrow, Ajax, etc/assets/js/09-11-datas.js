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

let d = new Date();

let novoValor = d.getTime();

console.log( novoValor );
