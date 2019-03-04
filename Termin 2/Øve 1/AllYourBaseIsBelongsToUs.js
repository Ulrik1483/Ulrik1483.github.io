//HTML-elementer
let main = document.querySelector("main");
let navn = document.getElementById("navn");
let melding = document.getElementById("melding");
//Database
let db = firebase.database();
let brukere = db.ref("pokechat/brukere");
//HTML-funksjoner
function visMeldinger(snapshot){
  let bruker = snapshot.val();
  main.innerHTML +=`
  <article>
    <p>${bruker.navn}</p>
    <p>${bruker.melding}</p>
  </article>
  `;
}






//Event listener
brukere.on("child_added", visMeldinger);
