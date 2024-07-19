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

// Create product name options
const infoType = document.getElementById('infoType');
const infos = [
    {
      id: '1',
      name: "Penggh tourism",
      
    },
    {
      id: '2',
      name: "Penghu geology",
      averagerating: 4.7
    },
    {
      id: '3',
      name: "Penghu culture",
      averagerating: 3.5
    },
    {
      id: '4',
      name: "Penghu package itinerary",
      averagerating: 3.9
    },
    {
      id: '5',
      name: "Penghu attractions",
      averagerating: 5.0
    }
  ];

infos.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.name;
    infoType.appendChild(option);
});
