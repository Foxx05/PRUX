"use strict";


let backToTopBtn = document.querySelector('.backToTop');

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

backToTopBtn.addEventListener("click", scrollToTop);
