var randomNumber = Math.floor(Math.random() * 3 + 1),
    player = prompt('Podaj liczbę od 1 do 3. Legenda: 1= papier, 2= nożyce, 3= kamień'),
    paper = 1,
    scissors = 2,
    stone = 3,
    winner = 'Wygrałeś bitwę!',
    loser = 'Przegrałeś bitwe';

if (player > 3) {
    alert('Podałeś złą liczbę');
    player = prompt('Podaj liczbę od 1 do 3. Legenda: 1= papier, 2= nożyce, 3= kamień');

}

if(randomNumber == paper){
    console.log('Komputer wybrał: papier');

}
else if(randomNumber == scissors){
    console.log('Komputer wybrał: nożyce');

}
else if(randomNumber == stone){
    console.log('Komputer wybrał: kamień');

}

if(player == paper){
    console.log('Gracz wybrał: papier');

}
else if(player == scissors){
    console.log('Gracz wybrał: nożyce');

}
else if(player == stone){
    console.log('Gracz wybrał: kamień');

}

if (player == 1 && randomNumber == 3) {
    console.log(winner);

}
else if (player == 2 && randomNumber == 1) {
    console.log(winner);
}
else if (player == 3 && randomNumber == 2) {
    console.log(winner);
}
else if (player == randomNumber){
    console.log('Nikt nie wygrał!')
}
else {
    console.log(loser);
}







