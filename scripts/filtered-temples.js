// first <p>

const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span> `;

// second <p>

const lastModified = document.querySelector("#lastModified");
// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${lastModifiedDate.getDate()}/${lastModifiedDate.getMonth() + 1}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours()}:${lastModifiedDate.getMinutes()}:${lastModifiedDate.getSeconds()}</span>`; 


document.addEventListener('DOMContentLoaded', function () {   
    const menuButton = document.querySelector('.menuButton');
    const navLinks = document.querySelector('.nav-links');
    // const title = document.querySelector('.title');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        // title.style.display = navLinks.classList.contains('open') ? 'none' : 'block';
        // menuButton.textContent = menuButton.classList.contains('show') ? '☰' : 'X';       
        menuButton.classList.toggle('show');
    });
      
});



const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Taipei Taiwan",
        location: "Taipei, Taipei, Taiwan",
        dedicated: "1984, November, 17",
        area: 9945,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1672186-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Minato-ku, Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-celestial.jpeg"
    },
    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
    },
  ];


// Loop through the temples and create a function of CreateTempleCards

document.querySelector(".home").innerHTML = "<h2>Home</h2>";
createTempleCard(temples);

function createTempleCard(temples) {
  // document.querySelector(".albums").innerHTML = "";
  temples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:<span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:<span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:<span> ${temple.area} sq ft`;
    card.className = 'imgBox';
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".home").appendChild(card);

  });  
}

/* EventListener to Home Button */
const homeLink = document.getElementById("home");
const oldLink = document.getElementById("old");
const newLink = document.getElementById("new");
const largeLink = document.getElementById("large");
const smallLink = document.getElementById("small");

homeLink.addEventListener("click", () => {
  document.querySelector(".home").innerHTML = "<h2>Home</h2>";
  createTempleCard(temples);
});

/* EventListener to Old Button */


oldLink.addEventListener("click", () => {
  
  let oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0], 10);
    return year < 1900;
});

  document.querySelector(".home").innerHTML = "<h2>Old Temples</h2>";
  createTempleCard(oldTemples);
});


/* EventListener to New Button */
newLink.addEventListener("click", () => {
  let newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(",")[0], 10);
      return year > 2000;
  });

  document.querySelector(".home").innerHTML = "<h2>New Temples</h2>";

  createTempleCard(newTemples);
  
});

/* EventListener to Large Button */

largeLink.addEventListener("click", () => {
  let largeTemples = temples.filter(temple => parseInt(temple.area) > 90000);
  document.querySelector(".home").innerHTML = "<h2>Large Temples</h2>";
  createTempleCard(largeTemples);
});

/* EventListener to Small Button */

smallLink.addEventListener("click", () => {
  let smallTemples = temples.filter(temple => parseInt(temple.area) < 10000);

  document.querySelector(".home").innerHTML = "<h2>Small Temples</h2>";
  createTempleCard(smallTemples);
}
);


