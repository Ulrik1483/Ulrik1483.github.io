//HTML-elementer
  const main = document.querySelector("main");

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
    const index = Math.floor(Math.random() * 5);
    const rabatt = 1-Math.floor(Math.random() * 15)/20;
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

//Event Listener
  varer.on("value", visVare);
