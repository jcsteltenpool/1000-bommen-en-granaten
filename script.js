// Colors
const black = ("rgb(000, 000, 000)");
const white = ("rgb(255, 255, 255");
const lightBlue = "radial-gradient(rgb(135, 206, 250), transparent 60%)";
const red = "radial-gradient(rgb(255, 0, 0), transparent 60%)";
const gold = "radial-gradient(rgb(255, 215, 0), transparent 60%)";

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

let pirateNames = ["Zwartbaard", "Piet", "Aadje", "Sparrow", "Haddock"];

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
    
    namePlayer.classList.remove("disabled");
    namePlayer.classList.add("bounceIn");
    setTimeout(() => {
        namePlayer.classList.remove("bounceIn");
    }, 2500);

    // Enable column and buttons
    let headerPlayer = document.getElementsByClassName("headerPlayer")[i];
    headerPlayer.classList.remove("disabled");

    let scorePlayer = document.getElementsByClassName("scorePlayer")[i];
    scorePlayer.style.background = lightBlue ;
    scorePlayer.classList.remove("disabled");
    
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

// Hide & reveal column 3 and 4
let inputPlayer1 = document.getElementById("inputPlayer1");
let inputPlayer2 = document.getElementById("inputPlayer2");
let inputPlayer3 = document.getElementById("inputPlayer3");
let inputPlayer4 = document.getElementById("inputPlayer4");

let columnPlayer3 = document.getElementById("columnPlayer3");
let columnPlayer4 = document.getElementById("columnPlayer4");

let addPlayer3 = document.getElementById("addPlayer3");
let addPlayer4 = document.getElementById("addPlayer4");

let scorePlayer = document.querySelectorAll("input.scorePlayer");
let h3 = document.querySelectorAll("h3");
let p = document.querySelectorAll("p");

let showInputContainer = document.getElementById("showInputContainer");
let hideInputContainer = document.getElementById("hideInputContainer")

// Starting point
inputPlayer3.hidden = true;
columnPlayer3.hidden = true;
inputPlayer4.hidden = true;
columnPlayer4.hidden = true;

addPlayer4.hidden = true;
showInputContainer.hidden = true;
hideInputContainer.hidden = true;

function revealPlayer3() {
    inputPlayer3.hidden = false;
    columnPlayer3.hidden = false;
    addPlayer3.hidden = true;
    addPlayer4.hidden = false;
    h3.forEach((el) => {
        el.classList.add("heading-fontsize-3players");
    });
    scorePlayer.forEach((score) => {
        score.classList.replace("score-fontsize-2players", "score-fontsize-3players");
    });
};

function revealPlayer4() {
    inputPlayer4.hidden = false;
    columnPlayer4.hidden = false;
    addPlayer4.hidden = true;
    hideInputContainer.hidden = false;
    h3.forEach((el) => {
        el.classList.replace("heading-fontsize-3players", "heading-fontsize-4players");
    });
    p.forEach((el) => {
        el.classList.add("heading-fontsize-4players");
    });
    scorePlayer.forEach((score) => {
        score.classList.replace("score-fontsize-3players", "score-fontsize-4players");
    });
};

addPlayer3.addEventListener('click', revealPlayer3);
addPlayer4.addEventListener('click', revealPlayer4);

// Hide & show all inputs
showInputContainer.addEventListener('click', showAllInputs);
hideInputContainer.addEventListener('click', hideAllInputs);

function hideAllInputs() {
    inputPlayer1.hidden = true;
    inputPlayer2.hidden = true;
    inputPlayer3.hidden = true;
    inputPlayer4.hidden = true;
    showInputContainer.hidden = false;
    hideInputContainer.hidden = true;
}

function showAllInputs() {
    inputPlayer1.hidden = false;
    inputPlayer2.hidden = false;
    inputPlayer3.hidden = false;
    inputPlayer4.hidden = false;
    showInputContainer.hidden = true;
    hideInputContainer.hidden = false;
}

