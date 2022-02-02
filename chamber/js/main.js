let d = new Date();

// HAMBUTTON
const hamButton = document.querySelector('.hamButton');
const navMenu = document.querySelector('.navMenu')

hamButton.addEventListener('click', () => { navMenu.classList.toggle('responsive') }, false);
// To solve the mid resizing issue with responsive class on
window.onresize = () => { if (window.innerWidth > 900) navMenu.classList.remove('responsive') };


// LAST UPDATE
const copyrightYear = document.getElementById("copyrightYear");
copyrightYear.textContent = d.getFullYear();

const lastUpdate = document.getElementById("lastUpdate")
lastUpdate.textContent = document.lastModified;

