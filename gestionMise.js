/*-------------------------------------------------------- Crédit joueur/affichage */
const displayCredit = document.getElementById("credit");
let credit = 100;
let mise = 0;
displayCredit.innerHTML = `Crédit restant : ${credit}`;
/*-------------------------------------------------------- Choix/affichage mise*/

const boutonMise1 = document.getElementById("mise1");
const boutonMise5 = document.getElementById("mise5");
const boutonMise10 = document.getElementById("mise10");
const boutonMise50 = document.getElementById("mise50");
const boutonMiseTout = document.getElementById("miseTout");
const annulMise = document.getElementById("annulMise");

function mise1(montant) {
  if (credit >= montant) {
    mise = mise + montant;
    ///erreue par la
    document.getElementById("mise").innerHTML = `<p>Votre mise : ${mise}</p>`;
    displayCredit.innerHTML = `Crédit restant : ${credit}`;
    soustraireMise(montant);
  } else {
    alert("pas assez en banque");
  }
}

function miseAll() {
  if (credit > 0) {
    mise = mise + credit;
    credit = 0;
    document.getElementById("mise").innerHTML = `<p>Votre mise : ${mise}</p>`;
    displayCredit.innerHTML = `Crédit restant : ${credit}`;
  }
}

function annulerMise() {
  credit = credit + mise;
  mise = 0;
  document.getElementById("mise").innerHTML = `<p>Votre mise : ${mise}</p>`;
  displayCredit.innerHTML = `Crédit restant : ${credit}`;
}
boutonMise1.addEventListener("click", () => mise1(1));
boutonMise5.addEventListener("click", () => mise1(5));
boutonMise10.addEventListener("click", () => mise1(10));
boutonMise50.addEventListener("click", () => mise1(50));
boutonMiseTout.addEventListener("click", miseAll);
annulMise.addEventListener("click", annulerMise);

function soustraireMise(mise) {
  credit = credit - mise;
  displayCredit.innerHTML = `Crédit restant : ${credit}`;
}
