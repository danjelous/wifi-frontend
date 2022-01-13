// Node-internes Filesystem modul laden
const { readFileSync } = require("fs");

// Path-Modul für Navigation im Filesystem
const path = require("path");

/**
 * __dirname zeigt auf den Folder bzw. gibt den aboluten Pfad dorthin an, 
 * in dem das Skript befindet. In unserem Fall möchten wir den Pfad dorthin 
 * und in diesem Folder das File "hello.txt" lesen.
 */
const location = path.join(__dirname, "hello.txt");

const txt = readFileSync(location, { encoding: "utf8" });

console.log(txt);
console.log("This needs to be ASAP!");