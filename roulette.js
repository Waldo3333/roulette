/* --------------------------------------------------LA ROULETTE----------------------------------------- */

const rouletteContainer = document.getElementById("InterWheel");
const billeContainer = document.getElementById("billeWheel");
const totalNumbers = 37; // Nombre total de chiffres (0 à 36)
let currentRotation = 0;
const RouletteNumberOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

/* --------------------------------------------------creation html----------------------------------------- */
function createWheelNumber() {
  const divBille = document.createElement("div");
  divBille.id = "bille";
  billeContainer.appendChild(divBille);
  for (let i = 0; i < totalNumbers; i++) {
    const angle = (360 / totalNumbers) * i; // Angle pour chaque chiffre
    // Créer le conteneur pour le chiffre
    const numberDiv = document.createElement("div");
    numberDiv.className = "chiffreWheel";
    numberDiv.id = `wheel-${RouletteNumberOrder[i]}`;
    numberDiv.style.transform = `rotate(${angle}deg)`;
    console.log(angle, numberDiv.id);
    // Créer le span contenant le chiffre
    const span = document.createElement("span");
    span.textContent = RouletteNumberOrder[i];
    span.style.transform = `rotate(-${angle}deg)`; // Corrige la rotation du texte
    // Ajouter le span au div
    numberDiv.appendChild(span);
    // Ajouter le div au conteneur principal
    rouletteContainer.appendChild(numberDiv);
  }
}
createWheelNumber();
/* ----------------------------------faire tourner la roue et bille----------------------------------------- */

function tournerRoueBille(valueRotation) {
  /**-------------------------- Tourner la roue */
  rouletteContainer.style.transition =
    "transform 5s cubic-bezier(0.33, 1, 0.92, 1.03)";
  rouletteContainer.style.transform = `rotate(${valueRotation}deg)`;
  /**-------------------------- Tourner la bille */
  billeRotation = 0 - valueRotation;
  console.log(billeRotation);
  billeContainer.style.transition =
    "transform 5s cubic-bezier(0.33, 1, 0.92, 1.03)";
  billeContainer.style.transform = `rotate(${billeRotation}deg)`;
}
/* ------------------------Remplace le degré de style rotate pour eviter d'incrementer à l'infini  */
function replaceRotate(angle, angleBille) {
  rouletteContainer.style.transition = "none";
  billeContainer.style.transition = "none";
  rouletteContainer.style.transform = `rotate(${angle}deg)`;
  billeContainer.style.transform = `rotate(${angleBille}deg)`;
}
/*------------------------------recupèrer l'angle de la roue apres rotation--------------------------------- */
function getRoueDegrees(roue) {
  const style = window.getComputedStyle(roue);
  const transform = style.transform;
  const matrix = transform.match(/^matrix\((.+)\)$/);

  if (matrix) {
    const values = matrix[1].split(", ");
    // Calculer l'angle en utilisant atan2
    let angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
    let angleBille = 0 - angle;
    // Normaliser l'angle pour être entre 0 et 360 degrés
    if (angle < 0) {
      angle += 360;
    }
    if (angleBille < 0) {
      angleBille += 355;
    }

    replaceRotate(angle, angleBille);
    identifNumber(angle, angleBille);
  }
}
/*-------------------------------- ajout classe couleur à resulat display */
function changeColor(number, colorClass) {
  if (number === 0) {
    colorClass = "green";
  } else if (number >= 1 && number <= 10) {
    colorClass = number % 2 === 0 ? "black" : "red";
  } else if (number >= 11 && number <= 18) {
    colorClass = number % 2 === 0 ? "red" : "black";
  } else if (number >= 19 && number <= 28) {
    colorClass = number % 2 === 0 ? "black" : "red";
  } else {
    colorClass = number % 2 === 0 ? "red" : "black";
  }
  displayResult.classList.remove("black", "red", "green");
  displayResult.classList.add(colorClass);
}

/*--------------------------------------identifier nombre après la rotation--------------------------------- */

function identifNumber(angleRoue, angleBille) {
  console.log("Angle de la roue: " + angleRoue);
  console.log("Angle de la bille: " + angleBille);
  let colorClass = "";

  /*---------------------------------Calcul de la différence entre les angles bille et roue*/
  let difference = angleRoue - angleBille;
  if (difference < 0) {
    difference += 360;
  }
  /*---------------------------------Calcul angle pour checker numero correspondant*/
  let angleFinal = 360 - difference;
  /*---------------------------------Chaque segment couvre cette portion d'angle */
  const anglePerNumber = 360 / totalNumbers;
  let index = Math.floor(angleFinal / anglePerNumber + 1); // +1 car leger décalage autrement

  /*------------------------------- reset de l'index si besoin*/
  if (index >= totalNumbers) {
    index = 0;
  }
  /*----------------Trouver le numéro correspondant dans l'ordre de la roulette et l'affiche*/
  const number = RouletteNumberOrder[index];
  displayResult.innerHTML = number;

  /* -----------------------------lancer tous les check et reinit manche*/
  changeColor(number, colorClass);
  checkNumberWin(number);
  checkConditionDoubleWin(number);
  checkConditionTripleWin(number);
  resetMontantMise();
  resetParis();
  eraseDisplayParis();
}

/* --------------------genere une valeur random // fait tourner // recupere l'angle------------------------- */
const displayResult = document.getElementById("resultatDisplay");

function randomValueRotation() {
  disableParis();
  const randomNumber = Math.floor(Math.random() * 360);
  const randomRotation = 1880 + randomNumber;
  roue = rouletteContainer;
  bille = billeContainer;
  console.log(randomRotation);
  tournerRoueBille(randomRotation);
  setTimeout(() => {
    getRoueDegrees(roue);
    enableParis();
  }, 5000);
}

//----------------------------------- AFFICHAGE RESULTAT + CHECK WIN------------------------------------ ////

/*---------------------------Chrono de 20 seconde puis lance la roue----*/
const timerDisplay = document.getElementById("timer");
function startTimer(duration, display) {
  let timer = duration;
  const interval = setInterval(() => {
    const seconds = timer--;
    display.textContent = seconds;

    if (timer < 0) {
      clearInterval(interval);
      display.textContent = "0";
      randomValueRotation();
      setTimeout(() => {
        startTimer(20, timerDisplay);
      }, 5000);
    }
  }, 1000);
}

startTimer(20, timerDisplay);
