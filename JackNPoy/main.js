const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
const choices = document.querySelectorAll('button');

let choiceByUser

choices.forEach(picks => picks.addEventListener('click', (e) => {
    choiceByUser = e.target.id
    userChoice.textContent = choiceByUser
}))


