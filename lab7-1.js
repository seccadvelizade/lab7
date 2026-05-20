function button(){
    netice.textContent = input.value;
} 
function hesabla(emel){
    let a = Number(reqem1.value);
    let b = Number(reqem2.value);
    if (emel === '+'){
        netice2.textContent = a + b;
    }
    else{
        netice2.textContent = a - b;
    }
}
let say=0;
function artir(){
    say++;
    document.getElementById('say').textContent = say;
}
function azalt(){
    say--;
    document.getElementById('say').textContent = say;
}
function factorial(){
    if(n===0 || n===1)return 1;
    return n*factorial(n-1);
}
console.log(factorial(3));
