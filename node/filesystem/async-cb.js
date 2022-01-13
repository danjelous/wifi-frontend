// Node-internes Filesystem modul laden
const { readFile } = require("fs");

// Path-Modul für Navigation im Filesystem
const path = require("path");

/**
 * __dirname zeigt auf den Folder bzw. gibt den aboluten Pfad dorthin an, 
 * in dem das Skript befindet. In unserem Fall möchten wir den Pfad dorthin 
 * und in diesem Folder das File "hello.txt" lesen.
 */
const location = path.join(__dirname, "hello.txt");

/**
 * Im Callback sind zwei Parameter, ein (potentielles) Error-Objekt
 * und das tatsächliche Ergebnis des readFile-Aufrufs
 */
readFile(location, { encoding: "utf8" }, (err, data) => {
  /**
   * "Node.js Classic" - Bei einem Fehler die Programmausführung abbrechen
   * 
   * Besser/Schöner: Korrekte Fehlerbehandlung: Was genau sagt der error?
   * Kann ich ihn ignorieren? Wie kann ich ihn (programmatisch) beheben? 
   */
  if (err) throw err;

  // Ab hier können wir annehmen dass das file erfolgreich eingelesen wurde
  console.log(data);
});

console.log("This needs to be ASAP!");