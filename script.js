// Buttons player 1
const plusHSpeler1Button = document.getElementById("+100Speler1");
const minHSpeler1Button = document.getElementById("-100Speler1");
const plusDSpeler1Button = document.getElementById("+1000Speler1");
const minDSpeler1Button = document.getElementById("-1000Speler1");
const plusBonusSpeler1Button = document.getElementById("+500Speler1");
const columnSpeler1 = document.getElementsByClassName("columnSpeler1");
// Buttons player 2
const plusHSpeler2Button = document.getElementById("+100Speler2");
const minHSpeler2Button = document.getElementById("-100Speler2");
const plusDSpeler2Button = document.getElementById("+1000Speler2");
const minDSpeler2Button = document.getElementById("-1000Speler2");
const plusBonusSpeler2Button = document.getElementById("+500Speler2");
// Buttons player 3
const plusHSpeler3Button = document.getElementById("+100Speler3");
const minHSpeler3Button = document.getElementById("-100Speler3");
const plusDSpeler3Button = document.getElementById("+1000Speler3");
const minDSpeler3Button = document.getElementById("-1000Speler3");
const plusBonusSpeler3Button = document.getElementById("+500Speler3");
// Buttons player 4
const plusHSpeler4Button = document.getElementById("+100Speler4");
const minHSpeler4Button = document.getElementById("-100Speler4");
const plusDSpeler4Button = document.getElementById("+1000Speler4");
const minDSpeler4Button = document.getElementById("-1000Speler4");
const plusBonusSpeler4Button = document.getElementById("+500Speler4");

// Scores
const scoreSpeler1 = document.querySelector("#scoreSpeler1");
const scoreSpeler2 = document.querySelector("#scoreSpeler2");
const scoreSpeler3 = document.querySelector("#scoreSpeler3");
const scoreSpeler4 = document.querySelector("#scoreSpeler4");

const resetButton = document.getElementById("reset");

// Registreer & activeer spelers
const registerSpeler1 = () => {
    const speler1 = document.getElementById("speler1Input").value;
    document.getElementById("naamSpeler1").innerText = speler1;
    
    plusHSpeler1Button.removeAttribute("disabled");
    minHSpeler1Button.removeAttribute("disabled");
    plusDSpeler1Button.removeAttribute("disabled");
    minDSpeler1Button.removeAttribute("disabled");
    plusBonusSpeler1Button.removeAttribute("disabled");

    const headerSpeler1 = document.querySelector("#headerSpeler1");
    headerSpeler1.classList.remove("columnSpeler1");
    const naamSpeler1 = document.querySelector("#naamSpeler1");
    naamSpeler1.classList.remove("columnSpeler1");
    scoreSpeler1.classList.remove("columnSpeler1");
    scoreSpeler1.removeAttribute('disabled');
    
    scoreSpeler1.style.backgroundColor = ("rgb(155, 219, 253)");
}
   
const registerSpeler2 = () => {
    const speler2 = document.getElementById("speler2Input").value;
    document.getElementById("naamSpeler2").innerHTML = speler2;
    
    plusHSpeler2Button.removeAttribute("disabled");
    minHSpeler2Button.removeAttribute("disabled");
    plusDSpeler2Button.removeAttribute("disabled");
    minDSpeler2Button.removeAttribute("disabled");
    plusBonusSpeler2Button.removeAttribute("disabled");

    const headerSpeler2 = document.querySelector("#headerSpeler2");
    headerSpeler2.classList.remove("columnSpeler2");
    const naamSpeler2 = document.querySelector("#naamSpeler2");
    naamSpeler2.classList.remove("columnSpeler2");
    const scoreSpeler2 = document.querySelector("#scoreSpeler2");
    scoreSpeler2.classList.remove("columnSpeler2");
    scoreSpeler2.removeAttribute('disabled');


    scoreSpeler2.style.backgroundColor = ("rgb(155, 219, 253)");
}
   
