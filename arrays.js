var fruits = ['apple', 'banana', 'orange', 'lemon', 'apple'];

for(i = 0; i < fruits.length; i++) {
    console.log(i + ' ' + fruits[i].toUpperCase());
}

console.log(fruits[2]);
console.log(fruits.length);

console.log(fruits.indexOf(2)); // -1 because is not in array
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('lemon')); // 3

function lastIndexOfLemon() {
    return fruits.lastIndexOf('apple');

}
console.log(lastIndexOfLemon());


var randomNumbers = [1.22, 1.45, 3.44444, 6.66666];
console.log(randomNumbers);

randomNumbers = randomNumbers.map(Math.floor);
console.log(randomNumbers);

var getRandomNumbersMap = randomNumbers.map(function (i) {
    return i * 2;
});

console.log(randomNumbers);
console.log(getRandomNumbersMap);

var getBiggerNumbers = function (x) {
   return x > 4;


}





var words = ['salsa', 'horror', 'movie'];

var isThisWordHere = function (word) {
    return word === 'horror';

}

console.log(words.some(isThisWordHere));

var isThisNumberinArray = function (num) {
    return num >= 6;
}
console.log(randomNumbers.some(isThisNumberinArray));


var fishes = ['głupik','skalar', 'welonek', 'glonojad'];

fishes.forEach(function (fish){
    console.log(fish.toUpperCase() + ' to jest rybka');
})

fishes.push('miecznik');

for(i = 0; i < fishes.length; i++){
    console.log(fishes[i]);
}


var colors = ['red', 'green', 'blue'];
console.log(colors);

var removeColorfromColors = colors.shift();


console.log(removeColorfromColors);
console.log(colors);

colors.unshift('pink', 'white', 'yellow');
console.log(colors);

colors.pop();
console.log(colors);