/* Mudança das cores com a Rolagem */

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("rolagem", window.scrollY > 600);
});

window.addEventListener("scroll", function () {
    let main = document.querySelector("main");
    main.classList.toggle("rolagem", window.scrollY > 600);
});

window.addEventListener("scroll", function () {
    let navalist = document.querySelector("navalist");
    navalist.classList.toggle("rolagem", window.scrollY > 600);
});

/* Slider  */

const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
    slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
    slider[currentSlide].classList.add("on");
}

function prevtSlider() {
    hideSlider();
    if (currentSlide === 0) {
        currentSlide = slider.length - 1;
    } else {
        currentSlide--;
    }
    showSlider();
}

function nextSlider() {
    hideSlider();
    if (currentSlide === slider.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevtSlider);
