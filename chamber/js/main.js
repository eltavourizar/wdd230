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

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
