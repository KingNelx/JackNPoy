const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button'); 
let userChoice;
let computerChoice;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userDisplay.textContent = " User choice: " + userChoice;
}))
