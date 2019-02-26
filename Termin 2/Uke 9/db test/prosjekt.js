//HTML-elementer
const main = document.querySelector("main")

//Database
const db = database.firebase();
const prosjekter = db.ref("portfolio/prosjekter");

//Innhold til main
function visProsjekt(snap) {
  const prosjekt = snap.val();
  main.innerHTML +=´
  <article>


  </article>



  ´;
}
