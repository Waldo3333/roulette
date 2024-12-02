const chiffrePlateau = document.getElementsByClassName("chiffre");

Array.from(chiffrePlateau).forEach(element => {
  const number = Number(element.id); // Convertir l'ID en nombre
  let colorClass = "";

  if (number === 0) {
    colorClass = "green"; // Le zéro est vert
  } else if (number >= 1 && number <= 10) {
    colorClass = number % 2 === 0 ? "black" : "red";
  } else if (number >= 11 && number <= 18) {
    colorClass = number % 2 === 0 ? "red" : "black";
  } else if (number >= 19 && number <= 28) {
    colorClass = number % 2 === 0 ? "black" : "red";
  } else {
    colorClass = number % 2 === 0 ? "red" : "black";
  }

  // Ajouter la classe correspondante
  element.classList.add(colorClass);
});
/*--------------------------------------------------------Création de la roue*/

/*let wheel = document.getElementById("rouletteWheel");
const td = document.getElementsByClassName("chiffre");



let plateau = document.getElementById("roulettePlateau");

plateauContent = "";
const numberOrdre = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];
const totalSlots = 36; // Nombre de cases
for (let i = 0; i <= totalSlots; i++) {}
let wheelContent = "";
const radius = 180; // Rayon du cercle
wheelContent = "";
for (let i = 0; i <= totalSlots; i++) {
  let angle = (360 / (totalSlots + 1)) * i; // Calcule l'angle pour chaque case
  let number = numberOrdre[i];
  let colorClass;

  if (number === 0) {
    colorClass = "green"; // Le zéro est vert
  } else if (number >= 1 && number <= 10) {
    colorClass = number % 2 === 0 ? "black" : "red";
  } else if (number >= 11 && number <= 18) {
    colorClass = number % 2 === 0 ? "red" : "black";
  } else if (number >= 19 && number <= 28) {
    colorClass = number % 2 === 0 ? "black" : "red";
  } else {
    colorClass = number % 2 === 0 ? "red" : "black";
  }
  wheelContent += `
      <div 
        class="slot ${colorClass}" 
        id="${number}"
        style="transform: rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg);"
      >
      ${number}
      </div>`;
}

wheel.innerHTML = wheelContent;*/