const registerSpeler3 = () => {
    const speler3 = document.getElementById("speler3Input").value;
    document.getElementById("naamSpeler3").innerHTML = speler3;
    
    plusHSpeler3Button.removeAttribute("disabled");
    minHSpeler3Button.removeAttribute("disabled");
    plusDSpeler3Button.removeAttribute("disabled");
    minDSpeler3Button.removeAttribute("disabled");
    plusBonusSpeler3Button.removeAttribute("disabled");

    const headerSpeler3 = document.querySelector("#headerSpeler3");
    headerSpeler3.classList.remove("columnSpeler3");
    const naamSpeler3 = document.querySelector("#naamSpeler3");
    naamSpeler3.classList.remove("columnSpeler3");
    const scoreSpeler3 = document.querySelector("#scoreSpeler3");
    scoreSpeler3.classList.remove("columnSpeler3");
    scoreSpeler3.removeAttribute('disabled');

    scoreSpeler3.style.backgroundColor = ("rgb(155, 219, 253)");
}

const registerSpeler4 = () => {
    const speler4 = document.getElementById("speler4Input").value;
    document.getElementById("naamSpeler4").innerHTML = speler4;
    
    plusHSpeler4Button.removeAttribute("disabled");
    minHSpeler4Button.removeAttribute("disabled");
    plusDSpeler4Button.removeAttribute("disabled");
    minDSpeler4Button.removeAttribute("disabled");
    plusBonusSpeler4Button.removeAttribute("disabled");

    const headerSpeler4 = document.querySelector("#headerSpeler4");
    headerSpeler4.classList.remove("columnSpeler4");
    const naamSpeler4 = document.querySelector("#naamSpeler4");
    naamSpeler4.classList.remove("columnSpeler4");
    const scoreSpeler4 = document.querySelector("#scoreSpeler4");
    scoreSpeler4.classList.remove("columnSpeler4");
    scoreSpeler4.removeAttribute('disabled');

    scoreSpeler4.style.backgroundColor = ("rgb(155, 219, 253)");
}

  
// PLAYER 1
plusHSpeler1Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler1 = scoreSpeler1.valueAsNumber;
    let updatedScoreSpeler1 = currentScoreSpeler1 + 100;
    
    scoreSpeler1.value = updatedScoreSpeler1;
    
    if (updatedScoreSpeler1 >= 6000) {
        scoreSpeler1.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler1 >= 0) {
        scoreSpeler1.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

minHSpeler1Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler1 = scoreSpeler1.valueAsNumber;
    let updatedScoreSpeler1 = currentScoreSpeler1 - 100;
    
    scoreSpeler1.value = updatedScoreSpeler1;
    
    if (updatedScoreSpeler1 < 6000) {
        scoreSpeler1.style.backgroundColor = ("rgb(155, 219, 253)");
    };
    if (updatedScoreSpeler1 < 0) {
        scoreSpeler1.style.backgroundColor = ("rgb(255, 120, 120)");
    };
});

plusDSpeler1Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler1 = scoreSpeler1.valueAsNumber;
    let updatedScoreSpeler1 = currentScoreSpeler1 + 1000;
    
    scoreSpeler1.value = updatedScoreSpeler1;
    
    if (updatedScoreSpeler1 >= 6000) {
        scoreSpeler1.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler1 >= 0) {
        scoreSpeler1.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

minDSpeler1Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler1 = scoreSpeler1.valueAsNumber;
    let updatedScoreSpeler1 = currentScoreSpeler1 - 1000;
    
    scoreSpeler1.value = updatedScoreSpeler1;
    
    if (updatedScoreSpeler1 < 6000) {
        scoreSpeler1.style.backgroundColor = ("rgb(155, 219, 253)");
    };
    if (updatedScoreSpeler1 < 0) {
        scoreSpeler1.style.backgroundColor = ("rgb(255, 120, 120)");
    };
});

plusBonusSpeler1Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler1 = scoreSpeler1.valueAsNumber;
    let updatedScoreSpeler1 = currentScoreSpeler1 + 500;
    
    scoreSpeler1.value = updatedScoreSpeler1;
    
    if (updatedScoreSpeler1 >= 6000) {
        scoreSpeler1.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler1 >= 0) {
        scoreSpeler1.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});


