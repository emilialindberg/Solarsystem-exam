 
const apiUrl = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com" // base api url
let planetData // global variable containing all planet data from API

/*hämta*/
const getBackgroundColorById = (id) => {
    const element = document.getElementById(id);
    return window.getComputedStyle(element).backgroundColor;
}


const back = () => {
    document.getElementById("planets").style.display = "flex";
    document.getElementById("planet-details").style.display = "none";
    document.getElementById("sun").style.display = "block";
}
const loadPlanet = (planetPos, planetColor) => {
    document.getElementById("planet-zoomed").style.backgroundColor = planetColor; //sätt färg
    document.getElementById("planet-zoomed").style.boxShadow = `0 0 20px 10px ${planetColor}`;
    //visa/dölj
    document.getElementById("planets").style.display = "none";
    document.getElementById("planet-details").style.display = "flex";
    document.getElementById("sun").style.display = "none";
    document.querySelector("header").style.display = "none";

    let planet = planetData[planetPos] 

    
    document.getElementById("planet-name").innerHTML = planet.name;
    document.getElementById("planet-desc").innerHTML = planet.desc;
    document.getElementById("planet-mintemp").innerHTML = planet.temp.night + " C"
    document.getElementById("planet-maxtemp").innerHTML = planet.temp.day + " C"
    document.getElementById("planet-distance").innerHTML = planet.distance.toLocaleString('se-SV') + " KM";


    // moons
    for (let index = 0; index < planet.moons.length; index++) {
        let moon = planet.moons[index]
        document.getElementById("planet-moons").innerHTML += moon + ", ";
        // TODO: ta bort kommatecknet på sista månen så det ser snyggt ut!
    }
}
//nyckel samt planetdata
const initPlanetData = async () => {
    let apiKey = await fetchApiKey()
    planetData = await fetchPlanetData(apiKey)
}



initPlanetData() // fetch all planet data from API on page load







