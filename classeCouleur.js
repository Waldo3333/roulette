/*----------------------------------------------COULEUR CASES PLATEAU-------------------------------*/

const chiffrePlateau = document.getElementsByClassName("chiffre");

Array.from(chiffrePlateau).forEach(element => {
  /* Converti id de la case en nombre */
  const number = Number(element.id);
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

  element.classList.add(colorClass);
});
