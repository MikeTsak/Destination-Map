const map = L.map('map').setView([20, -10], 2.5); // Set the initial view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

const pins = [
    { lat: 37.9838, lng: 23.7275, label: 'Athens', country: 'Greece', color: '#008349', flag: 'gr',image:'psilikatzides' }, // Green
    { lat: 64.1466, lng: -21.9426, label: 'Reykjavik', country: 'Iceland', color: '#003897', flag: 'is', image: 'is1' }, // Blue
    { lat: 48.8566, lng: 2.3522, label: 'Paris', country: 'France', color: '#0055A4', flag: 'fr', image: 'paris' }, // Blue
    { lat: 50.8503, lng: 4.3517, label: 'Brussels', country: 'Belgium', color: '#FDB813', flag: 'be', image: 'brassles' }, // Yellow
    { lat: 50.6292, lng: 3.0573, label: 'Lille', country: 'France', color: '#0055A4', flag: 'fr', image:'lille' }, // Blue
    { lat: 51.4816, lng: -3.1791, label: 'Cardiff', country: 'UK', color: '#00247D', flag: 'gb', image:'cardiff' }, // Blue
    { lat: 51.5074, lng: -0.1278, label: 'London', country: 'UK', color: '#00247D', flag: 'gb', image:'bigben' }, // Blue
    { lat: 55.9533, lng: -3.1883, label: 'Edinburgh', country: 'UK', color: '#00247D', flag: 'gb',  }, // Blue
    { lat: 47.3769, lng: 8.5417, label: 'Zurich', country: 'Switzerland', color: '#D52B1E', flag: 'ch', image: 'zirixi' }, // Red
    { lat: 42.6977, lng: 23.3219, label: 'Sofia', country: 'Bulgaria', color: '#00966E', flag: 'bg', image: 'sofia' }, // Green
    { lat: 40.7128, lng: -74.0060, label: 'New York', country: 'USA', color: '#B22234', flag: 'us', }, // Red
    { lat: 28.5383, lng: -81.3792, label: 'Orlando', country: 'USA', color: '#B22234', flag: 'us', image: 'florida' }, // Red
    { lat: 43.0828, lng: -79.0742, label: 'Niagara Falls', country: 'USA', color: '#B22234', flag: 'us' }, // Red
    { lat: 63.9850, lng: -22.6056, label: 'Keflavik', country: 'Iceland', color: '#003897', flag: 'is', image:'is0' }, // Blue
    { lat: 36.5511, lng: 26.3496, label: 'Astipalea', country: 'Greece', color: '#008349', flag: 'gr', image:'astplalea' }, // Green
    { lat: 38.2466, lng: 21.7346, label: 'Patra', country: 'Greece', color: '#008349', flag: 'gr',image:'patra' }, // Green
    { lat: 37.9375, lng: 22.9323, label: 'Corinth', country: 'Greece', color: '#008349', flag: 'gr', image: 'korinth' }, // Green
    { lat: 39.6676, lng: 20.8519, label: 'Ioannina', country: 'Greece', color: '#008349', flag: 'gr',image:'johnis' }, // Green
    { lat: 40.6401, lng: 22.9444, label: 'Thessaloniki', country: 'Greece', color: '#008349', flag: 'gr', image: 'thes' }, // Green
    { lat: 37.0380, lng: 22.1142, label: 'Kalamata', country: 'Greece', color: '#008349', flag: 'gr', image:'kalamata' }, // Green
    { lat: 35.5122, lng: 24.0156, label: 'Chania', country: 'Greece', color: '#008349', flag: 'gr', image:'kriti' }, // Green
    { lat: 37.5673, lng: 22.8004, label: 'Nafplio', country: 'Greece', color: '#008349', flag: 'gr',image:'djipalamid' }, // Green
    { lat: 37.3270, lng: 23.1416, label: 'Porto Heli', country: 'Greece', color: '#008349', flag: 'gr', image:'djiportoheli' }, // Green
    { lat: 50.6099, lng: 3.3899, label: 'Tournai', country: 'Belgium', color: '#FDB813', flag: 'be',image:'Tournai' }, // Yellow
    { lat: 51.4545, lng: -2.5879, label: 'Bristol', country: 'UK', color: '#00247D', flag: 'gb',image:'bristol' },
    { lat: 25.0343, lng: -77.3963, label: 'Nassau', country: 'Bahamas', color: '#B22234', flag: 'bs', image:'baham' },
    { lat: 48.8742, lng: 2.7769, label: 'Eurodisney', country: 'France', color: '#0055A4', flag: 'fr', image:'eurod' }, // Blue
    { lat: 28.3852, lng: -81.5639, label: 'Disney World', country: 'USA', color: '#B22234', flag: 'us', image:'dworld' }, // Red
    { lat: 35.8989, lng: 14.5146, label: 'Valletta', country: 'Malta', color: '#FFD100', flag: 'mt', image: 'valletta' }, // Yellow
    { lat: 36.0443, lng: 14.2354, label: 'Gozo', country: 'Malta', color: '#FFD100', flag: 'mt', image: 'gozo' }, // Yellow
    { lat: 36.0151, lng: 14.3317, label: 'Comino', country: 'Malta', color: '#FFD100', flag: 'mt', image: 'comino' }, // Yellow
    { lat: 37.9426, lng: 22.8238, label: 'Assos Korinitas', country: 'Greece', color: '#008349', flag: 'gr', image: 'assos' }, // Green
];




