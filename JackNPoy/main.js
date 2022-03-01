const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
const choices = document.querySelectorAll('button');

let choiceByUser
let computerChoices
choices.forEach(picks => picks.addEventListener('click', (e) => {
    choiceByUser = e.target.id
    userChoice.textContent = choiceByUser
    generateComputerChoice()
    checkWhoWins()
}))



function generateComputerChoice(){
    let randomChouice = Math.floor(Math.random() * 3)
    if(randomChouice == 0){
        computerChoices = 'rock'
    }else if(randomChouice == 1){
        computerChoices = 'paper'
    }
    else{
        computerChoices = 'scissors'
    }
    computerChoice.textContent = computerChoices
}

function checkWhoWins(){
    if(choiceByUser == computerChoices){
        result.textContent = 'It\'s a tie'
    }
    else if(choiceByUser == 'rock'){
        if(computerChoices == 'paper'){
            result.textContent = 'You lose'
        }else{
            result.textContent = 'You win'
        }
    }
    else if(choiceByUser == 'paper'){
        if(computerChoices == 'scissors'){
            result.textContent = 'You lose'
        }else{
            result.textContent = 'You win'
        }
    }
    else if(choiceByUser == 'scissors'){
        if(computerChoices == 'rock'){
            result.textContent = 'You lose'
        }else{
            result.textContent = 'You win'
        }
    }
}