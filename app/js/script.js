let menubtn = document.getElementById("btnHamburger");
const body = document.querySelector('body');
let overlay = document.getElementById("overlay");
let menu = document.getElementById("menu");
let toggle = document.getElementById("toggle");

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