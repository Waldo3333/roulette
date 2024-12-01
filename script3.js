/*-------------------------------------------------------- PARIER SUR UNE CASE !!!!!!*/
//
/*-------------------------------- Condition résultat (relou) */

// faire un tableau avec tous les chiffrers et leur correspondance !!!!!!!!!!
const chiffre = [
  {
    numero: 1,
    color: "red",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 2,
    color: "black",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 3,
    color: "red",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 4,
    color: "black",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 5,
    color: "red",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 6,
    color: "black",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 7,
    color: "red",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 8,
    color: "black",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 9,
    color: "red",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 10,
    color: "black",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 11,
    color: "black",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 12,
    color: "red",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "premTier",
    half: "firstHalf",
  },

  {
    numero: 13,
    color: "black",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },

  {
    numero: 14,
    color: "red",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },

  {
    numero: 15,
    color: "black",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },

  {
    numero: 16,
    color: "red",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },

  {
    numero: 17,
    color: "black",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },

  {
    numero: 18,
    color: "red",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "deuxTier",
    half: "firstHalf",
  },

  {
    numero: 19,
    color: "red",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },

  {
    numero: 20,
    color: "black",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },

  {
    numero: 21,
    color: "red",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },

  {
    numero: 22,
    color: "black",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },

  {
    numero: 23,
    color: "red",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },

  {
    numero: 24,
    color: "black",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "deuxTier",
    half: "secondHalf",
  },

  {
    numero: 25,
    color: "red",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },

  {
    numero: 26,
    color: "black",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },

  {
    numero: 27,
    color: "red",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },

  {
    numero: 28,
    color: "black",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "pretroisTiermTier",
    half: "secondHalf",
  },

  {
    numero: 29,
    color: "black",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },

  {
    numero: 30,
    color: "red",
    isOdd: false,
    tierDroite: "upSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },

  {
    numero: 31,
    color: "black",
    isOdd: true,
    tierDroite: "downSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },

  {
    numero: 32,
    color: "red",
    isOdd: false,
    tierDroite: "middleSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },

  {
    numero: 33,
    color: "black",
    isOdd: true,
    tierDroite: "upSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  {
    numero: 34,
    color: "red",
    isOdd: false,
    tierDroite: "downSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },
  {
    numero: 35,
    color: "black",
    isOdd: true,
    tierDroite: "middleSide",
    tierBas: "troisTier",
    half: "secondHalf",
  },

  {
    numero: 36,
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
