'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

document.querySelector(".check").addEventListener("click", function() {

    let guess = Number(document.querySelector(".guess").value);

    if(score == 0) return;

    if(!guess) {
        
        document.querySelector(".message").textContent = "No Number... 😢";
    } else if (guess == secretNumber) {
        document.querySelector(".message").textContent = "Correct!...";

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        document.querySelector(".number").textContent = secretNumber;

        if(score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too High!...";
        if(score > 1) {
            document.querySelector(".score").
            textContent = --score;
        } else {
            document.querySelector(".message").
            textContent = "You Lose!";
            document.querySelector(".score").
            textContent = 0;
            score--;
        }
    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "Too Low!...";
        if(score > 1) {
            document.querySelector(".score").
            textContent = --score;
        } else {
            document.querySelector(".message").
            textContent = "You Lose!";
            document.querySelector(".score").
            textContent = 0;
            score--;
        }
    }
})



document.querySelector(".again").addEventListener("click", function() {

    score = 20;

    document.querySelector(".score").textContent = score;

    document.querySelector(".guess").value = "";

    document.querySelector(".number").textContent = "?";

    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector("body").style.backgroundColor = "#222222";

    document.querySelector(".number").style.width = "15rem";

    document.querySelector(".message").textContent = "Start guessing...";
})