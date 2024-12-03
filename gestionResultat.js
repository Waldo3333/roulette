/*---------------------------------------------!!!!! RESULTATS !!!!!---------------------------------------*/
/*-----info chiffres/nombres----*/
const chiffre = [
  {
    numero: 0,
    red: false,
    black: false,
    even: true,
    odd: false,
    tierGauche: false,
    tierMilieu: false,
    tierDroite: false,
    upSide: false,
    downSide: false,
    middleSide: false,
    premHalf: false,
    secondHalf: false,
  },
  {
    numero: 1,
    red: true,
    black: false,
    even: false,
    odd: true,
    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,
    upSide: false,
    middleSide: false,
    downSide: true,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 2,

    red: false,
    black: true,

    even: true,
    odd: false,

    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: false,
    middleSide: true,
    downSide: false,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 3,

    red: true,
    black: false,

    even: false,
    odd: true,

    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: true,
    middleSide: false,
    downSide: false,

    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 4,
    red: false,
    black: true,

    even: true,
    odd: false,

    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 5,
    red: true,
    black: false,

    even: false,
    odd: true,

    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: false,
    middleSide: true,
    downSide: false,

    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 6,
    red: false,
    black: true,

    even: true,
    odd: false,
    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: true,
    middleSide: false,
    downSide: false,

    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 7,
    red: true,
    black: false,

    even: false,
    odd: true,

    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 8,

    red: false,
    black: true,

    even: true,
    odd: false,

    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: false,
    middleSide: true,
    downSide: false,

    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 9,

    red: true,
    black: false,

    even: false,
    odd: true,

    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: true,
    middleSide: false,
    downSide: false,

    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 10,

    red: false,
    black: true,

    even: true,
    odd: false,

    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 11,
    red: false,
    black: true,
    even: false,
    odd: true,
    tierGauche: true,
    tierMilieu: false,
    tierDroite: false,
    upSide: false,
    middleSide: true,
    downSide: false,
    premHalf: true,
    secondHalf: false,
  },

  {
    numero: 12,
    red: true,
    black: false,
    even: true,
    odd: false,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: true,
    middleSide: false,
    downSide: false,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 13,
    red: false,
    black: true,
    even: false,
    odd: true,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: false,
    middleSide: false,
    downSide: true,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 14,
    red: true,
    black: false,
    even: true,
    odd: false,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: false,
    middleSide: true,
    downSide: false,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 15,
    red: false,
    black: true,
    even: false,
    odd: true,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: true,
    middleSide: false,
    downSide: false,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 16,
    red: true,
    black: false,
    even: true,
    odd: false,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: false,
    middleSide: false,
    downSide: true,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 17,
    red: false,
    black: true,
    even: false,
    odd: true,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: false,
    middleSide: true,
    downSide: false,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 18,
    red: true,
    black: false,
    even: true,
    odd: false,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: true,
    middleSide: false,
    downSide: false,
    premHalf: true,
    secondHalf: false,
  },
  {
    numero: 19,
    red: true,
    black: false,
    even: false,
    odd: true,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: false,
    middleSide: false,
    downSide: true,
    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 20,
    red: false,
    black: this,
    even: true,
    odd: false,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: false,
    middleSide: true,
    downSide: false,
    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 21,
    red: true,
    black: false,
    even: false,
    odd: true,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: true,
    middleSide: false,
    downSide: false,
    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 22,
    red: false,
    black: true,
    even: true,
    odd: false,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: false,
    middleSide: false,
    downSide: true,
    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 23,
    red: true,
    black: false,
    even: false,
    odd: true,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: false,
    middleSide: true,
    downSide: false,
    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 24,
    red: false,
    black: true,
    even: true,
    odd: false,
    tierGauche: false,
    tierMilieu: true,
    tierDroite: false,
    upSide: true,
    middleSide: false,
    downSide: false,
    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 25,
    red: true,
    black: false,

    even: false,
    odd: true,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 26,
    red: false,
    black: true,

    even: true,
    odd: false,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: true,
    downSide: false,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 27,
    red: true,
    black: false,

    even: false,
    odd: true,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 28,
    red: false,
    black: true,

    even: true,
    odd: false,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 29,
    red: false,
    black: true,

    even: true,
    odd: false,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: true,
    downSide: false,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 30,
    red: true,
    black: false,

    even: true,
    odd: false,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 31,
    red: false,
    black: true,

    even: false,
    odd: true,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 32,
    red: true,
    black: false,

    even: true,
    odd: false,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: true,
    downSide: false,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 33,
    red: false,
    black: true,

    even: false,
    odd: true,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: true,
    middleSide: false,
    downSide: false,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 34,
    red: true,
    black: false,

    even: true,
    odd: false,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: false,
    downSide: true,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 35,
    red: false,
    black: true,

    even: false,
    odd: true,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: false,
    middleSide: true,
    downSide: false,

    premHalf: false,
    secondHalf: true,
  },
  {
    numero: 36,
    red: true,
    black: false,

    even: true,
    odd: false,

    tierGauche: false,
    tierMilieu: false,
    tierDroite: true,

    upSide: true,
    middleSide: false,
    downSide: false,

    premHalf: false,
    secondHalf: true,
  },
];
/*-------------------------------------------------CHECKER LES WINS---------------------------------------*/

