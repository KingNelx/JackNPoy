const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;
choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userDisplay.textContent = " User choice: " + userChoice;
    computerGuess();
    checkResult();
}))

function computerGuess(){
    let random = Math.floor(Math.random() * 3);
    if (random == 0){
        computerChoice = "rock";
    } else if (random == 1){
        computerChoice = "paper";
    } else if (random == 2) {
        computerChoice = "scissors";
    }
    computerDisplay.textContent = " Computer choice: " + computerChoice;
}

function checkResult(){
    if (userChoice == computerChoice){
        result = "Its a Tie";
    } else if (userChoice == "rock"){
        if (computerChoice == "paper"){
            result = "Computer wins";
        } else {
            result = "User wins";
        }
    } else if (userChoice == "paper"){
        if (computerChoice == "scissors"){
            result = "Computer wins";
        } else {
            result = "User wins";
        }
    } else if (userChoice == "scissors"){
        if (computerChoice == "rock"){
            result = "Computer wins";
        } else {
            result = "User wins";
        }
    }
    resultDisplay.textContent = "Result: " + result;
}
