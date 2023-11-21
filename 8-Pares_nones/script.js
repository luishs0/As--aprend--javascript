let userChoice = "";
while (userChoice !== "nones" && userChoice !== "pares"){
    userChoice = prompt("¿pares o nones?");
    console.log(userChoice);
}

// Ask userNumber
userNumber = parseInt(prompt("Elige un número del 1 al 5 tontito"));
console.log(userNumber);

// Return rndResult
const iaNumber = rndNumbGenerator(1, 5);
console.log(iaNumber);
// Return sumResult
const sumResult = sum(userNumber, iaNumber);
// Return oddOrEven Result
const isOddOrEven = oddOrEven(sumResult);
console.log(isOddOrEven);

// If isOddOrEven = userChoice
    // you win
// Else 
    // pc wins
let whoWin = "";
if (isOddOrEven === userChoice) {
    whoWin = "Has ganado"
} else {
    whoWin = "Has perdido (pringao)"
}
console.log(whoWin);

//FUNCTIONS
/**
 * Description: Odd or even calculator
 * @param {number} sumResult
 * @returns {string}
 */
function oddOrEven(numberToCheck) {
    let mssg = "";
    if (numberToCheck % 2 === 0) {
        mssg = "pares";
    } else {
        mssg = "nones";
    }
    return mssg;
}
/**
 * Description: sum of userNumber and iaNumber
 * @param {number} userNumber
 * @param {number} iaNumber
 * @returns {number} sum of 2 value 
 */
function sum(firstNumber, secondNumber) {
    const sumResult = firstNumber + secondNumber;
    return sumResult
}
/**
 * Description: Function generate a random number from 1 to 5
 * @returns {number} random number from 1 to 5
 */
function rndNumbGenerator(min, max) {
  const rndResult = Math.floor(Math.random() * (max - min + 1) ) + min;  
  return rndResult;
}