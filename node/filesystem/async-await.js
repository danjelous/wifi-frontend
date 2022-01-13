// Node-internes Filesystem modul laden
const { readFile } = require("fs").promises;

// Path-Modul für Navigation im Filesystem
const path = require("path");

/**
 * __dirname zeigt auf den Folder bzw. gibt den aboluten Pfad dorthin an, 
 * in dem das Skript befindet. In unserem Fall möchten wir den Pfad dorthin 
 * und in diesem Folder das File "hello.txt" lesen.
 */
const location = path.join(__dirname, "hello.txt");

// Helfer-Funktion für top-level await
const hello = async() => {
  // Await Callbacks vorziehen: besser lesbarer Code
  const txt = await readFile(location, { encoding: "utf8" });
  console.log(txt);
}

// Helfer-Funktion tatsächlich aufrufen
hello();
console.log("This needs to be ASAP!");