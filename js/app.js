import { initNavbar } from "./navbar.js";

document.addEventListener("DOMContentLoaded",() => {
    initNavbar();
});

/*=========================================
            PRELOADER
=========================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 800);

});



/*==========================================
        BACK TO TOP
==========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});