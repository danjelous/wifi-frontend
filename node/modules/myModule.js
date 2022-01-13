/**
 * Oberer Bereich: Business-Logik meines Modul's
 * Meist Sammlung an Variablen und Funktionen
 */
const name = "Super Module";
const init = () => {
  console.log('Module initialised!');
}
const items = ["Banana", "Chips", "Beer"];

/**
 * Das soll nicht exportiert werden, beinhaltet Daten die nicht 
 * außerhalb des Modul's gelangen sollen
 * */ 
const hidden = "This should not be exported!";

// ES5-Variante
// module.exports = {
//   name: name,
//   init: init,
//   items: items,

//   // Variable "hidden" wird bewusst nicht exportiert!
// }

// ES-6 Variante
module.exports = {
  name,
  init,
  items,

  // Variable "hidden" wird bewusst nicht exportiert!
}