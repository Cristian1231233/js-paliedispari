


/////////

// l'utente sceglie pari o dispari

const parolaUtente = prompt('inserisci pari o dispari'); //prompt

// inserisce un numero da 1 a 5

let numUtente = parseInt(prompt('inserisci un numero tra 1 e 5'));
console.log('numero Utente', numUtente);

// generiamo un numero random per il pc
// let numPc = Math.floor(Math.random()*5)+1;
// console.log('numero Pc', numPc);

// generiamo un numero random per il pc usando una funzione
let variable = randomPc();
console.log('numero Pc', variable);

function randomPc(){

    let numPc = Math.floor(Math.random()*5)+1;
    
    return numPc;
}

// sommiamo i due numeri
// stabiliamo se la somma è pari o dispari

let somma = sommareNumeri();

function sommareNumeri(){
let sommaNum = numUtente + variable;
console.log(sommaNum);
if(!(sommaNum % 2)){
    console.log('la somma è pari');
}else{
    console.log('la somma è dispari');
}
return sommaNum
}

// dichiariamo chi ha vinto
// 
if(somma === parolaUtente){
    console.log('hai vinto');
}else{
    console.log('hai perso');
}