const countriesWithPins = [];

pins.forEach(pin => {
    const popupContent = `<div class="popup-content">
    <b class="city-name-2">${pin.label}</b><br>
    <span class="country-flag flag-icon flag-icon-${pin.flag}"></span> ${pin.country}<br>
    <img src="./img/${pin.image}.jpg" class="popup-image" alt="City Image">
    </div>`;
    L.marker([pin.lat, pin.lng]).addTo(map)
    .bindPopup(popupContent);
    if (!countriesWithPins.includes(pin.country)) {
        countriesWithPins.push(pin.country);
    }
});


const countryListContainer = document.getElementById('country-list');
const sortedPins = pins.slice().sort((a, b) => {
    const distanceA = getDistanceFromAthens(a.lat, a.lng);
    const distanceB = getDistanceFromAthens(b.lat, b.lng);
    return distanceB - distanceA; // Sort in descending order
});

sortedPins.forEach(pin => {
    const distance = getDistanceFromAthens(pin.lat, pin.lng);

    const countryItem = document.createElement('div');
    countryItem.classList.add('country-item');

    const cityName = document.createElement('div');
    cityName.classList.add('city-name');
    cityName.textContent = pin.label;

    const distanceElement = document.createElement('div');
    distanceElement.classList.add('distance');
    distanceElement.textContent = `(${distance} km from Athens)`;

    const countryName = document.createElement('div');
    countryName.classList.add('country-name');

    const flag = document.createElement('span');
    flag.classList.add('flag-icon', `flag-icon-${pin.flag}`);
    countryName.appendChild(flag);

    const countryText = document.createElement('span');
    countryText.textContent = pin.country;
    countryName.appendChild(countryText);

    countryItem.appendChild(cityName);
    countryItem.appendChild(distanceElement);
    countryItem.appendChild(countryName);

    countryListContainer.appendChild(countryItem);
});

function getDistanceFromAthens(lat2, lng2) {
    const lat1 = 37.9838; // Athens latitude
    const lng1 = 23.7275; // Athens longitude
    const earthRadius = 6371; // Radius of the earth in kilometers
  
    const dLat = degreesToRadians(lat2 - lat1);
    const dLng = degreesToRadians(lng2 - lng1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
  
    return distance.toFixed(2);
  }
  
  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
