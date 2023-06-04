let divWinner;
let divSquares = document.querySelectorAll('.square');

const divContainer = document.querySelector('#container');
const spanColorDisplay = document.querySelector('#colorDisplay');
const h1Header = document.querySelector('h1');
const spanMessage = document.querySelector('#message');
const btnReset = document.querySelector('#reset');
const btnEasy = document.querySelector('#easyButton');
const btnHard = document.querySelector('#hardButton');

const randomNumber = (max) => Math.floor(Math.random() * max);


//Restart Color
const restartColors = () => {
    divSquares.forEach((square)=>{
        square.style.backgroundColor = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
    })
}

//Select Winner
const selectWinner = () => {

    const selectedSquare = randomNumber(divSquares.length);

    spanColorDisplay.innerHTML = divSquares[selectedSquare].style.backgroundColor;


    return divSquares[selectedSquare];

}

const iniciar = () => {

    btnReset.textContent = 'New Colors'
    spanMessage.textContent = ' '
    h1Header.style.backgroundColor = 'rgb(70,130,180)'

    restartColors();

    divWinner = selectWinner();

    divSquares.forEach((square)=>{
        square.addEventListener('click', (e) => {
            validateColor(e.target);
        })
    })

}

const selectLevel = (level) => {

      divContainer.innerHTML = ''

      for (let i = 0; i < level; i++) {

        const newDiv  = document.createElement('div');
        newDiv.classList.add('square');
        divContainer.appendChild(newDiv);
      }
      divSquares = document.querySelectorAll('.square');
      iniciar();
}

const validateColor = (divElement) => {
    if (divElement.style.backgroundColor === divWinner.style.backgroundColor ){
        divSquares.forEach( square => square.style.backgroundColor = divElement.style.backgroundColor)
        h1Header.style.backgroundColor = divElement.style.backgroundColor

        btnReset.textContent = 'Play Again?'
        spanMessage.textContent = 'Correct!!!'
    } else {
        divElement.style.backgroundColor = '#5a5858';
        spanMessage.textContent = 'Try Again!';
    }
}

btnReset.addEventListener('click',()=>{
    iniciar();
})

btnEasy.addEventListener('click',()=>{
    btnEasy.classList.add('selected');
    btnHard.classList.remove('selected');
    selectLevel(3);
})

btnHard.addEventListener('click',()=>{
    btnHard.classList.add('selected');
    btnEasy.classList.remove('selected');
    selectLevel(6);
})

iniciar();
