
/** ----------------
 * ---- Übung 1
 * ----------------- */

function isValidPassword(password, username) {
  // Kriterium 0: Check ob beides strings sind
  if(typeof password !== "string" || typeof username !== "string") {
    // Mind. ein Argument kein string --> return false
    console.log(`password oder username kein string!`)
    return false;
  }

  // Hier wissen wir, dass beide Argumente vom Typ strings sind

  // Kriterium 1: Passwort muss mindestens 8 Zeichen lang sein
  // if(!password.length >= 8) { // Variante A, eher weniger 
  if(password.length <= 8) { // Variante B, besser
    // Passt nicht, zu kurz
    console.log(`Passwort zu kurz! Mindestens 8 Zeichen, bekam aber nur ${password.length}`)
    return false;
  }

  // Ab hier wissen wir auch, dass die Passwortlänge passt

  // Passwort darf keine Leerzeichen enthalten (Mehrere Varianten möglich)
  // if (password.indexOf(" ") !== -1 ) { // Variante 1
  // if (password.indexOf(" ") > -1 ) {   // Variante 2
  if (password.includes(" ")) {        // Variante 3
    // Ergebnis 0 oder höher (oder true bei includes), ein Leerzeichen ist vorhanden!
    console.log(`Dass Passwort darf keine Leerzeichen enthalten!`)
    return false;
  }

  // Ab hier wissen wir, dass das password keine Leerzeichen enthält

  // Kriterium 3: Der Username darf nicht im Passwort enthalten sein
  // if(password.includes(username)) {   // Variante 1
  if(password.indexOf(username) > -1) {  // Variante 2
    console.log(`Der username darf nicht im password enthalten sein!`)
    return false;
  }

  // Alle Kriterien sind erfüllt (liefern true zurück), Validierung erfolgreich
  return true;
}

let validPassword;
// validPassword = isValidPassword("8193jak!23", "dogLover"); // Erwartet: true, Ist: true
// validPassword = isValidPassword("123dogLover123!");  // Erwartet: false; Ist: false
// validPassword = isValidPassword("8193   jak!23");       // Erwartet: false; Ist: false
// validPassword = isValidPassword("abc", "mom");          // Erwartet: false; Ist: false
validPassword = isValidPassword("abcabcabc", "cab");       // Erwartet: false; Ist: false

console.log(validPassword)