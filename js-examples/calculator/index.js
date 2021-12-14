// Gebe bei Events nur die *Referenz* für eine Funktion, ich rufe sie nicht auf!
window.onload = setupEventListeners;

// Das funktioniert nicht, da ich die Funktion hier schon aufrufen würde!
// window.onload = setupEventListeners();

// HTMLElement für Anzeige
const display = document.querySelector(".display");

// Listener für alle Number's setzen
function setupEventListeners() {
  // Buttons holen
  let numbers = document.querySelectorAll('.number');

  // Listener für alle buttons setzen
  for (let number of numbers) {
    // Variante mit "Inline Function"; für kurze Funktionen
    // number.addEventListener("click", function (e) { console.log(e.target.innerText) })
    // number.addEventListener("click", e => console.log(e.target.innerText)) // Arrow version

    // Referenz auf Funktion 
    number.addEventListener("click", onNumberClick);
  }

  // Gleiches für Operatoren
  let operators = document.querySelectorAll('.operator');
  for (let op of operators) {
    op.addEventListener("click", onOperatorClick);
  }

  // Evaluate ("=")
  const evaluate = document.querySelector(".evaluate");
  evaluate.addEventListener("click", evaluateDisplay)

  // Clear (AC)
  const allClear = document.querySelector('.all-clear');
  allClear.addEventListener("click", clearDisplay);
}

function onNumberClick(e) {
  // Geklickten "Wert" aus Event holen
  // const val = parseInt(e.target.innerText, 10) // Variante 1
  const val = +e.target.innerText; // Kürzere Variante 
  appendToDisplay(val);
}

function onOperatorClick(e) {
  const val = e.target.innerText;
  appendToDisplay(val);
}

function updateDisplay(val) {
  display.innerText = val;
}

function appendToDisplay(val) {
  display.innerText += val;
}

function evaluateDisplay() {
  // Eval is eval - nicht verwenden! Dieser Code wird so ausgeführt!!
  // eval("console.log('wuheueh')")
  // eval("alert('wuheueh')")

  // Für unser unbetuchtes Beispiel können wir eval aber *ausnahmsweise* verwenden...
  const res = eval(display.innerText);
  updateDisplay(res);
}

function clearDisplay() {
  updateDisplay("");
}