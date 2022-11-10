// INTERVALOS AULA 01 - setInterval(?, ?)  

/* 
   "setInterval(showTime, 1000)" usado para colocar um time no html. Veja que foi constrido uma 'function' para 'showTime'.
*/

/* 
    function showTime() {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let txt = h+':'+m+':'+s;

        document.querySelector('.time').innerHTML = txt;
    }

    let timer;

    function start() {
        timer = setInterval(showTime, 1000);
    }

    function stop() {
        clearInterval(timer);
    }
*/

// INTERVALOS AULA 02 - setTimeout(?, ?)  

let timer;

function start() {
    timer = setTimeout(function() {
        document.querySelector('.time').innerHTML = 'Rodou!';
    }, 2000);
}

function stop() {
    clearTimeout(timer);
}


