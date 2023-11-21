const nameInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const calc_btnInput = document.getElementById("calc_btn");

const ticketFullPrice = document.getElementById("ticket-fullprice");
// On button click
calc_btnInput.addEventListener("click", function() {
    // Get value from input
    const name = nameInput.value;
    console.log(name);
    const km = parseFloat(kmInput.value);
    console.log(km);
    const age = parseFloat(ageInput.value);
    console.log(age);
    
    // Calculate full-price
    const fullPrice = km * 0.21;
    console.log(fullPrice);
    
    // Discount on age-category
    if (age < 18){
        const result18 = fullPrice * 0.8;
        const price18 = result18.toFixed(2);
        console.log(price18);
        document.getElementById("ticket-finalprice").innerHTML = price18 + "€";
    } else if (age > 65){
        const result65 = fullPrice * 0.6;
        const price65 = result65.toFixed(2);
        console.log(price65);
        document.getElementById("ticket-finalprice").innerHTML = price65 + "€";
    } else {
        const price = fullPrice.toFixed(2);
        document.getElementById("ticket-finalprice").innerHTML = price + "€";
    
    }

    // Output
    document.getElementById("ticket-name").innerHTML = name;
    document.getElementById("ticket-km").innerHTML = km;

    // Input clear
    nameInput.value = "";
    kmInput.value = "";
    ageInput.value = "";
})