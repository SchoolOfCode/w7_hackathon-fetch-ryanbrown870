async function starWarsApi() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    let response = await fetch(`https://swapi.dev/api/planets/${randomNumber}`);
    let data = await response.json();
    console.log(data);
    return data;
};

async function displayData() {
    let planetObject = await starWarsApi();
    let {
        name,
        climate,
        population,
        rotation_period: rotationPeriod,
        terrain,
        films
    } = planetObject;
    let h1 = document.querySelector("h1");
    h1.innerHTML = name;
    let populationEl = document.querySelector(".population");
    populationEl.innerHTML = population;
    let terrainEl = document.querySelector(".terrain");
    terrainEl.innerHTML = terrain;
    let climateEl = document.querySelector(".climate");
    climateEl.innerHTML = climate;
    let filmsEl = document.querySelector(".films");



}


//Choose data we are going to work with to create site, out of all the options given.
//We chose planets
// Overall plan is to make a random planet picker which when button is clicked will generate a random star wars planet with the facts about it.
//Get random planet using the "id" root number from 1-60.
// Create a button to click for planet generation
//display data received from retch request for said planet.
//Once button is clicked -- 
//We want to display the name of the planet, the population, climate ,terrain + rotation period + films it has been in.
//We can do this by creating a variable by destructuring.
//Display data with query selector in HTML.
// Checks to find unknown Data 
//Create elements


let button = document.querySelector("button");
button.addEventListener("click", displayData);