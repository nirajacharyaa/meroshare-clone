const hamburger = document.querySelector("div.hamburger > span");
const sidebar = document.querySelector(".sidebar");
const logo = document.querySelector("div.logo > img");

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("isClosed");
    if (sidebar.classList.contains("isClosed")) {
        logo.setAttribute("src", "./assets/brand-dash-icon.png");
    } else {
        logo.setAttribute("src", "./assets/brand-dash.png");
    }
});
