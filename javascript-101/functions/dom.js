// Leeres array initialisieren
let array = ["R", "E", "S", "P", "E", "C", "T"];

// Zweites array um methoden wie concat zu testen
const arrayToAdd = ["add", "other", "stuff"]

// HTML setzen
updateHTML(array)

function addValueToArray() {
  // Alt
  // document.getElementBy...

  // Neu
  // const res = document.querySelector("h1") // Get by tag
  // const res = document.querySelector(".button") // Get by class
  const res = document.querySelector("#addInput") // Get by id

  // Zu array hinzufügen
  array.push(res.value);
  console.log(array)

  // HTML aktualisieren
  updateHTML(array)

  // Wert zurücksetzen
  res.value = '';
}

function concatArrays() {
  array = array.concat(arrayToAdd);
  updateHTML(array);
}

function reverseArray() {
  // Ändert order von erst zu letzt usw.
  array.reverse();
  updateHTML(array);
}

function joinArray() {
  const delimiter = " "
  console.log(array.join(delimiter));
  array.spl
}

function updateHTML(html) {
  document.querySelector("#arrayToUpdate").innerHTML = html;
}