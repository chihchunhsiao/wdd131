// Get the last modified date and time
const currentyear = document.querySelector("#currentyear");
const lastModified = document.lastModified("#lastModified");


currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

lastModified.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "lastModified"
	}
).format(today)}</span>`; 

