let cores = ['Black', 'White', 'Blue', 'Red'];

cores.push('Green');

/* 
    1° Forma    

    for (let n = 0; n < cores.length; n++) {
        console.log(cores[n]);
    } 

    2° Forma

    for (let i in cores) {
        console.log(cores[i]);
    } 

    3° Forma

    for (let cor of cores) {
        console.log(cor);
    }
*/

for (let cor of cores) {
    console.log(cor);
}