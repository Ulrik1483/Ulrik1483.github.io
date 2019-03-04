let main = document.querySelector("main");
let txt01 = document.getElementById("txt01");
let txt02 = document.getElementById("txt02");
let txt03 = document.getElementById("txt03");
let key = txt01;
let db = firebase.database();
let brukere = db.ref("base01");
function visBrukere(snap){
  let bruker = snap.val();
  main.innerHTML +=`
    <article>
      <h1>${bruker.egenskap01}</h1>
      <p>${bruker.egenskap02}</p>
      <p>${bruker.egenskap03}</p>
    </article>

  `;
}

function leggTilBrukere(){
  db.push(txt01).child(key);
  db.push(txt02).child(key);
  db.push(txt03).child(key);
}

brukere.on("child_added", visBrukere);