// PLAYER 2
plusHSpeler2Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler2 = scoreSpeler2.valueAsNumber;
    let updatedScoreSpeler2 = currentScoreSpeler2 + 100;
    
    scoreSpeler2.value = updatedScoreSpeler2;
    
    if (updatedScoreSpeler2 >= 6000) {
        scoreSpeler2.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler2 >= 0) {
        scoreSpeler2.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

minHSpeler2Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler2 = scoreSpeler2.valueAsNumber;
    let updatedScoreSpeler2 = currentScoreSpeler2 - 100;
    
    scoreSpeler2.value = updatedScoreSpeler2;
    
    if (updatedScoreSpeler2 < 6000) {
        scoreSpeler2.style.backgroundColor = ("rgb(155, 219, 253)");
    };
    if (updatedScoreSpeler2 < 0) {
        scoreSpeler2.style.backgroundColor = ("rgb(255, 120, 120)");
    };
});

plusDSpeler2Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler2 = scoreSpeler2.valueAsNumber;
    let updatedScoreSpeler2 = currentScoreSpeler2 + 1000;
    
    scoreSpeler2.value = updatedScoreSpeler2;
    
    if (updatedScoreSpeler2 >= 6000) {
        scoreSpeler2.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler2 >= 0) {
        scoreSpeler2.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

minDSpeler2Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler2 = scoreSpeler2.valueAsNumber;
    let updatedScoreSpeler2 = currentScoreSpeler2 - 1000;
    
    scoreSpeler2.value = updatedScoreSpeler2;
    
    if (updatedScoreSpeler2 < 6000) {
        scoreSpeler2.style.backgroundColor = ("rgb(155, 219, 253)");
    };
    if (updatedScoreSpeler2 < 0) {
        scoreSpeler2.style.backgroundColor = ("rgb(255, 120, 120)");
    };
});

plusBonusSpeler2Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler2 = scoreSpeler2.valueAsNumber;
    let updatedScoreSpeler2 = currentScoreSpeler2 + 500;
    
    scoreSpeler2.value = updatedScoreSpeler2;
    
    if (updatedScoreSpeler2 >= 6000) {
        scoreSpeler2.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler1 >= 0) {
        scoreSpeler2.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

// PLAYER 3
plusHSpeler3Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler3 = scoreSpeler3.valueAsNumber;
    let updatedScoreSpeler3 = currentScoreSpeler3 + 100;
    
    scoreSpeler3.value = updatedScoreSpeler3;
    
    if (updatedScoreSpeler3 >= 6000) {
        scoreSpeler3.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler3 >= 0) {
        scoreSpeler3.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

minHSpeler3Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler3 = scoreSpeler3.valueAsNumber;
    let updatedScoreSpeler3 = currentScoreSpeler3 - 100;
    
    scoreSpeler3.value = updatedScoreSpeler3;
    
    if (updatedScoreSpeler3 < 6000) {
        scoreSpeler3.style.backgroundColor = ("rgb(155, 219, 253)");
    };
    if (updatedScoreSpeler3 < 0) {
        scoreSpeler3.style.backgroundColor = ("rgb(255, 120, 120)");
    };
});

plusDSpeler3Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler3 = scoreSpeler3.valueAsNumber;
    let updatedScoreSpeler3 = currentScoreSpeler3 + 1000;
    
    scoreSpeler3.value = updatedScoreSpeler3;
    
    if (updatedScoreSpeler3 >= 6000) {
        scoreSpeler3.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler3 >= 0) {
        scoreSpeler3.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

minDSpeler3Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler3 = scoreSpeler3.valueAsNumber;
    let updatedScoreSpeler3 = currentScoreSpeler3 - 1000;
    
    scoreSpeler3.value = updatedScoreSpeler3;
    
    if (updatedScoreSpeler3 < 6000) {
        scoreSpeler3.style.backgroundColor = ("rgb(155, 219, 253)");
    };
    if (updatedScoreSpeler3 < 0) {
        scoreSpeler3.style.backgroundColor = ("rgb(255, 120, 120)");
    };
});

