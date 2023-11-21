const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");
const selectLevel = document.getElementById("level");

btnPlay.addEventListener("click", startgame);

let score = [];
let array16 = [];
let squareNumbers;
let squareRow;

//FUNCTION WITH CLICK-------------------------------------
/* START GAME - Play Btn */
function startgame() {
  //Clean the code
  mainDiv.innerHTML = "";
  //Layout grid in base a level
  const level = parseInt(selectLevel.value);
  squareNumbers = decededNumbersInGrid(level);
  squareRow = decededNumbersInRow(level);
  //Array 16 numbers
  array16 = generateArrayRandomNumbers(16, squareNumbers);
  console.log(array16.sort(function(a, b){return a-b}))
  //Add grid
  const gridDiv = createGridDiv();
  mainDiv.append(gridDiv);
  // Create and add square
  for (let i = 1; i <= squareNumbers; i++) {
    let squareDiv = createSquareDiv(i, squareRow);
    // click add blue
    squareDiv.addEventListener("click", clickedSquare);
    gridDiv.append(squareDiv);
  }
}

// CLICKED SQUARE - input user
function clickedSquare() {
  const clickedNumber = parseInt(this.textContent);
  let scoreMessage = score.length;
  let resultMessage;


  if (!array16.includes(clickedNumber)) {
    this.classList.add("blue");
    if (!score.includes(clickedNumber)) {
      score.push(clickedNumber);
    }
    if (score.length === squareNumbers - 16) {
      resultMessage = `<h3 class="result"> Enhorabuena has ganao crac maquina mastodonte! </h3>`
      mainDiv.innerHTML += resultMessage;
    }
  }

  else {
    this.classList.add("red");
    resultMessage = `<h3 class="result"> Has hecho click en una bomba (pringao)</h3>`;
    mainDiv.innerHTML += `${resultMessage} Puntuación: ${scoreMessage}`;
    
    score = [];
  }
}

function createGridDiv() {
  const divGrid = document.createElement("div");
  divGrid.classList.add("grid");
  return divGrid;
}

function createSquareDiv(numberInside, numberOfSquaresInRow) {
  const divSquare = document.createElement("div");
  divSquare.classList.add("square");
  divSquare.style.width = `calc(100% / ${numberOfSquaresInRow})`;
  divSquare.style.height = `calc(100% / ${numberOfSquaresInRow})`;
  divSquare.innerHTML = numberInside;
  return divSquare;
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateArrayRandomNumbers(arrayLength, maxRangeNumber) {
  const arrayNumbers = [];
  while (arrayNumbers.length < arrayLength) {
    const randomNumber = getRndInteger(1, maxRangeNumber);
    if (!arrayNumbers.includes(randomNumber)) {
      arrayNumbers.push(randomNumber);
    }
  }
  return arrayNumbers;
}


function decededNumbersInGrid(difficultyLevel) {
  if (difficultyLevel === 1) {
    squareInGrid = 100;
  } else if (difficultyLevel === 2) {
    squareInGrid = 81;
  } else {
    squareInGrid = 49;
  }
  return squareInGrid;
}


function decededNumbersInRow(difficultyLevel) {
  if (difficultyLevel === 1) {
    squareInRow = 10;
  } else if (difficultyLevel === 2) {
    squareInRow = 9;
  } else {
    squareInRow = 7;
  }
  return squareInRow;
}