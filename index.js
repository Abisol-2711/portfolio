const d = document;
const sobreMiSection = d.getElementById("sobreMi");
const inicioSection = d.getElementById("inicio");
const btnDownScroll = d.querySelector(".btn__down");
const btnUpScroll = d.querySelector(".btn__up");
const darkModeSwitch = d.getElementById("darkModeSwitch");
const header = d.querySelector(".header");
const aboutDark = d.querySelector(".about");
const contactDark = d.querySelector(".contact");
const footerDark = d.querySelector(".footer");

btnDownScroll.addEventListener("click", () => {
    sobreMiSection.scrollIntoView({ behavior: "smooth" });
});

btnUpScroll.addEventListener("click", () => {
    inicioSection.scrollIntoView({ behavior: "smooth" });
});

darkModeSwitch.addEventListener("click", () => {
    const isDarkMode = !darkModeSwitch.checked;
    d.body.style.backgroundColor = isDarkMode ? "#5c3a44" : "#f4e7eb";
    const imageSuffix = isDarkMode ? "Dark" : "";
    aboutDark.style.backgroundImage = `url('img/background${imageSuffix}.png')`;
    contactDark.style.backgroundImage = `url('img/backgroundFooter${imageSuffix}.png')`;
    footerDark.style.backgroundImage = `url('img/backgroundFooter${imageSuffix}.png')`;
});

window.addEventListener("scroll", () => {
    header.style.backgroundColor = window.scrollY > 700 ? "#6c5b7b" : "#6c5b7b24";
});
