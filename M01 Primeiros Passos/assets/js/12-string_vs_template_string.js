let nome = "Jonathan"
let sobrenome = "Leme"

/* 
    *String Normal -> let nomeCompleto = nome + ' ' + sobrenome
    *Perceba as diferenças na variável abaixo:
    *Usamos Template String com entre duas crases (``)
    *${} -> é chamadode expressão;
*/

let nomeCompleto = `${nome} ${sobrenome}`

console.log("Nome: " + nomeCompleto)