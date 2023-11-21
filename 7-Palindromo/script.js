const userWord = prompt("Introduce una palabra para combrobar si es palindromo");
const wordToSpell = userWord.toLowerCase();
let worldArray = [];
let reverseArray = [];


const check = checkPalindrome(userWord);
console.log(check);

// function
/**
 * Description: Checking if word is palindrome
 * @param {string} wordToSpell
 * @returns {boolean} -> true if is palindrome
 */
function checkPalindrome(wordToSpell) {
    // split word
    worldArray = wordToSpell.split("");
    console.log(worldArray);
    // reverse letters
    reverseArray = worldArray.reverse("");
    console.log(reverseArray);

    stringArrayReverse = worldArray.join("");
    console.log(stringArrayReverse);

    // if both array are ==
        // palindrome word
    // else
        // not palindrome
    let mssg = "";
    if (stringArrayReverse === wordToSpell) {
        mssg = "palindrome";
    } else {
        mssg = "not palindrome";
    }
    return mssg;
}