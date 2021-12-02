/* 1° Forma: for loop */

let texto = '';

for(let i = 1; i <= 10; i++) {
    texto = texto + i + '<br>';
}

document.getElementById('demo').innerHTML = texto;

/* 2° Forma: for loop array */

let carros = [ 'Ferrari', 'Fusca', 'Palio', 'Corolla', 'Lamborghini'];

let html = '<ul>';

for(let i in carros) {
    html += '<li>'+ carros[i] +'</li>';
}

html += '<ul>';

document.getElementById('demo').innerHTML = html;

/* 

As duas formas não funcionam juntas. A 2° forma está prevalecendo.

*/