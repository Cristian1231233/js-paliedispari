


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
let numPc = randomPc(1, 5);
console.log('numero Pc', numPc);

function randomPc(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let somma = sommareNumeri('somma', numUtente, numPc);
// console.log('somma', somma);

function sommareNumeri(operatore, num1, num2){
      switch(operatore){
      case 'somma':
      return num1 + num2;
    }
}

let pariDisp = pariODispari(somma);
console.log(pariDisp);

function pariODispari(somma){
    if(somma % 2 === 0){
        return 'pari'
    }else{
        return 'dispari'
    }
}
if(parolaUtente === pariDisp){
    console.log('Hai vinto');
}else{
    console.log('Hai perso');
}


// es parolaPalindroma
const parolaInserita = 'anna';
console.log(parolaInserita);

if(isPalindroma(parolaInserita)){
    console.log('la parola è palindroma');
}else{
    console.log('la parola non è palindroma');
}

function isPalindroma(parola){
    // giro la parola
    let parolaGirata = '';
    for( let i = parola.length - 1; i >= 0; i--){
          parolaGirata += parola[i];
          console.log(parolaGirata);
    }
    if(parolaGirata === parolaInserita) return true;
    return false;
}



// function randomPc(){

//     let numPc = Math.floor(Math.random()*5)+1;
    
//     return numPc;
// }

// sommiamo i due numeri
// stabiliamo se la somma è pari o dispari

// let somma = sommareNumeri();

// function sommareNumeri(){
// let sommaNum = numUtente + variable;
// console.log(sommaNum);
// if(!(sommaNum % 2)){
//     console.log('la somma è pari');
// }else{
//     console.log('la somma è dispari');
// }
// return sommaNum
// }

// dichiariamo chi ha vinto
// 
// if(somma === parolaUtente){
//     console.log('hai vinto');
// }else{
//     console.log('hai perso');
// }
