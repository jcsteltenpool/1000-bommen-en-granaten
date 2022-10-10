// Colors
const black = ("rgb(000, 000, 000)");
const white = ("rgb(255, 255, 255");
const lightBlue = "radial-gradient(rgb(135, 206, 250), transparent 60%)";
// "linear-gradient(-45deg, rgb(135, 206, 250), rgb(255, 255, 255) 25%, rgb(135, 206, 250))";
const red = "radial-gradient(rgb(255, 0, 0), transparent 60%)";
// "linear-gradient(-45deg, rgb(255, 0, 0), rgb(255, 120, 120) 25%, rgb(255, 0, 0))";
const gold = "radial-gradient(rgb(255, 215, 0), transparent 60%)";
// "linear-gradient(-45deg, rgb(218, 165, 32), rgb(255, 215, 0) 25%, rgb(218, 165, 32))"

// const gold = ("rgb(255, 215, 0)");
// const goldenRod = ("rgb(218, 165, 32)");

// Unlock players
const unlockPlayer1 = document.querySelector("#unlockPlayer1");
const unlockPlayer2 = document.querySelector("#unlockPlayer2");
const unlockPlayer3 = document.querySelector("#unlockPlayer3");
const unlockPlayer4 = document.querySelector("#unlockPlayer4");

unlockPlayer1.addEventListener('click', function() {
    unlockPlayer(0);
    buttonTextChange(0);
});
unlockPlayer2.addEventListener('click', function() {
    unlockPlayer(1);
    buttonTextChange(1);
});
unlockPlayer3.addEventListener('click', function() {
    unlockPlayer(2);    
    buttonTextChange(2);
});
unlockPlayer4.addEventListener('click', function() {
    unlockPlayer(3);
    buttonTextChange(3);
});

let pirateNames = ["Zwart&shy;baard", "Piet Piraat", "Aadje Piraatje", "Jack Sparrow", "Piraten&shy;prinses", "Kapitein Haddock"];

function giveRandomName() {
    let randomPirateName = Math.floor(Math.random() * pirateNames.length);
    return pirateNames[randomPirateName];
};

function unlockPlayer(i) {
    // (Re)name a player
    let namePlayer = document.getElementsByClassName("namePlayer")[i];
    let playerNameInput = document.getElementsByClassName("playerNameInput")[i].value;
    if (playerNameInput === "") {
        namePlayer.innerHTML = giveRandomName();
    } else {
        namePlayer.innerHTML = playerNameInput;
    };
    
    // namePlayer.innerHTML = playerNameInput;
    namePlayer.style.color = black;

    // Enable column and buttons
    let headerPlayer = document.getElementsByClassName("headerPlayer")[i];
    headerPlayer.style.color = black;

    let scorePlayer = document.getElementsByClassName("scorePlayer")[i];
    scorePlayer.style.background = lightBlue ;
    scorePlayer.style.color = black;
    
    let plus100 = document.getElementsByClassName("plus100")[i];
    let min100 = document.getElementsByClassName("min100")[i];
    let plus1000 = document.getElementsByClassName("plus1000")[i];
    let min1000 = document.getElementsByClassName("min1000")[i];
    let bonus = document.getElementsByClassName("bonus")[i];
    const allButtons = [scorePlayer, plus100, min100, plus1000, min1000, bonus];
    allButtons.forEach((button) => {
        button.removeAttribute('disabled');
    });
};

let newButtonTexts = ["Aaarghh!", "Yo ho ho!", "Enteren!", "Ahoy!"];

function textSelector() {
    let randomText = Math.floor(Math.random() * newButtonTexts.length);
    return newButtonTexts[randomText];
};

function buttonTextChange(i) {
    let joinedPlayer = document.getElementsByClassName("join")[i];
    joinedPlayer.innerHTML = textSelector();
};

// Change score
// Player 1
const plus100Player1 = document.querySelector("#plus100Player1");
const min100Player1 = document.querySelector("#min100Player1");
const plus1000Player1 = document.querySelector("#plus1000Player1");
const min1000Player1 = document.querySelector("#min1000Player1");
const plusBonusPlayer1 = document.querySelector("#plus500Player1");

