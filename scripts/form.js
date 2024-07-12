// footer dynamic date
const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span> `;

const lastModified = document.querySelector("#lastModified");
// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${lastModifiedDate.getDate()}/${lastModifiedDate.getMonth() + 1}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours()}:${lastModifiedDate.getMinutes()}:${lastModifiedDate.getSeconds()}</span>`; 

// Create product name options
const productName = document.getElementById('prodName');
const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

products.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.name;
    productName.appendChild(option);
});

// 1️. initialize display element variable
const countsDisplay = document.querySelector(".counts");

// 2. Get the stored VALUE for the numCounts-ls KEY in localStorage if it exists. If the numCounts KEY is missing, then assign 0 to the numCounts variable.
let numCounts = Number(window.localStorage.getItem("numCounts-ls")) || 0;

// 3️. Determine if this is the first count or display the number of counts. We wrote this example backwards in order for you to think deeply about the logic.
if (numCounts !== 0) {
	countsDisplay.textContent = numCounts;
} else {
	countsDisplay.textContent = "Not submitted for review!";
}

// 4️. increment the number of counts by one.
numCounts++;

// 5️. store the new count total into localStorage, key=numCounts-ls
localStorage.setItem("numCounts-ls", numCounts);

