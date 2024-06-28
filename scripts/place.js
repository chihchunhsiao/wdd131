// first <p>

const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span> `;

// second <p>

const lastModified = document.querySelector("#lastModified");
// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${lastModifiedDate.getDate()}/${lastModifiedDate.getMonth() + 1}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours()}:${lastModifiedDate.getMinutes()}:${lastModifiedDate.getSeconds()}</span>`; 

// Calculate Windchill
// Wind Chill (F) = 35.74 + 0.6215T - 35.74(V^(0.16)) + 0.4275T(V^(0.16))
// T: Air temperature in Fahrenheit
// V: Wind speed in miles per hour
const temperature = celsiusToFarenheit(32);
const windSpeed = kmphToMph(9);
const windChillElement = document.querySelector('#wind-chill');
let result = "";

function celsiusToFarenheit(temperature) { 
    return (9 / 5 * temperature) + 32 
};

function fahrenheitToCelsius(temperature) { 
    return (temperature - 32) * 5 / 9 
};

function kmphToMph(speed) { 
    return speed / 1.609344 
};

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperature * (windSpeed ** 0.16) 
};

if (temperature > 50 || windSpeed <= 3) {
    result = "N/A";
}
else {
    result = `${fahrenheitToCelsius((calculateWindChill(temperature, windSpeed))).toFixed(2)}°C`;    
}

windChillElement.innerHTML = `<span class="wind-chill">${result}</span> `;

