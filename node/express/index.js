// Express-Modul (Das Framework) importieren
const express = require("express");

const fs = require("fs");
const path = require("path");

// Unsere app initialisieren
const app = express();

// Lange Variante
// app.get('/', (request, response) => {

// Kurze Variante
app.get('/', (req, res) => {
  /**
   * req: Request-Objekt; Einkommende Daten des Users/Browsers,
   *      wie Authentifizierung, Sprachsettings oder z.B. Daten aus einem Formular
   * 
   * res: Response-Objekt; Ausgehende Daten des Servers (von uns)
   */
  
  // HTML-File bei GET / senden
  const location = path.join(__dirname, 'index.html');
  fs.readFile(location, "utf8", (err, html) => {
    if(err) {
      console.log("Something went wrong..");

      // Bei Fehler Server-Status 500 zurückgeben
      res.status(500);
    }

    // Andernfalls das eingelesene HTML-File senden
    res.send(html);
  })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));