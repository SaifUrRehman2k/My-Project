let sidebar = document.getElementById("sidebar")
function sideBarOpen() {
    sidebar.style.right = "0px";
}
function sidebarClose() {
    sidebar.style.right = "-400%";
}

let aboutNavBtn = document.getElementById("aboutNavToggler");
let aboutArrow = document.getElementById("aboutArrow");
let aboutNav = document.getElementById("aboutNav");
let hideBtn = document.getElementById("hideAboutNav");

aboutNavBtn.addEventListener("click", () => {
    let showAboutBtn = document.getElementById("showAboutNav");
    let hideAboutNav = document.getElementById("hideAboutNav");
    showAboutBtn.classList.toggle("hideBtn");
    hideAboutNav.classList.toggle("hideBtn");
    aboutArrow.classList.toggle("rotate180");
    aboutNav.classList.toggle("hide950");
});
