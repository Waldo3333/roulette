/*------------------------------------ Placer sa mise*/

let miseParieChiffres = {};
let miseParieConditionsDouble = {};
let miseParieConditionsTriple = {};

/*------------------Récuperer les id et les stocker avec les mises*/
//pour les chiffres simple x36
function parierChiffre(caseId) {
  if (mise === 0) {
    return;
  } else {
    if (miseParieChiffres[caseId]) {
      // soit y'en a deja un, on
      miseParieChiffres[caseId] += mise;
    } else {
      miseParieChiffres[caseId] = mise;
    }
  }
}
//pour les conditions x2

function parierConditionDouble(caseId) {
  if (mise === 0) {
    return;
  } else {
    if (miseParieConditionsDouble[caseId]) {
      miseParieConditionsDouble[caseId] += mise;
    } else {
      miseParieConditionsDouble[caseId] = mise;
    }
  }
}
//pour les conditions x3
function parierConditionTriple(caseId) {
  if (mise === 0) {
    return;
  } else {
    if (miseParieConditionsTriple[caseId]) {
      miseParieConditionsTriple[caseId] += mise;
    } else {
      miseParieConditionsTriple[caseId] = mise;
    }
  }
}

function init() {
  //pour les chiffres
  const cases = document.querySelectorAll(".chiffre");
  cases.forEach(caseElement => {
    caseElement.addEventListener("click", () => {
      const caseId = caseElement.id;
      parierChiffre(caseId);
      document.getElementById("mise").innerHTML = `<p>Votre mise : ${mise}</p>`;
      displayCredit.innerHTML = `Crédit restant : ${credit}`;
      console.log("Mise parie chiffres:", miseParieChiffres);
      resetMontantMise();
    });
  });
  //pour les conditions x2
  const caseConditionDouble = document.querySelectorAll(".conditionDouble");
  caseConditionDouble.forEach(caseElement => {
    caseElement.addEventListener("click", () => {
      const caseId = caseElement.id;
      parierConditionDouble(caseId);

      document.getElementById("mise").innerHTML = `<p>Votre mise : ${mise}</p>`;
      displayCredit.innerHTML = `Crédit restant : ${credit}`;
      console.log("Mise parie condition double:", miseParieConditionsDouble);
      resetMontantMise();
    });
  });
  //pour les conditions x3
  const caseConditionTriple = document.querySelectorAll(".conditionTriple");
  caseConditionTriple.forEach(caseElement => {
    caseElement.addEventListener("click", () => {
      const caseId = caseElement.id;
      parierConditionTriple(caseId);
      document.getElementById("mise").innerHTML = `<p>Votre mise : ${mise}</p>`;
      displayCredit.innerHTML = `Crédit restant : ${credit}`;
      console.log("Mise parie condition triple:", miseParieConditionsTriple);
      resetMontantMise();
    });
  });
}
init();
