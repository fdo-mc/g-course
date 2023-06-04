const divContainer = document.querySelector('#container');
const spanColorDisplay = document.querySelector('#colorDisplay');
const h1Header = document.querySelector('h1');
const spanMessage = document.querySelector('#message');
const btnReset = document.querySelector('#reset');
const btnEasy = document.querySelector('#easyButton');
const btnHard = document.querySelector('#hardButton');

let divSquares;
let divWinner;

// Generar un número aleatorio entre 0 y max (exclusivo)
const randomNumber = (max) => Math.floor(Math.random() * max);

// Generar un color RGB aleatorio
const generateRandomColor = () => {
  const red = randomNumber(256);
  const green = randomNumber(256);
  const blue = randomNumber(256);
  return `rgb(${red}, ${green}, ${blue})`;
};

// Reiniciar colores de los cuadrados
const restartColors = () => {
  divSquares.forEach((square) => {
    square.style.backgroundColor = generateRandomColor();
  });
};

// Seleccionar el cuadrado ganador
const selectWinner = () => {
  const selectedSquareIndex = randomNumber(divSquares.length);
  const selectedSquare = divSquares[selectedSquareIndex];
  spanColorDisplay.textContent = selectedSquare.style.backgroundColor;
  return selectedSquare;
};

// Inicializar el juego
const iniciar = () => {
  btnReset.textContent = 'New Colors';
  spanMessage.textContent = '';
  h1Header.style.backgroundColor = 'steelblue';

  restartColors();
  divWinner = selectWinner();

  divSquares.forEach((square) => {
    square.addEventListener('click', validateColor);
  });
};

// Cambiar el nivel de dificultad
const changeLevel = (level) => {
  divContainer.innerHTML = '';
  for (let i = 0; i < level; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    divContainer.appendChild(square);
  }
  divSquares = document.querySelectorAll('.square');
  iniciar();
};

// Validar el color seleccionado
const validateColor = (event) => {
  const selectedColor = event.target.style.backgroundColor;
  if (selectedColor === divWinner.style.backgroundColor) {
    divSquares.forEach((square) => {
      square.style.backgroundColor = selectedColor;
    });
    h1Header.style.backgroundColor = selectedColor;
    btnReset.textContent = 'Play Again?';
    spanMessage.textContent = 'Correct!';
  } else {
    event.target.style.backgroundColor = '#5a5858';
    spanMessage.textContent = 'Try Again!';
  }
};

btnReset.addEventListener('click', iniciar);

btnEasy.addEventListener('click', () => {
  btnEasy.classList.add('selected');
  btnHard.classList.remove('selected');
  changeLevel(3);
});

btnHard.addEventListener('click', () => {
  btnHard.classList.add('selected');
  btnEasy.classList.remove('selected');
  changeLevel(6);
});

changeLevel(6);
divSquares = document.querySelectorAll('.square');