plus100Player1.addEventListener('click', function() {
    changeScore(0, 100);
});
min100Player1.addEventListener('click', function() {
    changeScore(0, -100);
});
plus1000Player1.addEventListener('click', function() {
    changeScore(0, 1000);
});
min1000Player1.addEventListener('click', function() {
    changeScore(0, -1000);
});
plusBonusPlayer1.addEventListener('click', function() {
    changeScore(0, 500);
});

// Player 2
const plus100Player2 = document.querySelector("#plus100Player2");
const min100Player2 = document.querySelector("#min100Player2");
const plus1000Player2 = document.querySelector("#plus1000Player2");
const min1000Player2 = document.querySelector("#min1000Player2");
const plusBonusPlayer2 = document.querySelector("#plus500Player2");

plus100Player2.addEventListener('click', function() {
    changeScore(1, 100);
});
min100Player2.addEventListener('click', function() {
    changeScore(1, -100);
});
plus1000Player2.addEventListener('click', function() {
    changeScore(1, 1000);
});
min1000Player2.addEventListener('click', function() {
    changeScore(1, -1000);
});
plusBonusPlayer2.addEventListener('click', function() {
    changeScore(1, 500);
});

// Player 3
const plus100Player3 = document.querySelector("#plus100Player3");
const min100Player3 = document.querySelector("#min100Player3");
const plus1000Player3 = document.querySelector("#plus1000Player3");
const min1000Player3 = document.querySelector("#min1000Player3");
const plusBonusPlayer3 = document.querySelector("#plus500Player3");

plus100Player3.addEventListener('click', function() {
    changeScore(2, 100);
});
min100Player3.addEventListener('click', function() {
    changeScore(2, -100);
});
plus1000Player3.addEventListener('click', function() {
    changeScore(2, 1000);
});
min1000Player3.addEventListener('click', function() {
    changeScore(2, -1000);
});
plusBonusPlayer3.addEventListener('click', function() {
    changeScore(2, 500);
});

// Player 4
const plus100Player4 = document.querySelector("#plus100Player4");
const min100Player4 = document.querySelector("#min100Player4");
const plus1000Player4 = document.querySelector("#plus1000Player4");
const min1000Player4 = document.querySelector("#min1000Player4");
const plusBonusPlayer4 = document.querySelector("#plus500Player4");

plus100Player4.addEventListener('click', function() {
    changeScore(3, 100);
});
min100Player4.addEventListener('click', function() {
    changeScore(3, -100);
});
plus1000Player4.addEventListener('click', function() {
    changeScore(3, 1000);
});
min1000Player4.addEventListener('click', function() {
    changeScore(3, -1000);
});
plusBonusPlayer4.addEventListener('click', function() {
    changeScore(3, 500);
});

function changeScore(i, n) {
    resetButton.removeAttribute("disabled");
    let scorePlayer = document.getElementsByClassName("scorePlayer")[i];
    let currentScore = scorePlayer.valueAsNumber;
    let updatedScore = currentScore + n;
    scorePlayer.value = updatedScore;

    if (updatedScore >= 6000) {
        scorePlayer.style.background = gold;
    } else if (updatedScore >= 0 && updatedScore < 6000) {
        scorePlayer.style.background = lightBlue;
    } else if (updatedScore < 0) {
        scorePlayer.style.background = red;
    };
}
 
// Reset button
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', resetGame);

function resetGame() {
    let allPlayers = document.querySelectorAll(".scorePlayer");
    allPlayers.forEach((scorePlayer) => {
        if (!scorePlayer.disabled) {
            scorePlayer.value = 0;
            scorePlayer.style.background = lightBlue;
        };
    });
    resetButton.setAttribute('disabled', true);
};

// let inputPlayer3 = document.getElementById("inputPlayer3");
// let columnPlayer3 = document.querySelector(".player3");
// inputPlayer3.style.display = "none";
// columnPlayer3.style.display = "none";

// let inputPlayer4 = document.getElementById("inputPlayer4");
// let columnPlayer4 = document.querySelector(".player4");
// inputPlayer4.style.display = "none";
// columnPlayer4.style.display = "none";

