//Database
const db = firebase.database();
const prosjekter = db.ref("Prosjekt/prosjekter")


//Legger innhold til main
  function visProsjekt(snapshot) {
    const key = snap(key);
    const prosjekt = snap.val();

    main.innerHTML +=`
    <article>
      <h1>${prosjekter.tittel}</h1>
    </article>
    `;
}

//Event Listener
prosjekter.on("child_added", visProsjekt)
