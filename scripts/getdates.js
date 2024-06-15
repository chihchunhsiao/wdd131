// first <p>

const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `&copy;<span class="highlight">${today.getFullYear()}</span> 🐳 Chih Chun Hsiao 🐳`;

// second <p>

// Get the last modified date
const lastModified = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: <span class="highlight">${lastModified.getDate()}/${lastModified.getMonth()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}</span>; 



