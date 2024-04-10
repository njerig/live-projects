// Data sources for cards
const NASA_PLANET_FACTSHEET_URL = "https://nssdc.gsfc.nasa.gov/planetary/factsheet/";
const NASA_PLANET_IMAGES_BASE_URL = "https://nssdc.gsfc.nasa.gov/planetary/image/";

// const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
// let titles = [
//     "Fresh Prince of Bel Air",
//     "Curb Your Enthusiasm",
//     "East Los High"
// ];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

let planetaryData = {
    "mercury": {
        mass: "0.330",
        diameter: "4879",
        density: "5429",
        gravity: "3.7",
        escapeVelocity: "4.3",
        rotationPeriod: "1407.6",
        dayLength: "4222.6",
        distanceFromSun: "57.9",
        perihelion: "46.0",
        aphelion: "69.8",
        orbitalPeriod: "88.0",
        orbitalVelocity: "47.4",
        orbitalInclination: "7.0",
        orbitalEccentricity: "0.206",
        obliquityToOrbit: "0.034",
        meanTemperature: "167",
        surfacePressure: "0",
        moonCount: "0",
        hasRingSystem: false,
        hasGlobalMagneticField: true,
    },
    "venus": {
        mass: "4.87",
        diameter: "12104",
        density: "5243",
        gravity: "8.9",
        escapeVelocity: "10.4",
        rotationPeriod: "-5832.5",
        dayLength: "2802.0",
        distanceFromSun: "108.2",
        perihelion: "107.5",
        aphelion: "108.9",
        orbitalPeriod: "224.7",
        orbitalVelocity: "35.0",
        orbitalInclination: "3.4",
        orbitalEccentricity: "0.007",
        obliquityToOrbit: "177.4",
        meanTemperature: "464",
        surfacePressure: "92",
        moonCount: "0",
        hasRingSystem: false,
        hasGlobalMagneticField: false,
    },
    "earth": {
        mass: "5.97",
        diameter: "12756",
        density: "5514",
        gravity: "9.8",
        escapeVelocity: "11.2",
        rotationPeriod: "23.9",
        dayLength: "24.0",
        distanceFromSun: "149.6",
        perihelion: "147.1",
        aphelion: "152.1",
        orbitalPeriod: "365.2",
        orbitalVelocity: "29.8",
        orbitalInclination: "0.0",
        orbitalEccentricity: "0.017",
        obliquityToOrbit: "23.4",
        meanTemperature: "15",
        surfacePressure: "1",
        moonCount: "1",
        hasRingSystem: false,
        hasGlobalMagneticField: true,
    },
    "moon": {
        mass: "0.073",
        diameter: "3475",
        density: "3340",
        gravity: "1.6",
        escapeVelocity: "2.4",
        rotationPeriod: "655.7",
        dayLength: "708.7",
        distanceFromSun: "0.384*",
        perihelion: "0.363*",
        aphelion: "0.406*",
        orbitalPeriod: "27.3",
        orbitalVelocity: "1.0",
        orbitalInclination: "5.1",
        orbitalEccentricity: "0.055",
        obliquityToOrbit: "6.7",
        meanTemperature: "-20",
        surfacePressure: "0",
        moonCount: "0",
        hasRingSystem: false,
        hasGlobalMagneticField: false,
    },
    "mars": {
        mass: "0.642",
        diameter: "6792",
        density: "3934",
        gravity: "3.7",
        escapeVelocity: "5.0",
        rotationPeriod: "24.6",
        dayLength: "24.7",
        distanceFromSun: "228.0",
        perihelion: "206.7",
        aphelion: "249.3",
        orbitalPeriod: "687.0",
        orbitalVelocity: "24.1",
        orbitalInclination: "1.8",
        orbitalEccentricity: "0.094",
        obliquityToOrbit: "25.2",
        meanTemperature: "-65",
        surfacePressure: "0.01",
        moonCount: "2",
        hasRingSystem: false,
        hasGlobalMagneticField: false,
    },
    "jupiter": {
        mass: "1898",
        diameter: "142,984",
        density: "1326",
        gravity: "23.1",
        escapeVelocity: "59.5",
        rotationPeriod: "9.9",
        dayLength: "9.9",
        distanceFromSun: "778.5",
        perihelion: "740.6",
        aphelion: "816.4",
        orbitalPeriod: "4331",
        orbitalVelocity: "13.1",
        orbitalInclination: "1.3",
        orbitalEccentricity: "0.049",
        obliquityToOrbit: "3.1",
        meanTemperature: "-110",
        surfacePressure: null,
        moonCount: "95",
        hasRingSystem: true,
        hasGlobalMagneticField: true,
    },
    "saturn": {
        mass: "568",
        diameter: "120536",
        density: "687",
        gravity: "9.0",
        escapeVelocity: "35.5",
        rotationPeriod: "10.7",
        dayLength: "10.7",
        distanceFromSun: "1432.0",
        perihelion: "1357.6",
        aphelion: "1506.5",
        orbitalPeriod: "10,747",
        orbitalVelocity: "9.7",
        orbitalInclination: "2.5",
        orbitalEccentricity: "0.052",
        obliquityToOrbit: "26.7",
        meanTemperature: "-140",
        surfacePressure: null,
        moonCount: "146",
        hasRingSystem: true,
        hasGlobalMagneticField: true,
    },
    "uranus": {
        mass: "86.8",
        diameter: "51118",
        density: "1270",
        gravity: "8.7",
        escapeVelocity: "21.3",
        rotationPeriod: "-17.2",
        dayLength: "17.2",
        distanceFromSun: "2867.0",
        perihelion: "2732.7",
        aphelion: "3001.4",
        orbitalPeriod: "30589",
        orbitalVelocity: "6.8",
        orbitalInclination: "0.8",
        orbitalEccentricity: "0.047",
        obliquityToOrbit: "97.8",
        meanTemperature: "-195",
        surfacePressure: null,
        moonCount: "28",
        hasRingSystem: true,
        hasGlobalMagneticField: true,
    },
    "neptune": {
        mass: "102",
        diameter: "49528",
        density: "1638",
        gravity: "11.0",
        escapeVelocity: "23.5",
        rotationPeriod: "16.1",
        dayLength: "16.1",
        distanceFromSun: "4515.0",
        perihelion: "4471.1",
        aphelion: "4558.9",
        orbitalPeriod: "59,800",
        orbitalVelocity: "5.4",
        orbitalInclination: "1.8",
        orbitalEccentricity: "0.010",
        obliquityToOrbit: "28.3",
        meanTemperature: "-200",
        surfacePressure: null,
        moonCount: "16",
        hasRingSystem: true,
        hasGlobalMagneticField: true,
    },
    "pluto": {
        mass: "0.0130",
        diameter: "2376",
        density: "1850",
        gravity: "0.7",
        escapeVelocity: "1.3",
        rotationPeriod: "-153.3",
        dayLength: "153.3",
        distanceFromSun: "5906.4",
        perihelion: "4436.8",
        aphelion: "7375.9",
        orbitalPeriod: "90560",
        orbitalVelocity: "4.7",
        orbitalInclination: "17.2",
        orbitalEccentricity: "0.244",
        obliquityToOrbit: "119.5",
        meanTemperature: "-225",
        surfacePressure: "0.00001",
        moonCount: "5",
        hasRingSystem: false,
        hasGlobalMagneticField: null,
    }
}

