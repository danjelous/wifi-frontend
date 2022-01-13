// Eigenes Modul importieren
const myModule = require('./myModule');

// ... Und damit etwas machen 
console.log(myModule);
myModule.init();

// Kann das Modul auch erweitern, sollte ich aber nicht (Gleiche Thematik wie bei globals)
myModule.extra = "Zusätzlicher Content!";