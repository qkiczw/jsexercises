var randomNumber = Math.ceil(Math.random() * 10);
var player = prompt('Podaj liczbę od 1 do 3. Legenda: 1= papier, 2= nożyce, 3= kamień');

if (player > 3) {
    alert('Podałeś złą liczbę');
    player = prompt('Podaj liczbę od 1 do 3. Legenda: 1= papier, 2= nożyce, 3= kamień');

}


console.log('Komputer podał liczbę: ' + randomNumber);

console.log('Podałeś liczbę: ' + player);

if (player == 1 && randomNumber == 3) {
    console.log('Wygrałeś');

}
else if (player == 2 && randomNumber == 1) {
    console.log('Wygrałeś bitwę');
}
else if (player == 3 && randomNumber == 2) {
    console.log('Wygrałeś bitwę');
}
else {
    console.log("Komputer wygrał bitwę");
}







