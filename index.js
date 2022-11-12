let computerSelection; 
let playerSelection; 
let computerScore = 0;
let playerScore = 0;
let index;

let restartBtn = document.createElement("div");
restartBtn.innerHTML = "RESTART THE GAME";
restartBtn.setAttribute("id", "restartbutton");

let playerScoreInsideScore = document.createElement('div');
playerScoreInsideScore.setAttribute("id", "playerscore");

let computerScoreInsideScore = document.createElement('div');
computerScoreInsideScore.setAttribute("id", "computerscore");

let resultsOfTheRound = document.createElement('div');
resultsOfTheRound.setAttribute("id", "results");

playerPlay();

function computerPlay(){
    let x = Math.floor(Math.random() * 3);
    if(x == 0){
        return("rock");
    } else if(x == 1){
        return("paper");
    } else{
        return("scissors");
    }
}

function playerPlay(){
    index = 1;
    document.getElementById('score').appendChild(computerScoreInsideScore);
    document.getElementById('score').appendChild(playerScoreInsideScore);
    document.getElementById('playerscore').textContent = "Player score is " + playerScore;
    document.getElementById('computerscore').textContent = "Computer score is " + computerScore;
    document.getElementById('btnRock').addEventListener('click', remover1);
    document.getElementById('btnPaper').addEventListener('click', remover2);
    document.getElementById('btnScissors').addEventListener('click', remover3); 
}

function restartGame(){
    document.getElementById('score').appendChild(restartBtn);
    index = 0;
    document.getElementById('score').style.fontWeight = "normal";
    document.getElementById('restartbutton').addEventListener('click', function remover(){
        playerScore = 0;
        computerScore = 0;
        document.getElementById('score').removeChild(restartBtn);
        document.getElementById('score').textContent = "";
        document.getElementById('btnScissors').removeEventListener('click', remover1);
        document.getElementById('btnRock').removeEventListener('click', remover2);
        document.getElementById('btnPaper').removeEventListener('click', remover3);
        index = 0;
        playerPlay();
    });
}

function playRound(computerSelection, playerSelection){
    if(computerSelection == "rock" && playerSelection == "rock" ||  computerSelection == "paper" && playerSelection == "paper"  || computerSelection == "scissors" && playerSelection == "scissors"){
        resultsOfTheRound.textContent = "tie";
        document.body.appendChild(resultsOfTheRound);
    }else if(computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        resultsOfTheRound.textContent = "player wins";
        document.body.appendChild(resultsOfTheRound);
        playerScore++;
    }else if (computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "rock" && playerSelection == "scissors"){
        resultsOfTheRound.textContent = "computer wins";
        document.body.appendChild(resultsOfTheRound);
        computerScore++;
    }
    
    if(computerScore < 3 && playerScore < 3) {
        document.getElementById('playerscore').textContent = "Player score is " + playerScore;
        document.getElementById('computerscore').textContent = "Computer score is " + computerScore;
    } else if(computerScore == 3) {
        document.getElementById('score').style.fontWeight = "bold";
        document.getElementById('score').textContent = "Computer wins";
        resultsOfTheRound.textContent = "";
        document.getElementById('btnScissors').removeEventListener('click', remover1);
        document.getElementById('btnRock').removeEventListener('click', remover2);
        document.getElementById('btnPaper').removeEventListener('click', remover3);
        index *= 0;
        restartGame();
    } else if(playerScore == 3) {
        document.getElementById('score').style.fontWeight = "bold";
        document.getElementById('score').textContent = "Player wins";
        resultsOfTheRound.textContent = "";
        document.getElementById('btnScissors').removeEventListener('click', remover1);
        document.getElementById('btnRock').removeEventListener('click', remover2);
        document.getElementById('btnPaper').removeEventListener('click', remover3);
        index *= 0;
        restartGame();
    }
}

function remover1(){
    if(index != 0){
        playerSelection = "rock";
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        return;
    }
}

function remover2(){
    if(index != 0){
        playerSelection = "paper";
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        return;
    }
}

function remover3(){
    if(index != 0){
        playerSelection = "scissors";
        computerSelection = computerPlay();
        playRound(computerSelection, playerSelection);
        return;
    }
}