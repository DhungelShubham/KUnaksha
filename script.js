// Initialize the map and set its view to Kathmandu University with a slightly higher zoom level
var map = L.map('map').setView([27.6194, 85.5395], 18); // Increased zoom level to 18

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Adding a marker for Kathmandu University
var marker = L.marker([27.6194, 85.5395]).addTo(map);
marker.bindPopup("Kathmandu University").openPopup();
