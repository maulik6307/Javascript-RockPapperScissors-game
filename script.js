let userscore = 0;
let compscore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice =()=>{
    const opt = ["rock","papper","scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return opt[randomIndex];
}

const drawGame = () => {
    msg.innerHTML = "Game was draw!! please play again";
    msg.style.backgroundColor = "rgb(20, 20, 48)";
}

showWin = (userWin) =>{
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerHTML = "You Win !";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerHTML = "You Lose !";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
     
        const compChoice = genCompChoice();
     

        if(userChoice === compChoice){
         
            drawGame();
        }
        else{
            let userWin = true;
            if(userChoice === "rock"){
                userWin = compChoice === "papper"?false:true;
            }
            else if(userChoice==="papper"){
                userWin = compChoice === "scissors"?false:true;
            }
            else if(userChoice==="scissors") {
                userWin=compChoice==="rock"?false:true;
            }
            showWin(userWin);
        }

    }


choices.forEach((choice)=>{
 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
    
        playGame(userChoice);
    });
})

const resetGame = document.querySelector("#reset").addEventListener("click",()=>{
    msg.innerHTML = "Let's Start Game , Pick any one !!!";
    msg.style.backgroundColor="rgb(20, 20, 48)";
    userScorePara.innerHTML = userscore=0;
    compScorePara.innerHTML= compscore=0;
});
