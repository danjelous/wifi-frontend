// Asynchrone "Helfer"-Funktion um auf innere asynchrone Funktionen warten (await) zu können
async function main() {
  // Synchrone Ausführung
  console.log('1 - Zuerst komme ich')
  console.log('2 - Dann werde ich ausgeführt')

  const kitties = await fetchKitties();
  renderKitties(kitties);

  console.log('3 - Dann ganz normal ich')
}

// Asynchrone Funktion mit "async" gekennzeichnet
async function fetchKitties() {

  // Nächste Zeile wird auch ganz normal (synchron ausgeführt)
  console.log("In fetchKitties")

  /**
   * "await" kennzeichnet ein Ereignis auf das zu warten ist. Der Request wird abgeschickt und
   * im Hintergrund wird auf die Response gewartet. Damit unser ganzes JavaScript-File / Skript
   * bis dahin nicht blockiert, wird der folgende Teil der Funktion erst ausgeführt wenn 
   * die Response vorhanden ist.
   */
  const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=5");

  /**
   * Die Response selbst enthält keine Daten, mit der json()-Methode 
   * kann ich diese asynchron (await!) herausholen
   */
  const data = await response.json();
  return data;
}

function renderKitties(array) {
  console.log("In renderKitties")
  console.log(array)
}

// Main Funktion aufrufen
main();