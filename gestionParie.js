/*------------------------------------ OBJETS-----------------------------------------------------------*/

let miseParieChiffres = {};
let miseParieConditionsDouble = {};
let miseParieConditionsTriple = {};

/* --------------------------------------------MAJ OBJETS ---------------------------------------------- */
/* Incremente le tableau en foncion de la 
case cliqué (type donné lors du clic / chiffre, x2 ou x3)  */
function updateMiseParie(caseId, mise, type) {
  switch (type) {
    case "chiffre":
      if (miseParieChiffres[caseId]) {
        miseParieChiffres[caseId] += mise;
      } else {
        miseParieChiffres[caseId] = mise;
      }
      break;
    case "conditionDouble":
      if (miseParieConditionsDouble[caseId]) {
        miseParieConditionsDouble[caseId] += mise;
      } else {
        miseParieConditionsDouble[caseId] = mise;
      }
      break;
    case "conditionTriple":
      if (miseParieConditionsTriple[caseId]) {
        miseParieConditionsTriple[caseId] += mise;
      } else {
        miseParieConditionsTriple[caseId] = mise;
      }
      break;
    default:
      break;
  }
  console.log(miseParieChiffres);
}

/*-----------------------------------------------------AJOUTER JETON----------------------------------------*/
/* ------verifie si jeton existe déjà, additionne avec existant
   ou ajoute nouveau jeton */
function addJeton(caseElement, mise) {
  const existingJeton = caseElement.querySelector(".jeton");
  if (existingJeton) {
    existingJeton.textContent = parseInt(existingJeton.textContent) + mise;
  } else {
    caseElement.innerHTML += `<p class="jeton">${mise}</p>`;
  }
}

/*---------------------------------------EFFACER LES MISES PLACEES-----------------------------------------*/

/*------------------------------------------Efface les jetons */
function eraseDisplayParis() {
  const cases = document.querySelectorAll(
    ".chiffre, .conditionDouble, .conditionTriple"
  );
  cases.forEach(caseElement => {
    const originalContent = caseElement.getAttribute("data-original-content");
    if (originalContent) {
      caseElement.innerHTML = originalContent;
    }
  });
}

/* -------------------------------Ajoute la mise au crédit, vide tableau, efface jeton */
const deletButton = document.getElementById("retirPari");

function deletBet() {
  if (Object.keys(miseParieChiffres).length > 0) {
    Object.entries(miseParieChiffres).forEach(([key, value]) => {
      credit += value;
    });
  }
  if (Object.keys(miseParieConditionsDouble).length > 0) {
    Object.entries(miseParieConditionsDouble).forEach(([key, value]) => {
      credit += value;
    });
  }

  if (Object.keys(miseParieConditionsTriple).length > 0) {
    Object.entries(miseParieConditionsTriple).forEach(([key, value]) => {
      credit += value;
    });
  }

  resetParis();
  upDateCredit();
  eraseDisplayParis();
}

/*-------------------------------------------INIT MANCHE---------------------------------------- */

function init() {
  /*------------------------------------------------ CHIFFRE SIMPLE---- */
  const cases = document.querySelectorAll(".chiffre");
  cases.forEach(caseElement => {
    /* Save le html avant placer un paris (remplacer par jeton)  */
    caseElement.setAttribute("data-original-content", caseElement.innerHTML);

    /* Place un paris */
    caseElement.addEventListener("click", () => {
      const caseId = caseElement.id;

      updateMiseParie(caseId, mise, "chiffre");
      addJeton(caseElement, mise);
      upDateMise();
      upDateCredit();
      resetMontantMise();
    });
  });

  /*------------------------------------------------ CONDITION 2---- */
  const caseConditionDouble = document.querySelectorAll(".conditionDouble");
  caseConditionDouble.forEach(caseElement => {
    /* Save le html avant placer un paris (remplacer par jeton)  */
    caseElement.setAttribute("data-original-content", caseElement.innerHTML);

    /* Place un paris */
    caseElement.addEventListener("click", () => {
      const caseId = caseElement.id;

      updateMiseParie(caseId, mise, "conditionDouble");
      addJeton(caseElement, mise);
      upDateMise();
      upDateCredit();
      resetMontantMise();
    });
  });

  /*------------------------------------------------ CONDITION X3---- */
  const caseConditionTriple = document.querySelectorAll(".conditionTriple");
  caseConditionTriple.forEach(caseElement => {
    /* Save le html avant placer un paris (remplacer par jeton)  */
    caseElement.setAttribute("data-original-content", caseElement.innerHTML);

    /* Place un paris */
    caseElement.addEventListener("click", () => {
      const caseId = caseElement.id;

      updateMiseParie(caseId, mise, "conditionTriple");
      addJeton(caseElement, mise);
      upDateMise();
      upDateCredit();
      resetMontantMise();
    });
  });

  /*------------------------------------------------Vide les objets---- */
  deletButton.addEventListener("click", () => {
    deletBet();
  });
}
init();
