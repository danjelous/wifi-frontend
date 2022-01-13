// EventEmitter-Modul importieren
const { EventEmitter } = require("events");

// Neuen Emitter (Emit: Aussenden) erstellen
const myEmitter = new EventEmitter();

/**
 * Eigenen (Custom) EventListener mit Callback anlegen.
 * Wird das Event getriggerd ("fired"), wird das entsprechende
 * Callback (bzw. die Funktion) ausgeführt
 */
myEmitter.on("break", function () {
  console.log("Callback für Pause 1!")
});

// Arrow functin variante
myEmitter.on("break", () => {
  console.log("Callback für Pause 2!")
});

// Event triggern / emitten
myEmitter.emit("break");

// Kann beliebig oft geschehen
myEmitter.emit("break");