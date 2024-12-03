/*---------------------------------------------GESTION DES MISES----------------------------------------*/

/*--------------------- Crédit et Mise de base ---- */
let credit = 100;
let mise = 0;

/* -----------------------MàJ Affichage Crédit */
function upDateCredit() {
  document.getElementById(
    "credit"
  ).innerHTML = `Crédit restant : <p class="creditNumber">${credit}</p>`;
}

/*------------------------ MàJ Affichage Mise */
function upDateMise() {
  document.getElementById("mise").innerHTML = `<p>Votre mise : ${mise}</p>`;
}

/*---------------------------------------------- SELECTION MISE ------------------------------------------*/
/*-------------------Recup des boutons */
const boutonMise1 = document.getElementById("mise1");
const boutonMise5 = document.getElementById("mise5");
const boutonMise10 = document.getElementById("mise10");
const boutonMise50 = document.getElementById("mise50");
const boutonMiseTout = document.getElementById("miseTout");
const annulMise = document.getElementById("annulMise");

/* ----------------- Selection montant unique--- */
function mise1(montant) {
  if (credit >= montant) {
    mise = mise + montant;
    upDateMise();
    upDateCredit();
    soustraireMise(montant);
  } else {
    alert("pas assez en banque");
  }
}
/* ----------------- Selection ALL IN--- */
function miseAll() {
  if (credit > 0) {
    mise = mise + credit;
    credit = 0;
    upDateMise();
    upDateCredit();
  }
}
/*------------------ Soustraire la mise au crédit */
function soustraireMise(mise) {
  credit = credit - mise;
  upDateCredit();
}
/*------------------ Reset la mise et rajoute crédit */
function annulerMise() {
  credit = credit + mise;
  mise = 0;
  upDateMise();
  upDateCredit();
}

/*------------------------------------------------INIT BOUTON MISE------------------------------------- */

function initMise() {
  boutonMise1.addEventListener("click", () => mise1(1));
  boutonMise5.addEventListener("click", () => mise1(5));
  boutonMise10.addEventListener("click", () => mise1(10));
  boutonMise50.addEventListener("click", () => mise1(50));
  boutonMiseTout.addEventListener("click", miseAll);
  annulMise.addEventListener("click", annulerMise);
}

initMise();
