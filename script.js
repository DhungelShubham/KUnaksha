// Initialize the map and set its view to Kathmandu University with a slightly higher zoom level
const map = L.map('map').setView([27.619283, 85.538440], 18); // Increased zoom level to 18

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Location data for markers
const data = {
    KUCorner: {
        coords: [27.619570, 85.538588],
        title: "KU Corner",
        address: "KU Corner/Administration Block",
        streetview: 'maps/index.html',
        description: "Museum of space history in Dhulikhel Address: JG9Q+RC6, Dhulikhel 45200",

    },
    Library: {
        coords: [27.618968, 85.538574],
        title: "Library",
        address: "Library",
        streetview: 'maps/index.html',
        description: "Museum of space history in Dhulikhel Address: JG9Q+RC6, Dhulikhel 45200",
    },
};

// Add markers to the map and bind popups
for (let key in data) {
    const location = data[key];

    // Add marker
    const marker = L.marker(location.coords, {
        title: location.title,
    })
    .bindPopup(`
        <span class="popup">
        <strong>${location.title}</strong><br>
        ${location.address}<br>
        <a href="${location.streetview}" target="_blank">StreetView</a>
        </span>
    `)
    .addTo(map);

    // Update information panel dynamically when marker is clicked
    marker.on("click", function () {
        const infoPanel = document.getElementById("info-content");
        infoPanel.innerHTML = `
            <h2>${location.title}</h2>
            <p>${location.address}</p>
            <p><strong>Description:</strong> ${location.description}</p>
            <a href="${location.streetview}" target="_blank">StreetView </a>
        `;
    });
}
