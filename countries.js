// Calculate statistics
const totalCitiesElement = document.getElementById('total-cities');
const totalCountriesElement = document.getElementById('total-countries');
const totalDistanceElement = document.getElementById('total-distance');
const countriesVisitedElement = document.getElementById('countries-visited');
const persand = document.getElementById('persand');


// Calculate total cities and countries visited
const totalCities = pins.length;
const totalCountries = countriesWithPins.length;
const toalCountriesoftheWorld = 195;
const kilometersAroundTheWorld = 40075;
const visitedCountries = Array.from(new Set(pins.map(pin => pin.country))).filter(country => country !== 'Greece').length;
const visitedPercentage = (visitedCountries / toalCountriesoftheWorld * 100).toFixed(2);

// Calculate total distance traveled
let totalDistance = 0;
pins.forEach(pin => {
    const distance = getDistanceFromAthens(pin.lat, pin.lng);
    totalDistance += parseFloat(distance) * 2;
});

const times = Math.floor(totalDistance / kilometersAroundTheWorld);

// Update statistics values
totalCitiesElement.textContent = totalCities;
totalCountriesElement.textContent = `${totalCountries} `;
totalDistanceElement.textContent = `${totalDistance.toFixed(2)}km (${times} times around the world)`;
countriesVisitedElement.textContent = `${visitedCountries} `;
persand.textContent = `(${visitedPercentage}%)`;
