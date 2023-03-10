let playerPlay = document.querySelector(".playerplayed");
let computerplayed = document.querySelector(".computerplayed");
let theWinner = document.querySelector(".winner");
let playerCount = document.querySelector(".playercounts");
let computercount = document.querySelector(".computercounts");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let computercounter = 0;
let playerCounter = 0;
let computerChoice;

function computer() {
  let num = Math.trunc(Math.random() * 3 + 1);

  if (num == 1) {
    computerChoice = "Rock";
  } else if (num == 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  computerplayed.textContent = computerChoice;
}

function winner() {
  if (
    (playerPlay.textContent == "Rock" &&
      computerplayed.textContent == "Paper") ||
    (playerPlay.textContent == "Paper" &&
      computerplayed.textContent == "Scissors") ||
    (playerPlay.textContent == "Scissors" &&
      computerplayed.textContent == "Rock")
  ) {
    theWinner.textContent = "Computer Wins";
    computercounter++;
    computercount.textContent = computercounter;
  } else if (
    (computerplayed.textContent == "Rock" &&
      playerPlay.textContent == "Paper") ||
    (computerplayed.textContent == "Paper" &&
      playerPlay.textContent == "Scissors") ||
    (computerplayed.textContent == "Scissors" &&
      playerPlay.textContent == "Rock")
  ) {
    theWinner.textContent = "Player Wins";
    playerCounter++;
    playerCount.textContent = playerCounter;
  } else {
    theWinner.textContent = "It's a tie !!";
  }
}

rock.addEventListener("click", function () {
  playerPlay.textContent = rock.textContent;
  computer();
  winner();
});
paper.addEventListener("click", function () {
  playerPlay.textContent = paper.textContent;
  computer();
  winner();
});
scissors.addEventListener("click", function () {
  playerPlay.textContent = scissors.textContent;
  computer();
  winner();
});