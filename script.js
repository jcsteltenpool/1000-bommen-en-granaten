function registerSpeler1() {
    var speler1 = document.getElementById("speler1Input").value;
   
    document.getElementById("naamSpeler1").innerHTML = speler1;
   }
   
function registerSpeler2() {
    var speler2 = document.getElementById("speler2Input").value;
   
   document.getElementById("naamSpeler2").innerHTML = speler2;
   }
   
function registerSpeler3() {
    var speler3 = document.getElementById("speler3Input").value;
   
   document.getElementById("naamSpeler3").innerHTML = speler3;
   }

function registerSpeler4() {
    var speler4 = document.getElementById("speler4Input").value;
   
   document.getElementById("naamSpeler4").innerHTML = speler4;
   }
   
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
   
function plusHSpeler1() {
    counter1  = counter1 + 100;
   
    document.getElementById("scoreSpeler1").innerHTML = counter1;
   }
   
function minHSpeler1() {
    counter1  = counter1 - 100;
   
    document.getElementById("scoreSpeler1").innerHTML = counter1;
   }


function plusHSpeler2() {
    counter2  = counter2 + 100;
   
    document.getElementById("scoreSpeler2").innerHTML = counter2;
   }
   
function minHSpeler2() {
    counter2  = counter2 - 100;
   
    document.getElementById("scoreSpeler2").innerHTML = counter2;
   }


function plusHSpeler3() {
    counter3  = counter3 + 100;
   
    document.getElementById("scoreSpeler3").innerHTML = counter3;
   }
   
function minHSpeler3() {
    counter3  = counter3 - 100;
   
    document.getElementById("scoreSpeler3").innerHTML = counter3;
   }


function plusHSpeler4() {
    counter4  = counter4 + 100;
   
    document.getElementById("scoreSpeler4").innerHTML = counter4;
   }
   
function minHSpeler4() {
    counter4  = counter4 - 100;
   
    document.getElementById("scoreSpeler4").innerHTML = counter4;
   }   

function plusDSpeler1() {
    counter1  = counter1 + 1000;
   
    document.getElementById("scoreSpeler1").innerHTML = counter1;
   }
   
function minDSpeler1() {
    counter1 = counter1 - 1000;
   
    document.getElementById("scoreSpeler1").innerHTML = counter1;
   }


function plusDSpeler2() {
    counter2 = counter2 + 1000;
   
    document.getElementById("scoreSpeler2").innerHTML = counter2;
   }
   
function minDSpeler2() {
    counter2 = counter2 - 1000;
   
    document.getElementById("scoreSpeler2").innerHTML = counter2;
   }


function plusDSpeler3() {
    counter3 = counter3 + 1000;
   
    document.getElementById("scoreSpeler3").innerHTML = counter3;
   }
   
function minDSpeler3() {
    counter3 = counter3 - 1000;
   
    document.getElementById("scoreSpeler3").innerHTML = counter3;
   }


function plusDSpeler4() {
    counter4  = counter4 + 1000;
   
    document.getElementById("scoreSpeler4").innerHTML = counter4;
   }
   
function minDSpeler4() {
    counter4  = counter4 - 1000;
   
    document.getElementById("scoreSpeler4").innerHTML = counter4;
   }



function plusBonusSpeler1() {
    counter1  = counter1 + 500;
   
    document.getElementById("scoreSpeler1").innerHTML = counter1;
   }

function plusBonusSpeler2() {
    counter2  = counter2 + 500;
   
    document.getElementById("scoreSpeler2").innerHTML = counter2;
   }

function plusBonusSpeler3() {
    counter3  = counter3 + 500;
   
    document.getElementById("scoreSpeler3").innerHTML = counter3;
   }

function plusBonusSpeler4() {
    counter4  = counter4 + 500;
   
    document.getElementById("scoreSpeler4").innerHTML = counter4;
   }

function resetScores() {
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    counter4 = 0;
   
    document.getElementById("scoreSpeler1").innerHTML = counter1;
    document.getElementById("scoreSpeler2").innerHTML = counter2;
    document.getElementById("scoreSpeler3").innerHTML = counter3;
    document.getElementById("scoreSpeler4").innerHTML = counter4;
}



function speler1Min() {
        var punten1 = document.querySelector("#scoreSpeler1");
        punten1.style.backgroundColor = "rgb(255, 120, 120)";
        punten1.style.color = "white";
    }


function speler1Wint() {
    if (counter1 > 2000) {
        var punten1 = document.querySelector("#scoreSpeler1");
        punten1.style.backgroundColor = "gold";
        punten1.style.color = "black";
    }
}