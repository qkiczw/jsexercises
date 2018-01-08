const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

var alertWindow = () => {
    alert('Kliknąłeś na button');
}

btn.addEventListener('mouseover', alertWindow, false);
btn2.addEventListener('click', alertWindow, false);
