let main = document.querySelector("main");

let db = firebase.database();
let varer = db.ref("øve_1/varer");
let skjorter = db.ref("øve_1/varer/skjorter");

function visVarer(snapshot){
  let vare = snap.val();

  main.innerHTML+=`
    <article>
      <h1>${vare.modell} ${vare.merke}</h1>
      <p>${vare.pris}</p>
      <img src="Bilder/${vare.bilde}">
    </article>
  `;
}

function visSkjorter(){
  main.InnerHTML="";
  skjorter.on("child_added", visVarer);
}
