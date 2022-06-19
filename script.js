// const plays = ["rock", "paper", "scissors"];
// const rand = Math.floor(Math.random() * 3);

// const computerPlay = plays[rand];

// let player;
// let comp;

// game();

// function round(playerSelection, computerSelection) {
//   playerSelection = prompt("Enter your input:");
//   playerSel = playerSelection.toLowerCase();
//   if (playerSel == "rock" && computerSelection == "paper") {
//     console.log("Computer Wins! PAPER beats ROCK!");
//     comp += 1;
//   } else if (playerSel == "rock" && computerSelection == "scissors") {
//     console.log("You Win! ROCK beats SCISSORS!");
//     player += 1;
//   } else if (playerSel == "paper" && computerSelection == "rock") {
//     console.log("You Win! PAPER beats ROCK!");
//     player += 1;
//   } else if (playerSel == "paper" && computerSelection == "scissors") {
//     console.log("Computer Wins! SCISSORS beats PAPER!");
//     comp += 1;
//   } else if (playerSel == "scissors" && computerSelection == "paper") {
//     console.log("You Win! SCISSORS beats PAPER!");
//     player += 1;
//   } else if (playerSel == "scissors" && computerSelection == "rock") {
//     console.log("Computer Wins! ROCK beats SCISSORS!");
//     comp += 1;
//   } else {
//     console.log(
//       `Draw! ${playerSel.toUpperCase()} does nothing to ${computerSelection.toUpperCase()}!`
//     );
//   }
// }

// function game() {
//   comp = 0;
//   player = 0;
//   playerPlay = "";
//   for (let i = 0; i < 5; i++) {
//     round(playerPlay, computerPlay);
//   }
//   if (comp > player) return console.log("Computer Won The Game!");
//   if (player > comp) return console.log("You Won The Game!");
// }

const plays = ["rock", "paper", "scissors"];
const rand = Math.floor(Math.random() * 3);

const computerPlay = plays[rand];
