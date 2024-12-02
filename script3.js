/*-------------------------------------------------------- PARIER SUR UNE CASE !!!!!!*/
//
/*-------------------------------- Condition résultat (relou) */

// faire un tableau avec tous les chiffrers et leur correspondance !!!!!!!!!!

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
