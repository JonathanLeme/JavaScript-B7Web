function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
}

/* 

Outra forma: 

function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0';
    } else {
        menuArea.style.width = '200px';
    }
}

OBS: Precisa retirar 

    .menu-opened {
        width: 200px !important;
    }

do CSS que faz parte do function acima.

*/