function makeTitleFromKey(key) {
    let title = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
    if (title.startsWith("Has ")) {
        title.replace("Has ", "");
        title += "?";
    }
    return title;
}

function createCard(planet) {
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.src = NASA_PLANET_IMAGES_BASE_URL;
    if (planet == "pluto") {
        image.src += "nh_"
    }
    image.src += `${planet}.jpg`;
    image.alt = makeTitleFromKey(planet) + " Picture";
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    const cardHeader = document.createElement("h2");
    cardHeader.textContent = planet.charAt(0).toUpperCase() + planet.slice(1);
    const cardDetails = document.createElement("ul");
    for (let key in planetaryData[planet]) {
        const detail = document.createElement("li");
        const title = makeTitleFromKey(key);
        let value = planetaryData[planet][key];
        let unit = "";
        switch (key) {
            case "mass":
                unit = "x 10<sup>24</sup> kg";
                break;
            case "diameter":
            case "distanceFromSun":
            case "perihelion":
            case "aphelion":
                unit = "km";
                break;
            case "density":
                unit = "kg/m<sup>3</sup>";
                break;
            case "gravity":
                unit = "m/s<sup>2</sup>";
                break;
            case "escapeVelocity":
            case "orbitalVelocity":
                unit = "km/s";
                break;
            case "rotationPeriod":
            case "dayLength":
                unit = "hours";
                break;
            case "orbitalPeriod":
                unit = "days";
                break;
            case "orbitalInclination":
            case "obliquityToOrbit":
                unit = "degrees";
                break;
            case "meanTemperature":
                unit = "degrees Celsius";
                break;
            case "surfacePressure":
                unit = "bars";
                break;
            case "moonCount":
                break;
            case "hasRingSystem":
            case "hasGlobalMagneticField":
                value = value ? "Yes" : "No";
                break;
        }
        detail.innerHTML = `<b>${title}${unit ? " (" + unit + ")" : ""}</b>: ${value}`;
        cardDetails.appendChild(detail);
        card.appendChild(image);
        cardContent.appendChild(cardHeader);
        cardContent.appendChild(cardDetails);
        card.appendChild(cardContent);
        cardContainer.appendChild(card);
    }
}

