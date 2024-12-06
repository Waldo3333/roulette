/* --------------------------------------------------LA ROULETTE----------------------------------------- */

const rouletteContainer = document.getElementById("InterWheel");
const billeContainer = document.getElementById("billeWheel");
const totalNumbers = 37; // Nombre total de chiffres (0 à 36)
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
/* ----------------------------------faire tourner la roue et bille----------------------------------------- */

let currentRotation = 0;
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
/*------------------------------recupèrer l'angle de la roue apres rotation--------------------------------- */
function getRoueDegrees(roue, bille) {
  const style = window.getComputedStyle(roue);
  const transform = style.transform;
  const matrix = transform.match(/^matrix\((.+)\)$/);
  console.log(matrix);

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
      angleBille += 360;
    }

    // Mettre à jour l'attribut de rotation de l'élément
    rouletteContainer.style.transition = "none"; // Annule la transition avant de changer la rotation
    billeContainer.style.transition = "none"; // Annule la transition avant de changer la rotation
    rouletteContainer.style.transform = `rotate(${angle}deg)`; // Applique la rotation calculée
    billeContainer.style.transform = `rotate(${angleBille}deg)`; // Applique la rotation calculée
    identifNumber(angle, angleBille);
  }
}

/*--------------------------------------identifier nombre après la rotation--------------------------------- */

function identifNumber(angleRoue, angleBille) {
  console.log("Angle de la roue: " + angleRoue);
  console.log("Angle de la bille: " + angleBille);

  // Calcul de la différence entre les angles
  let difference = angleRoue - angleBille;
  if (difference < 0) {
    difference += 360; // Normalisation si la différence est négative
  }

  let angleFinal = 360 - difference; // Conversion en position dans le sens horaire
  console.log("Angle final (dans le sens horaire): " + angleFinal);
  console.log(RouletteNumberOrder);

  const anglePerNumber = 360 / totalNumbers; // Chaque segment couvre cette portion d'angle
  let index = Math.floor(angleFinal / anglePerNumber + 1);

  // Gérer les dépassements (quand angleFinal correspond exactement à 360° ou à une limite supérieure)
  if (index >= totalNumbers) {
    index = 0;
  }

  // Trouver le numéro correspondant dans l'ordre de la roulette
  const number = RouletteNumberOrder[index];
  console.log("Chiffre sur lequel la bille s'est arrêtée: " + number);
  displayResult.innerHTML = number;
  checkNumberWin(number);
  checkConditionDoubleWin(number);
  checkConditionTripleWin(number);
  resetMontantMise();
  resetParis();
  eraseDisplayParis();
}

/* --------------------genere une valeur random // fait tourner // recupere l'angle------------------------- */

function randomValueRotation() {
  disableParis();
  const randomNumber = Math.floor(Math.random() * 360);
  const randomRotation = 880 + randomNumber;
  roue = rouletteContainer;
  bille = billeContainer;
  console.log(randomRotation);
  tournerRoueBille(randomRotation);
  setTimeout(() => {
    getRoueDegrees(roue);
    enableParis();
  }, 5000);
}
/* ----------------------------------------------INIT---------------------------------------------------- */

createWheelNumber();
