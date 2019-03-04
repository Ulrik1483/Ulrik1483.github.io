let database = firebase.database();
let kråker = database.ref("varer/kråker");
let kråkeboller = database.ref("varer/kråkeboller");
let boller = database.ref("varer/boller");
let huff = database.ref("varer/huff");
let main = document.querySelector("main");
function visVare(snapshot) {
    let vare = snapshot.val();
    main.innerHTML += `
        <article>
          <h1>${vare.navn}</h1>
          <p>${vare.pris} NOK</p>
          <img class="SubImage" src="Bilder/${vare.bilde}">
        </article>
  `;
}
function visKråkOgBoller() {
    main.innerHTML = " ";
    kråker.on("child_added", visVare);
    kråkeboller.on("child_added", visVare);
    boller.on("child_added", visVare);
}
function visKråker() {
    main.innerHTML = " ";
    kråker.on("child_added", visVare);
}
function visBilligeKråker() {
    main.innerHTML = "  ";
      kråker
        .orderByChild("pris")
        .startAt(0)
        .endAt(3000)
        .limitToFirst(3)
        .on("child_added", visVare);
}
function visKråkeboller() {
    main.innerHTML = " ";
    kråkeboller.on("child_added", visVare);
}
function visAlfabetiskeKråkeboller() {
  main.innerHTML = "  ";
  kråkeboller
        .orderByChild("navn")
        .startAt("A")
        .endAt("Z")
        .on("child_added", visVare);
}
function visBoller() {
    main.innerHTML = "  ";
    boller.on("child_added", visVare);

}
function visLite() {
    main.innerHTML = " ";
    huff.on("child_added", visVare);
}
