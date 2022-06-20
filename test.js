// const checkScoreSpeler1 = document.querySelectorAll('#scoreSpeler1');

// const checkScore1 = () => {
//     if (checkScoreSpeler1 >= 6000) {

//     }
// }
// console.log(checkScoreSpeler1);

const allButtons = document.querySelectorAll('button');
allButtons.forEach (button) => {
    button.addEventListener('click', checkScore);
}