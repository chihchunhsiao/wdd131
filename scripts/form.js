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


// Review submition count.
document.addEventListener('DOMContentLoaded', function() {
  let reviewCounter = localStorage.getItem('reviewCounter');
  if (!reviewCounter) {
      reviewCounter = 0;
  } else {
      reviewCounter = parseInt(reviewCounter); 
  }
  reviewCounter++;
  localStorage.setItem('reviewCounter', reviewCounter);
  document.getElementById('review-counter').textContent = reviewCounter;
});






