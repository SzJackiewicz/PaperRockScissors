const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const compChoice = document.querySelector(".comp_choice2");
const result = document.querySelector(".result2");

const scissorsClick = function () {
  const compRandom = Math.random();
  if (compRandom < 0.34) {
    return (compChoice.innerText = "NOŻYCE") + (result.innerText = "REMIS!");
  } else if (compRandom < 0.67) {
    return (compChoice.innerText = "PAPIER") + (result.innerText = "WYGRANA!!!");
  } else {
    return (compChoice.innerText = "KAMIEŃ")(result.innerText = "PORAŻKA!!!");
  }
};

const paperClick = function(){
    const compRandom = Math.random();
    if (compRandom < 0.34) {
      return (compChoice.innerText = "NOŻYCE") + (result.innerText = "PORAŻKA!!!");
    } else if (compRandom < 0.67) {
      return (compChoice.innerText = "PAPIER") + (result.innerText = "REMIS!");
    } else {
      return (compChoice.innerText = "KAMIEŃ")(result.innerText = "WYGRANA!!!");
    }
}

const rockClick = function(){
    const compRandom = Math.random();
    if (compRandom < 0.34) {
      return (compChoice.innerText = "NOŻYCE") + (result.innerText = "WYGRANA!!!");
    } else if (compRandom < 0.67) {
      return (compChoice.innerText = "PAPIER") + (result.innerText = "PORAŻKA!!!");
    } else {
      return (compChoice.innerText = "KAMIEŃ")(result.innerText = "REMIS!");
    }
}

scissors.addEventListener("click", scissorsClick);
paper.addEventListener("click", paperClick);
rock.addEventListener("click", rockClick);
