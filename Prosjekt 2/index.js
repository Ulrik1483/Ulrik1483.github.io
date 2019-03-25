
//Database-Elementer
  const database = firebase.database();
  const varer = database.ref("Dyrebakken/Varer");

//HTML-Elementer
  const main = document.querySelector("main");

//Legger innhold til main
  function visVare(snap) {
    const key = snap.key;
    const vare = snap.val();

    const index = Math.floor(Math.random() * 5);
    const rabatt = 1-Math.floor(Math.random() * 15)/20;
    const rabattIProsent = (1-rabatt)*100
    const pris = `${vare.Pris}`*rabatt;

    main.innerHTML +=`
      <article class="productArticle">
        <h1>${vare.Navn}</h1>
        <img class="productImage" src="${vare.Bilder[index]}">
        <p>${pris} NOK, det er en ${rabattIProsent}% rabatt</p>
        <a href="produkt.html?id=${key}">Kjøp</a>
      </article>
    `;
}

//Event-Listeners
varer.on("child_added", visVare)
