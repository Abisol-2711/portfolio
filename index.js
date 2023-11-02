const d = document;
const sobreMiSection = d.getElementById("sobreMi");
const inicioSection = d.getElementById("inicio");
const btnDownScroll = d.querySelector(".btn__down");
const btnUpScroll = d.querySelector(".btn__up");



btnDownScroll.addEventListener("click", () => {
    sobreMi.scrollIntoView({ behavior: "smooth" });
});

btnUpScroll.addEventListener("click", () => {
    inicioSection.scrollIntoView({ behavior: "smooth" });
});


/*Dark Mode */
const darkModeSwitch = d.getElementById("darkModeSwitch");
const aboutDark = d.querySelector(".about");
const contactDark = d.querySelector(".contact");
const footerDark = d.querySelector(".footer");

darkModeSwitch.addEventListener("click", () => {
  if (!darkModeSwitch.checked) {
    d.body.style.backgroundColor = "#b8abaf"; 
    aboutDark.style.backgroundImage = "url('img/backgroundDark.png')";
    contactDark.style.backgroundImage = "url('img/backgroundFooterDark.png')";
    footerDark.style.backgroundImage = "url('img/backgroundFooterDark.png')";
  } else {
    d.body.style.backgroundColor = "#f4e7eb";
    aboutDark.style.backgroundImage = "url('img/background.png')";
    contactDark.style.backgroundImage = "url('img/backgroundFooter.png')";
    footerDark.style.backgroundImage = "url('img/backgroundFooter.png')";
  }
});