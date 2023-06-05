let sentNumber = 0;
let chances = 10;
const btnCheck = document.querySelector('button');
const inputNumber = document.querySelector('input[type="number"]');
const pElement = document.querySelector('.guess');
const spanChances = document.querySelector('.chances');


const winnerNumber = Math.floor(Math.random()*100);

const validateNumber = () => {

chances--;
spanChances.innerHTML = chances
sentNumber = parseInt(inputNumber.value,10);

console.log(sentNumber,winnerNumber);

    if (winnerNumber==sentNumber){
        pElement.innerHTML = 'Ganaste!!!'
    } else {
        winnerNumber > sentNumber
            ?pElement.innerHTML = 'Muy Bajo'
            :pElement.innerHTML = 'Muy Alto';
    }
}

btnCheck.addEventListener('click',validateNumber)
