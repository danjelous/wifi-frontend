
/**
 * Globales Runtime Objekt - wie "Window" im Browser, gibt es aber hier nicht,
 * da wir Serverseitig unterwegs sind. 
 */
 console.log(global)

 // Das global kann durch eigene Properties, Funktionen, etc. erweitert werden.
 global.myName = "Slim";
 global.myNameIs = "Shady";
 
 /**
  * !! Sollte es aber nicht - bad practice! Kann ungewünschte Side-Effects haben,
  * von anderen Programmierern / Librariers überschrieben werden etc. 
  * Genauso sind globale Variablen im "klassischen" JavaScript auch "böse" 😊
  */
 console.log(global.myName)
 console.log(global.myNameIs)