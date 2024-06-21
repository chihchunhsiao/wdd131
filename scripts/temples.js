document.addEventListener('DOMContentLoaded', function () {
    // first <p>

    const currentyear = document.querySelector("#currentyear");

    const today = new Date();

    currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span> `;

    // second <p>

    const lastModified = document.querySelector("#lastModified");
    // Get the last modified date
    const lastModifiedDate = new Date(document.lastModified);

    lastModified.innerHTML = `<span class="highlight">${lastModifiedDate.getDate()}/${lastModifiedDate.getMonth() + 1}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours()}:${lastModifiedDate.getMinutes()}:${lastModifiedDate.getSeconds()}</span>`; 
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const title = document.querySelector('.title');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        title.style.display = navLinks.classList.contains('open') ? 'none' : 'block';
        hamburger.textContent = navLinks.classList.contains('show') ? 'X' : '☰';
    });
});







