const rouletteContainer = document.getElementById("InterWheel");
const billeContainer = document.getElementById("billeWheel");
const bouton = document.getElementById("rouletteButton");
const totalNumbers = 37; // Nombre total de chiffres (0 à 36)
const RouletteNumberOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

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

let currentRotation = 0; // Initial rotation value

function turnWheel(valueRotation) {
  rouletteContainer.style.transition =
    "transform 5s cubic-bezier(0.33, 1, 0.92, 1.03)";
  rouletteContainer.style.transform = `rotate(${valueRotation}deg)`;
  billeRotation = 0 - valueRotation;
  console.log(billeRotation);
  billeContainer.style.transition =
    "transform 5s cubic-bezier(0.33, 1, 0.92, 1.03)";
  billeContainer.style.transform = `rotate(${billeRotation}deg)`;
}

function randomValueRotation() {
  const randomNumber = Math.floor(Math.random() * 360);
  const randomRotation = 880 + randomNumber;
  console.log(randomRotation);
  turnWheel(randomRotation);
  roue = rouletteContainer;
  bille = billeContainer;
  setTimeout(() => {
    getRoueDegrees(roue);
  }, 5000);
}

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

    console.log(angle);

    // Mettre à jour l'attribut de rotation de l'élément
    rouletteContainer.style.transition = "none"; // Annule la transition avant de changer la rotation
    rouletteContainer.style.transform = `rotate(${angle}deg)`; // Applique la rotation calculée
    billeContainer.style.transition = "none"; // Annule la transition avant de changer la rotation
    billeContainer.style.transform = `rotate(${angleBille}deg)`; // Applique la rotation calculée

    return angle;
  }
}

function initRotation() {
  bouton.addEventListener("click", () => {
    randomValueRotation(); // Appeler turnWheel uniquement après le clic
  });
}

createWheelNumber();
initRotation();
