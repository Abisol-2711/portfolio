const d = document;
const sobreMiSection = d.getElementById("sobreMi");
const inicioSection = d.getElementById("inicio");
const btnDownScroll = d.querySelector(".btn__down");
const btnUpScroll = d.querySelector(".btn__up");
const darkModeSwitch = d.getElementById("darkModeSwitch");
const header = d.querySelector(".header");
const aboutDark = d.querySelector(".about");
const contactDark = d.querySelector(".contact");

btnDownScroll.addEventListener("click", () => {
    sobreMiSection.scrollIntoView({ behavior: "smooth" });
});

btnUpScroll.addEventListener("click", () => {
    inicioSection.scrollIntoView({ behavior: "smooth" });
});


window.addEventListener("scroll", () => {
    const scrollThreshold = window.innerHeight * 0.3;

    header.style.backgroundColor = window.scrollY > scrollThreshold ? "#6c5b7b" : "#6c5b7b24";
});

/*Menu Hamburguesa*/

 let hamburger = document.querySelector(".hamburger");
 hamburger.addEventListener("click", function() {
   hamburger.classList.toggle("is-active");
 });