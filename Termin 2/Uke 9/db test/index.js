//Lenker index med firebase
let database = firebase.database();

//Legger innhold til main
function visProsjekter(snapshot) {
  let proskjekt = snapshot.val();
  main.innerHTML+= `
    <article>
      <h1>${Prosjekt.prosjekter}</h1>
      <img src="">
    </article>
  `;
}
