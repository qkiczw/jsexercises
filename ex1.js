var a = 5,
    b = 4,
    c = 3;

var wynik = a + b + c;
var reszta = wynik%a;

console.log('Wynik dodawania to: ' + wynik);
console.log('Reszta z dzielenia to:' + reszta);

if (a > b){
    console.log('A jest większe od B');
}
else {
    console.log('A jest równe lub mniejsze od B');
}


function dzialanie(a,c) {
    return a+c;

}

console.log('Wynik działania funkcji: ' + dzialanie(a,c));