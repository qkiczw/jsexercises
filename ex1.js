var a = 5,
    b = 4,
    c = 3;

var wynik = a + b + c;
var reszta = wynik%a;
var dzielenie = wynik / c;
var mnozenie = a * b *c;

console.log('Zmiene a:5, b:4 c:3');
console.log('Wynik dodawania to: ' + wynik);
console.log('Reszta z dzielenia to:' + reszta);
console.log('Wynik dzielenia zmiennej wynik przez zmienna c to: ' + dzielenie);
console.log('Wynik mnożenia trzech zmiennych to: ' + mnozenie);

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


var date = new Date();
var firstDay = date.getDay();


function day(){
    if (firstDay === 1) {
        console.log('Disiaj jest pierwszy dzień tygodnia');
    }
    else{
        console.log('Poniedziałek już za mną');
    }

}
console.log(day());

// Wyniki różnych działań

var a = 5,
    b = 5,
    c = 7,
    addition= a + b +c,
    substraction = c - b - a,
    multiplication = a * b,
    divide =  c/a,
    modulo = c%b;

console.log('Wynik dodawnia to: ' + addition);
console.log('Wynik odejmowania to: ' + substraction);
console.log('Wynik mnożenia to: ' + multiplication);
console.log('Wynik dzielenia to: ' + divide);
console.log('Wynik reszty z dzielenia to: ' + modulo);

// Działania z nawiasami

console.log(a + (b*c)); // Wynik 40
console.log((a * c) + (a * a)); //Wynik 60
console.log(4 * (a * b) + 100 + (c * b)); //Wynik  235

var simpleString = 'Hello World';

console.log(simpleString);
console.log('Długość tego stringu to: ' + simpleString.length);
console.log(simpleString.slice( ));