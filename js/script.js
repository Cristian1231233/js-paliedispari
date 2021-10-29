

// chiedere all'utente di inserire una parola
// creare una funzione per capire se la parola è palindroma
/////////

// l'utente sceglie pari o dispari

const parolaUtente = 'pari'; //prompt

// inserisce un numero da 1 a 5

let numUtente = 3;
console.log('numero Utente', numUtente);

// generiamo un numero random per il pc
// let numPc = Math.floor(Math.random()*5)+1;
// console.log('numero Pc', numPc);

// generiamo un numero random per il pc usando una funzione
let variable = randomPc(numeroPc);
console.log(variable);

function randomPc(numeroPc){

    let numPc = Math.floor(Math.random()*5)+1;
    console.log('numero Pc', numPc);
    return numPc;
}

