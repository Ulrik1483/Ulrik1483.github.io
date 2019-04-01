
//Database-Elementer
  const database = firebase.database();
  const varer = database.ref("Dyrebakken/Varer");

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

function vis1(){
  display.innerHTML = "";
  varer.orderByChild("Type").equalTo("Dyr").on("child_added", visVare)
}
function vis2(){
  display.innerHTML = "";
  varer.orderByChild("Type").equalTo("Ting").on("child_added", visVare)
}

//Event-Listeners
varer.on("child_added", visVare)
