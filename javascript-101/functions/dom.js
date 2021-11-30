// Leeres array initialisieren
const array = [1, 2, 3];

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

function updateHTML(html) {
  document.querySelector("#arrayToUpdate").innerHTML = html;
}