// initJS wird aufgerufen wenn das "onload"-Event des window's triggered 
// --> Wenn der Browser das ganze HTML file geladen hat.
window.onload = initJS;

function initJS() {
  // Listenanchor dynamisch erzeugen
  createListHeader();

  // EventListener für Links erzeugen
  initLinks();
}

function createListHeader() {
  // Überschrift für "Später lesen" Container erzeugen
  const heading = document.createElement("h2"); // Bekomme: <h2></h2>
  heading.innerHTML = "Sp&auml;ter lesen"; // Umlaute müssen kodiert werden

  // Initial verstecken; wenn mind. ein Link in der Liste ist anzeigen! 
  heading.style.visibility = "hidden";

  // HTML Element für Container "holen"
  // const container = document.getElementById("read-later") // Funktioniert auch!
  const container = document.querySelector("#readLater") // qS ist aber flexibler

  /**
   * In DOM "hängen"
   * append: als letztes Element hinzufügen
   * prepend: als erstes Element hinzufügen
   */
  container.prepend(heading)
}

function initLinks() {
  // Alle a-Tags selektieren
  const links = document.querySelectorAll("a");

  // Klassische for-Schleife
  // for (let i = 0; i < links.length; i++) {
  //   links[i].addEventListener("click", addLinkToList )
  // }

  // Etwas hübscher 🌹
  for (link of links) {
    // Funktionsaufruf mit (), hier falsch, funktioniert nicht wie gewollt!
    // link.addEventListener("click", (addLinkToList())) 

    // Referenz für späteren Aufruf der Funktion
    link.addEventListener("click", addLinkToList);
  }
}

function addLinkToList(e) {
  /**
   * e-Parameter:
   * Event-Objekt, PointerEvent bei "click": u.a. x/y Koordinaten von Click
   */

  // Standard-Verhalten unterbinden (bei Link: href-Wert nicht öffnen!)
  e.preventDefault();

  // Neues HTML Element mit geklicktem Link erzeugen
  const link = document.createElement("a");
  const target = e.srcElement.href;

  // Inneres HTML ("Text") auf das target (href) setzen
  link.innerHTML = target;

  // href Attribut setzen
  link.href = target
  // link.setAttribute("href", target) // Alternative

  // Liste mit Links; kann wie in CSS verschachtelt werden!
  const linkList = document.querySelector("#readLater ol");

  // <a> Tag geht in <ol>, brauche aber noch ein <li>
  const listItem = document.createElement("li");
  listItem.append(link) // <a> in <li> hängen

  // <li>-Element in tatsächliche Liste (ol) aufnehmen
  linkList.append(listItem);

  /**
   * Überschrift anzeigen
   * Zuerst checken ob sie schon sichtbar ist, ansonsten "visible" machen
   */
  const h2 = document.querySelector("#readLater h2")
  if (h2.style.visibility = "hidden") {
    h2.style.visibility = "visible";
  }
}
