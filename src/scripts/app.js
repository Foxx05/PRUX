"use strict";


let backToTopBtn = document.querySelector('.backToTop');

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

backToTopBtn.addEventListener("click", scrollToTop);


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.animate-on-scroll').forEach(elem => {
  gsap.from(elem, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});
