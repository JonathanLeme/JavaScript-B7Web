function subirTela() {
    window.scrollTo(0,0);
}

/* O "behavior" que o professor fez na aula não funcionou. Verificar mudanças. */

function decidirBotaoScroll() {
    if(window.scrollY === 0) {
    document.querySelector('.scrollbutton').style.display = 'none';
} else {
    document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotaoScroll)

/* Não funcionou ocultar e aparecer. Verificar! */

document.querySelector('.texto').offsetHeight

/*  */

document.querySelector('.texto').offsetWidth

/*  */

document.querySelector('.texto').clientHeight

/*  */

document.querySelector('.texto').clientWidth

/*  */

document.querySelector('.texto').scrollHeight

/*  */

document.querySelector('.texto').scrollWidth

/*  */

document.querySelector('.texto').scrollTop

/*  */

document.querySelector('.texto').scrollLeft

/*  */

window.scrollY

/* Vertical tela inteira */

window.scrollX

/* Horizontal tela inteira */

document.querySelector('.texto').scrollTo();

/*  */

window.scrollTo();

/*  */



