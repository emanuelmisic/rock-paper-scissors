const plays = ["rock", "paper", "scissors"];
const rand = Math.floor(Math.random() * 3);

const computerPlay = plays[rand];

let player;
let comp;
let count;

// DOM Elements
const score = document.querySelector(".score");
const state = document.querySelector(".status");
const message = document.querySelector(".message");
const gameTrack = document.querySelector(".game-track");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const finalScore = document.querySelector("#final");

// Initialization
rockBtn.addEventListener("click", () => {
  const selection = rockBtn.id;
  round(selection, computerPlay);
});
paperBtn.addEventListener("click", () => {
  const selection = paperBtn.id;
  round(selection, computerPlay);
});
scissorsBtn.addEventListener("click", () => {
  const selection = scissorsBtn.id;
  round(selection, computerPlay);
});

// The Game
game();

// Function Section
function round(playerSelection, computerSelection) {
  playerSel = playerSelection.toLowerCase();
  if (playerSel == "rock" && computerSelection == "paper") {
    state.innerHTML = "Computer Wins!";
    message.innerHTML = "PAPER beats ROCK!";
    comp++;
    count++;
    updateScore(player, comp, count);
  } else if (playerSel == "rock" && computerSelection == "scissors") {
    state.innerHTML = "You win!";
    message.innerHTML = "ROCK beats SCISSORS!";
    player++;
    count++;
    updateScore(player, comp, count);
  } else if (playerSel == "paper" && computerSelection == "rock") {
    state.innerHTML = "You win!";
    message.innerHTML = "PAPER beats ROCK!";
    player++;
    count++;
    updateScore(player, comp, count);
  } else if (playerSel == "paper" && computerSelection == "scissors") {
    state.innerHTML = "Computer Wins!";
    message.innerHTML = "SCISSORS beats PAPER!";
    comp++;
    count++;
    updateScore(player, comp, count);
  } else if (playerSel == "scissors" && computerSelection == "paper") {
    state.innerHTML = "You win!";
    message.innerHTML = "SCISSORS beats PAPER!";
    player++;
    count++;
    updateScore(player, comp, count);
  } else if (playerSel == "scissors" && computerSelection == "rock") {
    state.innerHTML = "Computer Wins!";
    message.innerHTML = "ROCK beats SCISSORS!";
    comp++;
    count++;
    updateScore(player, comp, count);
  } else {
    state.innerHTML = "No win!";
    message.innerHTML = `Draw! ${playerSel.toUpperCase()} does nothing to ${computerSelection.toUpperCase()}!`;
    count++;
    updateScore(player, comp, count);
  }
}

function updateScore(player, computer, gameNum) {
  score.innerHTML = `Computer: ${computer} | Player: ${player}`;
  gameTrack.innerHTML = `Game: ${gameNum}`;
  if (count == 5) {
    if (computer > player) {
      finalScore.innerHTML = "Computer Won The Game!";
      game();
    } else if (player > computer) {
      finalScore.innerHTML = "You Won The Game!";
      game();
    } else {
      finalScore.innerHTML = "No Winner This Time!";
      game();
    }
  }
}

function game() {
  player = count = comp = 0;
  updateScore(player, comp, count);
}
