let nome = 'Jonathan Leme da Rocha';

let resultado = nome.substr(-5, 5);

console.log(resultado);

/* 

Função de string apresentadas:

"nome.slice(0, 10 ...)" - Retorna correspondente ao valor que colocar. Pode ser usado número negativo, porém ela vai pegar do fim para início.

"nome.substring(0, 10)"" - Retorna correspondente ao valor que colocar. Não funciona com número negativo.

"nome.substr(0, 10)" - O primeiro número será a posição inicial. O segundo número a quantida de caracteres que você que que ele busque. E ele funciona com negativos também. ;)

90% das vezes o "substr" vai te atender.


*/