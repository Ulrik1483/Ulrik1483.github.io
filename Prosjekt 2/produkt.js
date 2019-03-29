//HTML-elementer
  const overviewLeft = document.querySelector(".overviewLeft");
  const overviewRight = document.querySelector(".overviewRight");

//URL-parameter
  var url_string = window.location.href
  var url = new URL(url_string);
  var id = url.searchParams.get("id");

//Database-elementer
  const database = firebase.database();
  const varer = database.ref("Dyrebakken/Varer/" + id);

//Legger innhold til main
  function byttBilde(bilde){
    bildecontainer.style.backgroundImage = `url("${bilde}")`;
  }

  function visVare(snap) {
    const vare = snap.val();

    const bilder = vare.Bilder;
    const visningsbilde = bilder[4];

    bildecontainer.style.backgroundImage = `url("${visningsbilde}")`;

    let bilderad = `<div class="bilderad">`;

    for(const bilde of bilder) {
      bilderad += `<img src="${bilde}" onClick="byttBilde('${bilde}')">`
    }

    bilderad += `</div>`;


    const rabatt = 1-Math.floor(Math.random() * 15)/20;
    const orginalPris = `${vare.Pris}`;
    const pris = `${vare.Pris}`*rabatt;

    const varenummer = Math.floor(Math.random() * 100000);

    overviewLeft.innerHTML +=`
      <section class="productSection">
        <h1>${vare.Navn}</h1>
        <div>varenummer: ${varenummer}</div>
      </section>
      `;
    overviewRight.innerHTML +=`
      <section>
        <p class="strikeThrough">Før ${orginalPris},-</p>
        <p>${pris},-</p>
        ${bilderad}
      </section>
    `;
  }

//Event Listener
  varer.on("value", visVare);
