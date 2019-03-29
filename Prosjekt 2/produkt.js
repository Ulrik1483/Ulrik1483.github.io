//HTML-elementer
  const overview = document.querySelector(".overview");

//URL-parameter
  var url_string = window.location.href
  var url = new URL(url_string);
  var id = url.searchParams.get("id");

//Database-elementer
  const database = firebase.database();
  const varer = database.ref("Dyrebakken/Varer/" + id);

//Legger innhold til main
  function visVare(snap) {
    const vare = snap.val();

    const bilder = vare.bilder;
    const index = 4;


    const rabatt = 1-Math.floor(Math.random() * 15)/20;
    const orginalPris = `${vare.Pris}`;
    const pris = `${vare.Pris}`*rabatt;

    overview.innerHTML +=`
      <section class="productSection">
        <h1>${vare.Navn}</h1>
        <img class="productImage" src="${vare.Bilder[index]}">
        <p class="strikeThrough">${orginalPris}</p>
        <p>${pris} NOK</p>
      </section>
      `;
  }

//Event Listener
  varer.on("value", visVare);
