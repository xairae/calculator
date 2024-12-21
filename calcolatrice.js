const schermo = document.getElementById('schermo');
let calcolo = '';

function aggiungiValore(valore) {
  calcolo += valore;
  schermo.textContent = calcolo;
}

document.getElementById('cancella').addEventListener('click', () => {
  calcolo = '';
  schermo.textContent = '';
});

document.getElementById('uguale').addEventListener('click', () => {
  calcolo = eval(calcolo).toString();
  if(calcolo == "420"){
    calcolo = 'Funny number';
  }
  schermo.textContent = calcolo;
});

document.getElementById('divisione').addEventListener('click', () => aggiungiValore('/'));
document.getElementById('moltiplicazione').addEventListener('click', () => aggiungiValore('*'));
document.getElementById('sottrazione').addEventListener('click', () => aggiungiValore('-'));
document.getElementById('somma').addEventListener('click', () => aggiungiValore('+'));

document.getElementById('zero').addEventListener('click', () => aggiungiValore('0'));
document.getElementById('uno').addEventListener('click', () => aggiungiValore('1'));
document.getElementById('due').addEventListener('click', () => aggiungiValore('2'));
document.getElementById('tre').addEventListener('click', () => aggiungiValore('3'));
document.getElementById('quattro').addEventListener('click', () => aggiungiValore('4'));
document.getElementById('cinque').addEventListener('click', () => aggiungiValore('5'));
document.getElementById('sei').addEventListener('click', () => aggiungiValore('6'));
document.getElementById('sette').addEventListener('click', () => aggiungiValore('7'));
document.getElementById('otto').addEventListener('click', () => aggiungiValore('8'));
document.getElementById('nove').addEventListener('click', () => aggiungiValore('9'));
