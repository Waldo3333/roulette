/*------------------------------------ Placer sa mise*/

let miseParieChiffres = {};
let miseParieConditionsDouble = {};
let miseParieConditionsTriple = {};

//Afficher les mises placées
// const displayParis = document.getElementById("displayPariPlacees");

// function updateParis(caseId, value) {
//   const newPari = document.createElement("div");
//   newPari.textContent = `Mise de ${value} sur la case ${caseId}`;
//   displayParis.appendChild(newPari); // Ajoute à l'affichage existant.
// }
//----------------------------------test ajouter jeton sur plateau

function addJeton(caseElement, mise) {
  caseElement.innerHTML = `<p class="jeton">${mise}</p>`;
}
//Effacer les mises placées affichées et les jetons
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

/* -----------------------------Retirer les paris */
const deletButton = document.getElementById("retirPari");

function deletBet() {
  if (Object.keys(miseParieChiffres).length > 0) {
    Object.entries(miseParieChiffres).forEach(([key, value]) => {
      credit += value; // Ajoute la mise au crédit
    });
    miseParieChiffres = {}; // Vide l'objet après traitement
  }
  if (Object.keys(miseParieConditionsDouble).length > 0) {
    Object.entries(miseParieConditionsDouble).forEach(([key, value]) => {
      credit += value; // Ajoute la mise au crédit
    });
    miseParieConditionsDouble = {}; // Vide l'objet après traitement
  }

  if (Object.keys(miseParieConditionsTriple).length > 0) {
    Object.entries(miseParieConditionsTriple).forEach(([key, value]) => {
      credit += value; // Ajoute la mise au crédit
    });
    miseParieConditionsTriple = {}; // Vide l'objet après traitement
  }

  resetParis();
  upDateCredit();
  eraseDisplayParis();
}
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
    // updateParis(caseId, miseParieChiffres[caseId]);
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
    // updateParis(caseId, miseParieConditionsDouble[caseId]);
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
    // updateParis(caseId, miseParieConditionsTriple[caseId]);
  }
}

function init() {
  //pour les chiffres
  const cases = document.querySelectorAll(".chiffre");
  cases.forEach(caseElement => {
    caseElement.setAttribute("data-original-content", caseElement.innerHTML);

    caseElement.addEventListener("click", () => {
      const caseId = caseElement.id;
      addJeton(caseElement, mise);
      parierChiffre(caseId);
      upDateMise();
      upDateCredit();
      resetMontantMise();
    });
  });
  //pour les conditions x2
  const caseConditionDouble = document.querySelectorAll(".conditionDouble");
  caseConditionDouble.forEach(caseElement => {
    caseElement.setAttribute("data-original-content", caseElement.innerHTML);
    caseElement.addEventListener("click", () => {
      const caseId = caseElement.id;
      addJeton(caseElement, mise);
      parierConditionDouble(caseId);

      upDateMise();
      upDateCredit();

      resetMontantMise();
    });
  });
  //pour les conditions x3
  const caseConditionTriple = document.querySelectorAll(".conditionTriple");
  caseConditionTriple.forEach(caseElement => {
    caseElement.setAttribute("data-original-content", caseElement.innerHTML);
    caseElement.addEventListener("click", () => {
      addJeton(caseElement, mise);
      const caseId = caseElement.id;
      parierConditionTriple(caseId);
      upDateMise();
      upDateCredit();
      resetMontantMise();
    });
  });
  // pour annuler la mise
  deletButton.addEventListener("click", () => {
    deletBet();
  });
}
init();
