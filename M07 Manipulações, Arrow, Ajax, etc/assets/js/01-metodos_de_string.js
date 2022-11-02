let nome = 'Jonathan Leme da Rocha'

let resultado = nome.replace('da Rocha', 'Lopes da Rocha');

console.log(resultado)

// METÓDO DE STRING AULA 01

/* 
    "?.length" para saber quantos caracteres têm na 'string';

    --

    "?.indexOf('?')" serve para encontrar uma palavra/letra e posição que ela se encontra. Caso não exista, retornará '-1';
*/

// METÓDO DE STRING AULA 02

/* 
    "?.slice(1°, 2°)" serve para você pegar parte ou toda a string. Ela usa 2 parâmetros; 

    1° - serve para indicar de que posição quer começar a extrair a 'string'. Lembrando que caso queira pegar a 'string' completa não é necessário colocar o 2° parâmetro. Uma 'string' sempre começa da posição zero.

    2° - serve para indicar até que posição quer extrair a 'string'.

    "?.slice(-1°, -2°)" pode ser extraido com número negativo. Quando usamos números negativos ele vai começar a extrai pelo fim da 'strinG'.

    --
 
    "?.substring(1°, 2°)" a única diferença para o 'slice' é que 'substring' não funciona com números negativos;

    --
 
    "?.substr(1°, 2°)" a diferença para 'slice' e 'substring' é:

    1° parâmetro defini a posição inicial; e o
    
    2° parâmetro defini quantos caracteres você quer que ele extraia.

    "substr" funciona com números negativos

    OBS: teacher indica que "substr" é o suficiente para fazer o trabalho do 'slice' e 'substring'.
 */

// METÓDO DE STRING AULA 03

/* 
    "?.replace(1°, 2°)" serve para substituir uma 'string'

    1° parâmetro - procure por 'X';

    2° parâmetro - substitua por 'Y'.
    
    --

    "?.toUpperCase()" para coloca a 'string' toda em 'MAIÚSCULA';

    "?.toLowerCase()" para coloca a 'string' toda em 'minúscula';

    --

    "?.concat()" para concaterna
 
    --   

    "?.trim()" serve para eliminar/remover espaços inúteis em uma 'string'.

    --

    "?.charAt(?)" para descobrir o que tem na posição determinada. 

    --

    "?.split('?')" transforma uma string em um 'array'
*/   

