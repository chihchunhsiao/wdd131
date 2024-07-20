// footer: modified current year and date.

const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span> `;

const lastModified = document.querySelector("#lastModified");
// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${lastModifiedDate.getDate()}/${lastModifiedDate.getMonth() + 1}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours()}:${lastModifiedDate.getMinutes()}:${lastModifiedDate.getSeconds()}</span>`; 

// Add event listerner on menubutton.
document.addEventListener('DOMContentLoaded', function () {   
    const menuButton = document.querySelector('.menuButton');
    const navLinks = document.querySelector('.nav-links');
    

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');     
        menuButton.classList.toggle('show');
    });
      
});