plusBonusSpeler3Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler3 = scoreSpeler3.valueAsNumber;
    let updatedScoreSpeler3 = currentScoreSpeler3 + 500;
    
    scoreSpeler3.value = updatedScoreSpeler3;
    
    if (updatedScoreSpeler3 >= 6000) {
        scoreSpeler3.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler3 >= 0) {
        scoreSpeler3.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

// PLAYER 4
plusHSpeler4Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler4 = scoreSpeler4.valueAsNumber;
    let updatedScoreSpeler4 = currentScoreSpeler4 + 100;
    
    scoreSpeler4.value = updatedScoreSpeler4;
    
    if (updatedScoreSpeler4 >= 6000) {
        scoreSpeler4.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler4 >= 0) {
        scoreSpeler4.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

minHSpeler4Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler4 = scoreSpeler4.valueAsNumber;
    let updatedScoreSpeler4 = currentScoreSpeler4 - 100;
    
    scoreSpeler4.value = updatedScoreSpeler4;
    
    if (updatedScoreSpeler4 < 6000) {
        scoreSpeler4.style.backgroundColor = ("rgb(155, 219, 253)");
    };
    if (updatedScoreSpeler4 < 0) {
        scoreSpeler4.style.backgroundColor = ("rgb(255, 120, 120)");
    };
});

plusDSpeler4Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler4 = scoreSpeler4.valueAsNumber;
    let updatedScoreSpeler4 = currentScoreSpeler4 + 1000;
    
    scoreSpeler4.value = updatedScoreSpeler4;
    
    if (updatedScoreSpeler4 >= 6000) {
        scoreSpeler4.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler4 >= 0) {
        scoreSpeler4.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

minDSpeler4Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler4 = scoreSpeler4.valueAsNumber;
    let updatedScoreSpeler4 = currentScoreSpeler4 - 1000;
    
    scoreSpeler4.value = updatedScoreSpeler4;
    
    if (updatedScoreSpeler4 < 6000) {
        scoreSpeler4.style.backgroundColor = ("rgb(155, 219, 253)");
    };
    if (updatedScoreSpeler4 < 0) {
        scoreSpeler4.style.backgroundColor = ("rgb(255, 120, 120)");
    };
});

plusBonusSpeler4Button.addEventListener('click', () => {
    resetButton.removeAttribute('disabled');
    let currentScoreSpeler4 = scoreSpeler4.valueAsNumber;
    let updatedScoreSpeler4 = currentScoreSpeler4 + 500;
    
    scoreSpeler4.value = updatedScoreSpeler4;
    
    if (updatedScoreSpeler4 >= 6000) {
        scoreSpeler4.style.backgroundColor = ("rgb(255, 215, 0)");
    } else if (updatedScoreSpeler4 >= 0) {
        scoreSpeler4.style.backgroundColor = ("rgb(155, 219, 253)");
    };
});

 
resetButton.addEventListener('click', () => {
    resetButton.setAttribute('disabled', true);
    
    if (scoreSpeler1.disabled) {
        scoreSpeler1.style.backgroundColor = ("rgb(193, 193, 193)");
    } else {
        scoreSpeler1.value = 0;
        scoreSpeler1.style.backgroundColor = ("rgb(155, 219, 253)");
    };

    if (scoreSpeler2.disabled) {
        scoreSpeler2.style.backgroundColor = ("rgb(193, 193, 193)");
    } else {
        scoreSpeler2.value = 0;
        scoreSpeler2.style.backgroundColor = ("rgb(155, 219, 253)");
    };

    if (scoreSpeler3.disabled) {
        scoreSpeler3.style.backgroundColor = ("rgb(193, 193, 193)");
    } else {
        scoreSpeler3.value = 0;
        scoreSpeler3.style.backgroundColor = ("rgb(155, 219, 253)");
    };

    if (scoreSpeler4.disabled) {
        scoreSpeler4.style.backgroundColor = ("rgb(193, 193, 193)");
    } else {
        scoreSpeler4.value = 0;
        scoreSpeler4.style.backgroundColor = ("rgb(155, 219, 253)");
    };
})

