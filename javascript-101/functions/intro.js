// Funktionen und parameter
function divide(a, b) {
  // Prufen auf type number

  // Variante 1 - lieber nicht verwenden
  // !isNaN(a) && !isNaN(b)

  // Variante 2 - besser
  if (typeof a === "number" && typeof b === "number") {

    // Gib ergebnis von a / b zurück
    return a / b;

    // Wird nicht mehr ausgeführt, da return der "Schluss" der Funktion ist
    console.log("all done");
  } else {
    console.log(`Sorry, habe keine numbers bekommen, sondern ${typeof a} und ${typeof b}!`)
  }
}

// divide(); // Failed
// divide(null, null); // Failed
// divide(" ", " "); // "Funtkioniert"; sollte aber nicht --> Einbauen von numbers check

// divide(1, 0); // Infinity
// divide(1, "hello!"); // Fail, number und string
// divide(1, true); // Also fail

// Bekomme einen Rückgabewert, den ich mir in einer Variable speichern kann
let res = divide(10, 5); // Works, outputs 2
console.log(res) // 2