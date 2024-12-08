
const apiUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com" // base api url
let planetData // global variable containing all planet data from API

// get background-color
const getBackgroundColorById = (id) => {
    const element = document.getElementById(id);
    return window.getComputedStyle(element).backgroundColor;
}

// "X"-button to go back
const back = () => {
    document.getElementById("planets").style.display = "flex";
    document.getElementById("planet-details-overview").style.display = "none";
    document.getElementById("sun").style.display = "block";
}
const loadPlanet = (planetPos, planetColor) => {
    document.getElementById("planet-zoomed").style.backgroundColor = planetColor; // set color
    document.getElementById("planet-zoomed").style.boxShadow = `0 0 20px 10px ${planetColor}`; // set box-shadow

    //show/hide display
    document.getElementById("planets").style.display = "none";
    document.getElementById("planet-details-overview").style.display = "flex";
    document.getElementById("sun").style.display = "none";
    document.querySelector("header").style.display = "none";
    document.getElementById("circumference").style.display = "block";

// get current planetdata from list return by API
    let planet = planetData[planetPos]
   
// inject planetdata into DOM
    document.getElementById("planet-name").innerHTML = planet.name;
    document.getElementById("latin-name").innerHTML = planet.latinName;

    document.getElementById("planet-desc").innerHTML = planet.desc;
    document.getElementById("planet-mintemp").innerHTML = planet.temp.night + " C"
    document.getElementById("planet-maxtemp").innerHTML = planet.temp.day + " C"
    document.getElementById("planet-distance").innerHTML = planet.distance.toLocaleString('se-SV') + " KM";
    document.getElementById("circumference").innerHTML = planet.circumference.toLocaleString('se-SV') + " KM";

    document.getElementById("planet-moons").innerHTML = ""
     
    // Iterate through list of moons and add each moon to the DOM.
for (let index = 0; index < planet.moons.length; index++) {
    let moon = planet.moons[index];
    
    // Check if it's the last moon
    if (index === planet.moons.length - 1) {
        // Add the moon without a comma
        document.getElementById("planet-moons").innerHTML += moon;
    } else {
        // Add the moon with a comma
        document.getElementById("planet-moons").innerHTML += moon + ", ";
    }
}
}

// key + planetdata
const initPlanetData = async () => {
    let apiKey = await fetchApiKey()
    planetData = await fetchPlanetData(apiKey)
}

// fetch all planet data from API on page load
initPlanetData() 







