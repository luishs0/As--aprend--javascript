// Imgs array and html data
const imgs = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];
const dwnBtn = document.querySelector(".dwn-btn");
const upBtn = document.querySelector(".up-btn");
const slider = document.querySelector(".ms_slider");
const carousel = document.querySelector(".ms_carousel");

// Read array witch cycle
for (let i = 0; i < imgs.length; i++){
    const thisImg = imgs[i];
    // main img
    const img = `
        <div class="ms_item">
            <img src="${thisImg}" alt="">
        </div>`;
    slider.innerHTML += img;
    // carousel
    const carouselImg = `
        <div class="img_wrapper">
            <img src="${thisImg}" alt="">
        </div>
    `
    carousel.innerHTML += carouselImg;
}

// Start status
const items = document.getElementsByClassName("ms_item");
let sliderPosition = 0;
items[sliderPosition].classList.add("active");
// Start carousel status
const carouselItems = document.getElementsByClassName("img_wrapper")
let carouselPosition = 0;
carouselItems[carouselPosition].classList.add("active-carousel")

// Navigation
// dwnBtn at click
dwnBtn.addEventListener("click", function(){

    // Remove .active to sliderPosition
    items[sliderPosition].classList.remove("active");
    // Remove .active-carousel to carouselPosition  
    carouselItems[carouselPosition].classList.remove("active-carousel");
    
    if (sliderPosition < imgs.length -1) {
        // sliderPosition + 1
        sliderPosition++;
        // carouselPosition +1
        carouselPosition++;
    } else {
        // sliderPosition = 0
        sliderPosition = 0;
        // carouselPosition = 0
        carouselPosition = 0;
    }

    // Add .active to next sliderPosiiton
    items[sliderPosition].classList.add("active");
    // Add .active-carousel to next carouselPosition
    carouselItems[carouselPosition].classList.add("active-carousel")
})

// upBtn at click
upBtn.addEventListener("click", function(){

    // Remove .active to sliderPosition
    items[sliderPosition].classList.remove("active");
    // Remove .active-carousel to carouselPosition  
    carouselItems[carouselPosition].classList.remove("active-carousel");

    if (sliderPosition > 0) {
        // sliderPosition - 1
        sliderPosition--;
        // carouselPosition - 1
        carouselPosition--;
    } else {
        // sliderPosition = imgs.length
        sliderPosition = imgs.length -1;
        // carouselPosition = imgs.length
        carouselPosition = imgs.length -1;
    } 
    
    // Add .active to next sliderPosiiton
    items[sliderPosition].classList.add("active");
    // Add .active-carousel to next carouselPosition
    carouselItems[carouselPosition].classList.add("active-carousel")
})