// funzione per capire se la parola inserita sia palindroma
function checkPalindroma(parola){
    let palindroma = parola.split('').reverse().join('');
    // se palindroma restituisco true
    if(palindroma.toLowerCase() === parola.toLowerCase()){
        return true;
    }
    // altrimenti restituisco false
    return false;
}

// input dell' utente
let word = prompt('inserire una parola')

// chiamo la funzione e l'assegno a check
let check = checkPalindroma(word);

// se e' true "stampo" che la parola e' palindroma
if(check){
    console.log("La parola e' palindroma")
}
// se e' false "stampo" che la parola non e' palindroma
else{
    console.log("La parola non e' palindroma")
}