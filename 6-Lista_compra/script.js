
const listItmes = ["apples", "juice", "carrots", "honey", "coconut", "wine", "suscribete"];
const listWrapper = document.querySelector("ul");
let i = 0;
while ( i < listItmes.length) {
    const thisItem = listItmes[i];
    const element = `<li>${thisItem}</li>`; 
    console.log(element);
    i++;
    listWrapper.innerHTML += element;
}