// Toggle hamburger menu
function toggleMenu() {
    const menu =
document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Galerie filtre
document.addEventListener("DOMContentLoaded", function () {
    const filtreButtons = 
document.querySelectorAll(".filter-buttons button");
    const images =
document.querySelectorAll(".gallery img");

    filtreButtons.forEach(button => {
        button.addEventListener("click", () 
        => {
            const filter =
button.getAttribute("data-filter");

        images.forEach(img => {
            if (filter === "all" ||
img.classList.contains(filter)) {
             img.style.display = 
"block";
        } else {
            img.style.display =
"none"
        }
       });
     });
   });
});