
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

    let index = 4;

    let pris = `${vare.Pris}`

    display.innerHTML +=`
      <section class="productSection">
        <h1>${vare.Navn}</h1>
        <img src="${vare.Bilder[index]}">
        <p class="nyPris" id="egPris">${pris},-</p>
        <a href="produkt.html?id=${key}&pris=${pris}" class="purchaseLink">Se mer</a>
      </section>
    `;
  }

function visDyrNavn(){
  display.innerHTML = "";
  dyrene.on("child_added", visVare);
}
function visDyrPris(){
  display.innerHTML = "";
  dyrene.orderByChild("Pris").on("child_added", visVare);
}
function visTingNavn(){
  display.innerHTML = "";
  tingene.on("child_added", visVare);
}
function visTingPris(){
  display.innerHTML = "";
  tingene.orderByChild("Pris").on("child_added", visVare);
}

//Event-Listeners
dyrene.on("child_added", visVare)
tingene.on("child_added", visVare)
