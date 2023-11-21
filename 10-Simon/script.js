const textWrapper = document.getElementById("text-wrapper");
const numbersWrapper = document.getElementById("numbers-wrapper");
const scoreWrapper = document.getElementById("score-wrapper");
const sameNumbers = document.getElementById("same-numbers");


const arrayCpu = randomArrayGen();
console.log(arrayCpu);
let inBothArray = [];


for (let i = 0; i < arrayCpu.length; i++){
    const thisNumber = arrayCpu[i];
    const thisNumberWrapper = document.createElement("div");
    thisNumberWrapper.classList.add("rnd-numbers");
    thisNumberWrapper.append(thisNumber);
    numbersWrapper.append(thisNumberWrapper);
}


setTimeout(function () {
    hideNumbers(textWrapper);
}, 6000)


setTimeout(function() {
   
    let arrayUser = arrayUserFiller();
    console.log(arrayUser);

   
    for (let i = 0; i < arrayCpu.length; i++){
        const thisNumber = arrayCpu[i];
        if (arrayUser.includes(thisNumber)){
            inBothArray.push(thisNumber)
        }
    }

    scoreWrapper.innerHTML = `Your Score: ${inBothArray.length}`;
    for (let i = 0; i < inBothArray.length; i++){
        const thisNumber = inBothArray[i];
        const thisNumberWrapper = document.createElement("div");
        thisNumberWrapper.classList.add("matching-numbers");
        thisNumberWrapper.append(thisNumber);
        sameNumbers.append(thisNumberWrapper);
    }

}, 7000);


// -------------FUNCTIONS--------------------------------------------


function hideNumbers(textWrapper) {
    textWrapper.classList.add("d-none")
}


function randomArrayGen() {
    const randomArrayFilled = [];
    while (randomArrayFilled.length < 5){
        const thisNumber = getRndInteger(1, 99);
        if (!randomArrayFilled.includes(thisNumber)){
            randomArrayFilled.push(thisNumber);
        }
    }
    return randomArrayFilled;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function arrayUserFiller() {
    let arrayUser = [];
    while (arrayUser.length < 5) {
        const thisNumber = parseInt(prompt("Dime un numero"));
        arrayUser.push(thisNumber);
    }
    return arrayUser
}