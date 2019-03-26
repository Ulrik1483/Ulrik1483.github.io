
//Database-Elementer
  const database = firebase.database();
  const varer = database.ref("Dyrebakken/Varer");

//HTML-Elementer
  const display = document.querySelector(".display");

//Legger innhold til main
  function visVare(snap) {
    const key = snap.key;
    const vare = snap.val();

    const index = Math.floor(Math.random() * 5);
    const rabatt = 1-(Math.floor(Math.random() * 15)/20);
    const orginalPris = `${vare.Pris}`
    const prisDecider = `${vare.Pris}`*rabatt;
    const pris = Math.round(prisDecider);


//Ignorer produkter uten rabatt
  if (orginalPris == pris){
    orginalPris = "";
  }


    display.innerHTML +=`
      <section class="productSection">
        <h1>${vare.Navn}</h1>
        <img src="${vare.Bilder[index]}">
        <section><p class="strikeThrough">${orginalPris}</p></section>
        <p class="nyPris">${pris} NOK</p>
        <a href="produkt.html?id=${key}">Se mer</a>
      </section>
    `;
}


//Event-Listeners
varer.limitToFirst(6).on("child_added", visVare)