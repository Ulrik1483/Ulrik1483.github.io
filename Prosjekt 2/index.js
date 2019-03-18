
//Database-Elementer
  const database = firebase.database();
  const rabatter = database.ref("Dyrebakken/Rabatter")
  const varer = database.ref("Dyrebakken/Varer")

//HTML-Elementer
  const main = document.querySelector("main");

//Legger innhold til main
  function visVare(snap) {
    const key = snap.key;
    const vare = snap.val();

    const bilder = vare.bilder;
    const index = Math.floor(Math.random() * 5);
    const pris = `${vare.Pris}`*`${rabatter[0]}`;

    main.innerHTML +=`
      <article>
        <h1>${vare.Navn}</h1>
        <img src="${vare.Bilder[index]}">
        <p>${pris} NOK</p>
      </article>
    `;
}

//Event-Listeners
varer.on("child_added", visVare)
