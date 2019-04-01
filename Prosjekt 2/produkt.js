//HTML-elementer
  const overviewLeft = document.querySelector(".overviewLeft");
  const overviewRight = document.querySelector(".overviewRight");
  const overviewBottom = document.querySelector(".overviewBottom");

//URL-parameter
  var url_string = window.location.href
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  var pris = url.searchParams.get("pris");

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


    const orginalPris = `${vare.Pris}`

    const varenummer = Math.floor(Math.random() * 100000);

    overviewLeft.innerHTML +=`
      <section>
        <h1>${vare.Navn}</h1>
        <div>varenummer: ${varenummer}</div>
      </section>
      `;
    overviewRight.innerHTML +=`
      <section>
        <p class="strikeThrough">Før ${orginalPris},-</p>
        <p class="nyPris">${pris},-</p>
        ${bilderad}
        <div> <button class="purchaseButton">Legg til handlekurven</button> </div>
      </section>
    `;
    overviewBottom.innerHTML +=`
      <section>
        <h1>Produkt informasjon</h1>
        <p>${vare.Beskrivelse}</p>
      </section>
    `;

    // Dersom det ikke er noen forskjell mellom gammel og ny pris skal den gamle prisen ikke vises
    if (orginalPris == pris){
      overviewRight.innerHTML = "";
      overviewRight.innerHTML +=`
        <section>
          <p class="nyPris">${pris},-</p>
          ${bilderad}
          <div> <button class="purchaseButton">Legg til handlekurv</button> </div>
        </section>
      `;
    }
  }

//Event Listener
  varer.on("value", visVare);
