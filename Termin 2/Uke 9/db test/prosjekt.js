//HTML-elementer
const main = document.querySelector("main");

//Database
const db = firebase.database();
const prosjekter = db.ref("portfolio/prosjekter")

//Innhold til main
  function visProsjekt(snap) {
    const key = snap.key;
    const prosjekt = snap.val();

    const bilder = prosjekt.bilder;
    const index = prosjekt.forsidebilde;

    main.innerHTML +=`
    <article>
      <h1>${prosjekt.tittel}</h1>
      <p>${prosjekt.beskrivelse}</p>
    </article>
  `;
}
//Event Listener
prosjekter.on("child_added", visProsjekt)