/*---------------------------------Check Win Numero Exacte-------*/
function checkNumberWin(resultat) {
  Object.entries(miseParieChiffres).forEach(([key, value]) => {
    if (key === resultat) {
      let gain = value * 36;
      setTimeout(() => {
        alert(
          `votre mise sur le ${key} est gagnante, vous avez gagné ${gain} crédit`
        );
      }, 200);
      credit += gain;
    } else {
      setTimeout(() => {
        alert(
          ` votre mise sur le ${key} est perdante,vous avez perdu ${value} crédit`
        );
      }, 200);

      upDateCredit();
    }
  });
}
/*-------------------------------------Check Win Condition 2----*/
function checkConditionDoubleWin(resultat) {
  Object.entries(miseParieConditionsDouble).forEach(([key, value]) => {
    if (chiffre[resultat][key]) {
      let gain = value * 2;
      setTimeout(() => {
        alert(
          `Votre mise sur ${key} est gagnante vous avez gagné ${gain} crédit`
        );
      }, 200);
      credit += gain;
      upDateCredit();
    } else {
      setTimeout(() => {
        alert(
          `Votre mise sur ${key} est perdante vous avez perdu ${value} crédit`
        );
      }, 200);
    }
  });
}
/*----------------------------------------Check Win Condition x3----*/
function checkConditionTripleWin(resultat) {
  Object.entries(miseParieConditionsTriple).forEach(([key, value]) => {
    if (chiffre[resultat][key]) {
      let gain = value * 3;
      setTimeout(() => {
        alert(
          `Votre mise sur ${key} est gagnante vous avez gagné ${gain} crédit `
        );
      }, 200);
      credit += gain;
      upDateCredit();
    } else {
      setTimeout(() => {
        alert(
          `Votre mise sur ${key} est perdante vous avez perdu ${value} crédit`
        );
      }, 200);
    }
  });
}

/* --------------------------Vider les objets----- */
function resetParis() {
  miseParieChiffres = {};
  miseParieConditionsDouble = {};
  miseParieConditionsTriple = {};
}
/* --------------------------Reset mise à O----- */
function resetMontantMise() {
  mise = 0;
  upDateMise();
}

//----------------------------------- AFFICHAGE RESULTAT + CHECK WIN------------------------------------ ////

const displayResult = document.getElementById("resultatDisplay");

/* ------------------------function qui Genere le résultat --- */
function generateRandomResult() {
  const resultat = Math.floor(Math.random() * 37);
  displayResult.innerHTML = resultat;
  checkNumberWin(resultat);
  checkConditionDoubleWin(resultat);
  checkConditionTripleWin(resultat);
  resetMontantMise();
  resetParis();
  eraseDisplayParis();
}

/*---------------------------Chrono de 20 seconde puis lance resultat----*/
const timerDisplay = document.getElementById("timer");
function startTimer(duration, display) {
  let timer = duration;
  const interval = setInterval(() => {
    const seconds = timer--;
    display.textContent = seconds;

    if (timer < 0) {
      clearInterval(interval);
      display.textContent = "0";
      generateRandomResult();
      startTimer(20, timerDisplay);
    }
  }, 1000);
}

startTimer(20, timerDisplay);
