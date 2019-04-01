
//Database-Elementer
  const database = firebase.database();
  const dyrene = database.ref("Dyrebakken/Varer/Dyr/");
  const tingene = database.ref("Dyrebakken/Varer/Ting/");

//HTML-Elementer
  const display = document.querySelector(".display");

//Legger innhold til main
  function visVare(snap) {
    const key = snap.key;
    const vare = snap.val();

    let index = 4;                                           // Tilfeldig farge er teit - Math.floor(Math.random() * 5);
    let rabatt = 1-(Math.floor(Math.random() * 15)/20);
    let orginalPris = `${vare.Pris}`
    let prisDecider = `${vare.Pris}`*rabatt;
    let pris = Math.round(prisDecider);


  if (orginalPris == pris){
    pris *= 0.9;
  }


    display.innerHTML +=`
      <section class="productSection">
        <h1>${vare.Navn}</h1>
        <img src="${vare.Bilder[index]}">
        <p class="strikeThrough">Før ${orginalPris},-</p>
        <p class="nyPris">${pris},-</p>
        <a href="produkt.html?id=${key}&pris=${pris}" class="purchaseLink">Se mer</a>
      </section>
    `;
}


//Event-Listeners
dyrene.limitToFirst(3).on("child_added", visVare)
tingene.limitToFirst(3).on("child_added", visVare)
