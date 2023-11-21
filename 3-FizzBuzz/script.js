

const row = document.querySelector(".ms_row");



for(let i = 1; i <= 100; i++) {
   
    const cell = document.createElement("div");
    cell.classList.add("ms_cards");
    
    let fizzCounter = "";
    if ( i % 3 === 0 && i % 5 === 0) {
        fizzCounter = "counter-both";
        cell.innerHTML = "FizzBuzz";
    }
    else if ( i % 3 === 0) {
        fizzCounter = "counter-3";
        cell.innerHTML = "Fizz";
    }
    else if ( i % 5 === 0) {
        fizzCounter = "counter-5";
        cell.innerHTML = "Buzz";
    } else {
        cell.innerHTML = i;
        fizzCounter = "otherNumbers";
    }
    
    cell.classList.add(`${fizzCounter}`);
    row.append(cell)

    console.log(cell);
}