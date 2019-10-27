let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(user, computer){
    let smallUserWord = "user".fontsize(3);
    let smallCompWord = "comp".fontsize(3);
    let userChoice_div = document.getElementById(user);

    userScore++;
    userScore_span.innerHTML = userScore; 
    
    result_div.innerHTML = `${user}${smallUserWord} beats  ${computer}${smallCompWord}. You win!  🔥`
    
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),500);
}

function lose(user, computer){
    let smallUserWord = "user".fontsize(3);
    let smallCompWord = "comp".fontsize(3);
    let userChoice_div = document.getElementById(user);

    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${computer}${smallUserWord} beats  ${user}${smallCompWord}. You lost!  💩`

    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),500);
}

function draw(user, computer){
    let smallUserWord = "user".fontsize(3);
    let smallCompWord = "comp".fontsize(3);
    let userChoice_div = document.getElementById(user);

    result_div.innerHTML = `${user}${smallUserWord} vs ${computer}${smallCompWord}.. It's a tie!  👔`
    
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'),500);
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":   
        win(userChoice, computerChoice);
        break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
        lose(userChoice, computerChoice);
        break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
        draw(userChoice, computerChoice);
   }
}

function main() {
    rock_div.addEventListener('click', () => game("Rock"))
    paper_div.addEventListener('click', () => game("Paper"))
    scissors_div.addEventListener('click', () => game("Scissors")) 
}

main();
