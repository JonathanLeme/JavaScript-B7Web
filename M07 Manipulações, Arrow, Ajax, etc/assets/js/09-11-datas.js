/* 
    "Apenas a variável '?'" retorna data, hora, completa. Ele puxa essa iformação do PC que está acessando;

   "?.toDateString()" retorna data, hora, resumida;

   "?.toUTCString()" retorna data, hora em GMT, sem fuso-horário;

   "d.toString()" mesmo como se tivesse colocado só a variável.
*/

let d = new Date();

console.log( d.toString() );