let menubtn = document.getElementById("btnHamburger");
const body = document.querySelector('body');
let overlay = document.getElementById("overlay");
let menu = document.getElementById("menu");
let toggle = document.getElementById("toggle");
const carousel = document.querySelector('.testimonials__cards');
const dots = document.querySelectorAll('.dot');

let isDragging = false;
let startX, startScrollLeft;

overlay.style.opacity = "0";
overlay.style.visibility = "hidden";
toggle.style.visibility = "hidden";

menubtn.onclick = function(){
    if(overlay.style.opacity == "0"){
        body.classList.add('noscroll');
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        toggle.style.visibility = "visible";
        menu.src = "../images/icon-close.svg";
    }
    else {
        body.classList.remove('noscroll');
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        toggle.style.visibility = "hidden";
        menu.src = "../images/icon-hamburger.svg";
    }
}
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;
    const x = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const walk = x - startX;
    carousel.scrollLeft = startScrollLeft - walk;
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const navigateSlider = (index) => {
    carousel.scrollLeft = index * carousel.clientWidth;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      navigateSlider(index);
    });
});