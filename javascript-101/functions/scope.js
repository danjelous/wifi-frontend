// Zwei Funktionen mit "isoliertem Gültigkeitsberiech"   
function hi(func) {
  let msg = "Hi!";
  console.log(msg);
  func();
}

function goodBye() {
  let msg = "Goodbye!";
  console.log(msg);
}

// 
let msg = "I'm a variable!";

function hi() {
  msg = "I'm a function scoped variable!";
}

hi();
console.log(msg); 

// Gleiche funktion viermal unterschiedlich definiert - macht immer das Selbe!

// Function declaration
function add1(a, b) {
  return a + b;
}

// Function expression
const add2 = function (a, b) {
  return a + b;
}

// Arrow function (function keyword wird durch "=>"-Pfeil ersetzt)
const add3 = (a, b) => {
  return a, b
} 

// Wenn return nur in einer Zeile steht, kann ich geschwungene Klammern weglassen
const add4 = (a, b) => a + b; 