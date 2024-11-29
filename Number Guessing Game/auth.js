let guessValue = Math.floor((Math.random()*100)+1);
console.log(guessValue);
let chances = 5;
let gameStatus = 1;

function valueCheck(){
    let userValue = document.forms[0]['value'].value;
    if(userValue < 1 || userValue > 100){
        document.getElementById("hints").innerHTML = "Invalid Input!";
        return;
    }
    chances--;
    if(gameStatus == 1 && chances > 0){
        if(userValue > guessValue){
            document.getElementById("hints").innerHTML = "Your guess is higher than target!";
            document.getElementById("chances").innerHTML = "Chances: " + chances;
        }
        else if(userValue < guessValue){
            document.getElementById("hints").innerHTML = "Your guess is lower than target!";
            document.getElementById("chances").innerHTML = "Chances: " + chances;
        }
        else{
            document.getElementById("hints").innerHTML = "Your guess is correct, You Win!";
            document.getElementById("chances").innerHTML = "" ;
            document.getElementById("checkbtn").innerHTML = "Reset";
            gameStatus = 0;

        }
    }
    else{
        document.getElementById("checkbtn").innerHTML = "Reset";

        document.getElementById("chances").innerHTML = "";
    }
}

document.getElementById("checkbtn").onclick = function (){
    if(document.getElementById("checkbtn").innerHTML === "Reset"){
        resetGame();  
    } else {
        valueCheck();  
    }
};

function resetGame(){
    guessValue = Math.floor((Math.random()*100)+1);
    console.log(guessValue);
    gameStatus = 1;
    chances = 5;
    document.getElementById("value").value = "";
    document.getElementById("value").placeholder = "_ _";
    document.getElementById("hints").innerHTML = "Good Luck!";
    document.getElementById("chances").innerHTML = "Chances: " + chances;
    document.getElementById("checkbtn").innerHTML = "Check";
}