// This function adds cards the page to display the data in the object
function addCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    for (let planet in planetaryData) {
        createCard(planet);
    }
}

// Add moon toggle filter
function addMoonToggle() {
    const filterOptions = document.getElementById("filterOptions");
    const moonFieldset = document.createElement("fieldset");
    const moonLegend = document.createElement("legend");
    moonLegend.textContent = "Moon";
    moonFieldset.appendChild(moonLegend);
    const moonCheckbox = document.createElement("input");
    moonCheckbox.type = "checkbox";
    moonCheckbox.id = "toggleMoon";
    moonCheckbox.checked = true;
    const moonCheckboxLabel = document.createElement("label");
    moonCheckboxLabel.htmlFor = "toggleMoon";
    moonCheckboxLabel.textContent = "Show";
    moonCheckbox.addEventListener('change', toggleMoonCard);
    moonFieldset.appendChild(moonCheckbox);
    moonFieldset.appendChild(moonCheckboxLabel);
    filterOptions.appendChild(moonFieldset);
}

// Adds filters to filterOptions
function addFilters() {
    addMoonToggle();
}

function toggleFilterOptions() {
    const filterOptions = document.getElementById("filterOptions");
    if (filterOptions.style.display === "none") {
        filterOptions.style.display = "block";
    } else {
        filterOptions.style.display = "none";
    }
}

// This adds cards and filters when the page is first loaded
document.addEventListener("DOMContentLoaded", addCards);
document.addEventListener("DOMContentLoaded", addFilters);

function toggleMoonCard() {
    if (!planetaryData["moon"]) {
        planetaryData["moon"] = {
            mass: "0.073",
            diameter: "3474.2",
            density: "3340",
            gravity: "1.6",
            escapeVelocity: "2.4",
            rotationPeriod: "655.7",
            dayLength: "708.7",
            distanceFromSun: "0.384",
            perihelion: "0.363",
            aphelion: "0.406",
            orbitalPeriod: "27.3",
            orbitalVelocity: "1.0",
            orbitalInclination: "5.1",
            orbitalEccentricity: "0.055",
            obliquityToOrbit: "6.7",
            meanTemperature: "-20",
            surfacePressure: "0",
            moonCount: "0",
            hasRingSystem: false,
            hasGlobalMagneticField: false,
        };
    } else {
        delete planetaryData["moon"];
    }
    addCards(); // Refresh the cards to reflect the change
}