/*-------------------------------------------------------- PARIER SUR UNE CASE !!!!!!*/
//
/*-------------------------------- Condition résultat (relou) */
/*------------------------- Coté tiers */
const upSide = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
const middleSide = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
const downSide = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
/*------------------------- Bas tiers */
const F12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const S12 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const T12 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
/*------------------------- Rouge ou Noir */
const black = [
  2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];
const red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
/*------------------------- Pair ou Impair */
const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 35, 37, 39, 31, 33, 35];
const even = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
];
/*------------------------- 1-18 / 19-36 */
const one18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const nineteen36 = [
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];
/*------------------------------------ Placer sa mise*/

let miseParie = {};

/*------------------Récuperer les id et les stocker avec les mises*/
function parier(caseId) {
  if (mise === 0) {
    return;
  } else {
    if (miseParie[caseId]) {
      miseParie[caseId] += mise;
    } else {
      miseParie[caseId] = mise;
    }
    mise = 0;
    document.getElementById("mise").innerHTML = `<p>Votre mise : ${mise}</p>`;
    displayCredit.innerHTML = `Crédit restant : ${credit}`;
    console.log("Mise parie:", miseParie);
  }
}

//pour les chiffres
const cases = document.querySelectorAll(".chiffre");
cases.forEach(caseElement => {
  caseElement.addEventListener("click", () => {
    const caseId = caseElement.id;
    parier(caseId);
    console.log(caseId);
  });
});
//pour les conditions
const caseCondition = document.querySelectorAll(".condition");
caseCondition.forEach(caseElement => {
  caseElement.addEventListener("click", () => {
    const caseId = caseElement.id;
    parier(caseId);
    console.log(caseId);
  });
});
