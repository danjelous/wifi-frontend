// Gebe bei Events nur die *Referenz* für eine Funktion, ich rufe sie nicht auf!
window.onload = setupEventListeners;

// Das funktioniert nicht, da ich die Funktion hier schon aufrufen würde!
// window.onload = setupEventListeners();

// Listener für alle Number's setzen
function setupEventListeners() {
  // Buttons holen
  let numbers = document.querySelectorAll('.number');

  // Listener für alle buttons setzen
  for (let number of numbers) {
    // number.addEventListener("click", function (e) { console.log(e.target.innerText) })
    // number.addEventListener("click", function (e) { console.log(e.target.innerText) })
    number.addEventListener("click", onNumberClick)
  }
}

function onNumberClick(e) {
  // Geklickten "Wert" aus Event holen
  // const val = parseInt(e.target.innerText, 10) // Variante 1
  const val = +e.target.innerText; // Kürzere Variante 
  console.log(val)
}