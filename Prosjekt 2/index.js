
//Database-Elementer
  const database = firebase.database();
  const rabatter = database.ref("Dyrebakken/Rabatter");
  const varer = database.ref("Dyrebakken/Varer");

//HTML-Elementer
  const main = document.querySelector("main");

//Legger innhold til main
  function visVare(snap) {
    const key = snap.key;
    const vare = snap.val();

    const bilder = vare.bilder;
    const index = Math.floor(Math.random() * 5);
    const rabatt = Math.floor(Math.random() * 16)/20;
    const rabattIProsent = (1-rabatt)*100
    const pris = `${vare.Pris}`*rabatt;

    main.innerHTML +=`
      <article class="productArticle">
        <h1>${vare.Navn}</h1>
        <img class="productImage" src="${vare.Bilder[index]}">
        <p>${pris} NOK, det er en ${rabattIProsent}% rabatt</p>
      </article>
    `;
}

//Event-Listeners
varer.on("child_added", visVare)
