for(var i = 0; i < 10; i++){
    console.log('Liczba: ' + i);
}

for(var i = 10; i > 0 ; i--){
    console.log(i);
}


var week = ['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota', 'niedziela'];

for(var i = 0; i <= week.length; i++){
    console.log(week[i]);
}


const person = {
    name: 'Lukasz',
    lastName: 'Sztomowski',
    age: 35,
    sex: 'male',

}

for(attribute in person){
    console.log(person[attribute]);
}

var ford = {
    model: 'focus',
    year: 2004,
    color: 'silvet',
    fuel: 'diesel',
};

for(attribute in ford){
    console.log(ford[attribute]);
}