/*--------------------------------------------------------RESULTATS*/
const buttonResult = document.getElementById("buttonResult");

function generateRandomResult() {
  const displayResult = document.getElementById("resultat");
  const resultat = Math.floor(Math.random() * 37);
  displayResult.innerHTML = "RESULTAT " + resultat;
  console.log("resultat " + resultat);
}

buttonResult.addEventListener("click", () => generateRandomResult());
