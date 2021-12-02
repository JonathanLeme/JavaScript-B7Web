let dia = 5;
let diaNome = '';

switch(dia) {
    case 6:
    case 7:
        diaNome = 'Final de Semana';
        break;
    default:
        diaNome = 'Dia de Semana';
        break;
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;