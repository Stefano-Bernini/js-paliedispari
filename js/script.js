function checkPalindroma(parola){
    let palindroma = parola.split('').reverse().join('');
    if(palindroma.toLowerCase() === parola.toLowerCase()){
        return true;
    }

    return false;
}

let word = prompt('inserire una parola')

let check = checkPalindroma(word);

if(check){
    console.log("La parola e' palindroma")
}
else{
    console.log("La parola non e' palindroma")
}