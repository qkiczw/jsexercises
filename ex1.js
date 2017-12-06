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


// Operacje na stringach

var simpleString = 'Hello World';

console.log(simpleString);
console.log('Długość tego stringu to: ' + simpleString.length);
console.log('Cięcie od 0 do 5 znaku daje ' + simpleString.slice(0, 5));
console.log('Cięcie od 6 do 11 znaku daje ' + simpleString.slice(6, 11));
console.log('Zamiast Hello jest ' + simpleString.replace( 'Hello', 'Hell'));
console.log('Zamiast World będzie ' + simpleString.replace('World', 'Łukasz'));
console.log('I zmiana na duże ' + simpleString.toUpperCase());
console.log(simpleString.split(' ')); // zmiana stringa na tablice podzielonych wyrazów

var simpleStringArray = simpleString.split(' ');

console.log(simpleStringArray[1]);
console.log(simpleStringArray[0].charAt(0).toUpperCase() + '.' + simpleStringArray[1].charAt(0).toUpperCase());

var anotherSipleString = '    To jest string z whitespaceami    ';

console.log(anotherSipleString);
console.log('A to jest ten strng bez whitespaceów: ' + anotherSipleString.trim());

// Zabawa z Math
var randomNumber = Math.random();

console.log('Losowa liczba od 0 do 1: ' + randomNumber);
console.log('Losowa liczba od 0 do 10: ' + randomNumber * 10);

randomNumber = Math.random() * 10;
console.log('Losowa licza od 0 do 10 zaokrąglona:' + Math.ceil(randomNumber));

var number = 10;
console.log('number: ' + number);
number += 10;
console.log('number: ' + number);
number-=5;
console.log('number: ' + number);
number *=2;
console.log('number: ' + number);
number /=3;
console.log('numer: ' + number);