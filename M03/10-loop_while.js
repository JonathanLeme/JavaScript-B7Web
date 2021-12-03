let html = '';

let c = 1;

while(c <= 10) {
    html += "Número: " +c+ "<br/>";
    c++;
}

/* Perceba abaixo que no "for" a linha de código a menor, porém vai fazer a mesma coisa que no "while." */

for(let c = 1; c <= 10; c++) {
    html += "Número: " +c+ "<br/>";
}

document.getElementById('demo').innerHTML = html;