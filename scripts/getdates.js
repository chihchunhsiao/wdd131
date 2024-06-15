// first <p>

const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `&copy;<span class="highlight">${today.getFullYear()}</span> 🐳 Chih Chun Hsiao 🐳 Taiwan`;

// second <p>

const lastModified = document.querySelector("#lastModified");
// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: <span class="highlight">${lastModifiedDate.getDate()}/${lastModifiedDate.getMonth()}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours()}:${lastModifiedDate.getMinutes()}:${lastModifiedDate.getSeconds()}</span>`; 



