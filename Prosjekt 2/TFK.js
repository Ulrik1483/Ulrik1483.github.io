//Database
const main = document.querySelector("main")

//URL-parameter
var url_string = window.location.href
var url = new URL(url_string);
var Navn = url.searchParams.get("Navn");

//Legger innhold til main
function visHTML(){
    main.innerHTML =`
        <article class="tfk">Takk for at du kjøpte en ${Navn} hos oss!</article>
    `;
}
visHTML();