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

// Score backgrounds
const scoreBackGrSpeler1 = document.querySelector(".punten #scoreSpeler1");
const scoreBackGrSpeler2 = document.querySelector(".punten #scoreSpeler2");
const scoreBackGrSpeler3 = document.querySelector(".punten #scoreSpeler3");
const scoreBackGrSpeler4 = document.querySelector(".punten #scoreSpeler4");


// Players names
const registerSpeler1 = () => {
    const speler1 = document.getElementById("speler1Input").value;
    document.getElementById("naamSpeler1").innerHTML = speler1;
    
    plusHSpeler1Button.removeAttribute("disabled");
    minHSpeler1Button.removeAttribute("disabled");
    plusDSpeler1Button.removeAttribute("disabled");
    minDSpeler1Button.removeAttribute("disabled");
    plusBonusSpeler1Button.removeAttribute("disabled");

    const headerSpeler1 = document.querySelector("#headerSpeler1");
    headerSpeler1.classList.remove("columnSpeler1");
    const naamSpeler1 = document.querySelector("#naamSpeler1");
    naamSpeler1.classList.remove("columnSpeler1");
    const scoreSpeler1 = document.querySelector("#scoreSpeler1");
    scoreSpeler1.classList.remove("columnSpeler1");
    
    scoreBackGrSpeler1.style.backgroundColor = ("rgb(155, 219, 253)");
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

    scoreBackGrSpeler2.style.backgroundColor = ("rgb(155, 219, 253)");
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

    scoreBackGrSpeler3.style.backgroundColor = ("rgb(155, 219, 253)");
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

    scoreBackGrSpeler4.style.backgroundColor = ("rgb(155, 219, 253)");
}
 
// Counters display
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

const counter1Display = document.getElementById("scoreSpeler1");
const counter2Display = document.getElementById("scoreSpeler2");
const counter3Display = document.getElementById("scoreSpeler3");
const counter4Display = document.getElementById("scoreSpeler4");

const resetButton = document.getElementById("reset");
  
// Adding and subtracting 100 / 500 / 1000: PLAYER 1
function plusHSpeler1() {
    counter1 += 100;
    counter1Display.innerText = counter1;
    resetButton.removeAttribute('disabled');
}
   
function minHSpeler1() {
    counter1 -= 100;
    counter1Display.innerText = counter1;
    resetButton.removeAttribute('disabled');
}

function plusDSpeler1() {
    counter1 += 1000;
    counter1Display.innerText = counter1;
    resetButton.removeAttribute('disabled');
}
   
function minDSpeler1() {
    counter1 -= 1000;
    counter1Display.innerText = counter1;    
    resetButton.removeAttribute('disabled');
}

function plusBonusSpeler1() {
    counter1 += 500;
    counter1Display.innerText = counter1;
    resetButton.removeAttribute('disabled');
}

// Adding and subtracting 100 / 500 / 1000: PLAYER 2
function plusHSpeler2() {
    counter2 += 100;
    counter2Display.innerText = counter2;
    resetButton.removeAttribute('disabled');
}
   
function minHSpeler2() {
    counter2 -= 100;
    counter2Display.innerText = counter2;
    resetButton.removeAttribute('disabled');
}

function plusDSpeler2() {
    counter2 += 1000;
    counter2Display.innerText = counter2;
    resetButton.removeAttribute('disabled');
}
   
function minDSpeler2() {
    counter2 -= 1000;
    counter2Display.innerText = counter2;
    resetButton.removeAttribute('disabled');
}

function plusBonusSpeler2() {
    counter2 += 500;
    counter2Display.innerText = counter2;
    resetButton.removeAttribute('disabled');
}

// Adding and subtracting 100 / 500 / 1000: PLAYER 3
function plusHSpeler3() {
    counter3 += 100;
    counter3Display.innerText = counter3;
    resetButton.removeAttribute('disabled');
}
   
function minHSpeler3() {
    counter3 -= 100;
    counter3Display.innerText = counter3;
    resetButton.removeAttribute('disabled');
}

function plusDSpeler3() {
    counter3 += 1000;
    counter3Display.innerText = counter3;
    resetButton.removeAttribute('disabled');
}
   
function minDSpeler3() {
    counter3 -= 1000;
    counter3Display.innerText = counter3;
    resetButton.removeAttribute('disabled');
}

function plusBonusSpeler3() {
    counter3 += 500;
    counter3Display.innerText = counter3;
    resetButton.removeAttribute('disabled');
}

// Adding and subtracting 100 / 500 / 1000: PLAYER 4
function plusHSpeler4() {
    counter4 += 100;
    counter4Display.innerText = counter4;
    resetButton.removeAttribute('disabled');
}
   
function minHSpeler4() {
    counter4 -= 100;
    counter4Display.innerText = counter4;
    resetButton.removeAttribute('disabled');
}   

function plusDSpeler4() {
    counter4 += 1000;
    counter4Display.innerText = counter4;
    resetButton.removeAttribute('disabled');
}
   
function minDSpeler4() {
    counter4 -= 1000;
    counter4Display.innerText = counter4;
    resetButton.removeAttribute('disabled');
}

function plusBonusSpeler4() {
    counter4 += 500;
    counter4Display.innerText = counter4;
    resetButton.removeAttribute('disabled');
}

// Reset scores
function resetScores() {
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    counter4 = 0;
   
    counter1Display.innerText = counter4;
    counter2Display.innerText = counter4;
    counter3Display.innerText = counter4;
    counter4Display.innerText = counter4;

    resetButton.setAttribute('disabled', true);
}
 