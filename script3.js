/*-------------------------------------------------------- PARIER SUR UNE CASE !!!!!!*/
//
/*-------------------------------- Condition résultat (relou) */

// faire un tableau avec tous les chiffrers et leur correspondance !!!!!!!!!!
const chiffre = [
  1,
  {
    color: "red",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  2,
  {
    color: "black",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  3,
  {
    color: "red",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  4,
  {
    color: "black",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  5,
  {
    color: "red",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  6,
  {
    color: "black",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  7,
  {
    color: "red",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  8,
  {
    color: "black",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  9,
  {
    color: "red",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  10,
  {
    color: "black",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  11,
  {
    color: "black",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  12,
  {
    color: "red",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "premTier",
    half: "firstHalf",
  },
  13,
  {
    color: "black",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },
  14,
  {
    color: "red",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },
  15,
  {
    color: "black",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },
  16,
  {
    color: "red",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },
  17,
  {
    color: "black",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },
  18,
  {
    color: "red",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },
  19,
  {
    color: "red",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },
  20,
  {
    color: "black",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },
  21,
  {
    color: "red",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },
  22,
  {
    color: "black",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },
  23,
  {
    color: "red",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },
  24,
  {
    color: "black",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },
  25,
  {
    color: "red",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  26,
  {
    color: "black",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  27,
  {
    color: "red",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  28,
  {
    color: "black",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "pretroisTiermTier",
    half: "secondHalf",
  },
  29,
  {
    color: "black",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  30,
  {
    color: "red",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  31,
  {
    color: "black",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  32,
  {
    color: "red",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  33,
  {
    color: "black",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  34,
  {
    color: "red",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  35,
  {
    color: "black",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  36,
  {
    color: "red",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
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
