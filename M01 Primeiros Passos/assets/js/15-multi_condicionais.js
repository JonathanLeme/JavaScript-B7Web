let idade = 17;

/* 
    * Forma normal de usar duas consições:

    if (idade >= 18) {
        if (idade < 60) {
            console.log("Você é um adulto.")
        }
    }
*/

/* 
    * Outra forma de fazer usando apena um "if" 
    - "&&" = e (as 'duas' condições têm que estar satisfeitas para o código funcionar.)
    - "||" = ou (apenas 'uma' das condições precisa estar satisfeita para o código funcionar.)
*/


if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.")
}

