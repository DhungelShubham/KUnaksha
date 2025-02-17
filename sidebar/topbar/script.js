// Initialize the map and set its view to Kathmandu University with a slightly higher zoom level
const map = L.map('map').setView([27.619283, 85.538440], 19); // Increased zoom level to 18

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

//const customIcon=L.icon({
//  iconUrl:'sidebar/assets/1000_F_252475463_2QqGpiv4ZPtFkZauAUoTOzMyoaXk87P0.jpg',
//  iconSize:[25,25],
//});

// Location data for markers
const data = {
    KUCorner: {
        coords: [27.619570, 85.538588],
        title: "KU Corner",
        address: `https://soed.ku.edu.np/dean-s-corner`,
        streetview: 'maps/index.html',
        description: "Museum of space history in Dhulikhel Address: JG9Q+RC6, Dhulikhel 45200",

    },
    
    Library: {
        coords: [27.618968, 85.538574],
        title: "Library",
        address: "Kathmandu University Central Library",
        streetview: 'maps/index.html',
        description: `
        The Kathmandu University Central Library (KUCL) is centrally located in the university central premises and can be reached within three to five minutes from all departments and hostels.
        The library is housed in a three-story building with a space of about 2290 square meter. The KUCL has majority of books and journals specially related with School of Science and School of Engineering. 
        It monitors services of all libraries of the university.

        <ul>KU Central Library has:</ul>
        <ol> 60,000 Plus - Volumes of books </ol>
        <ol> 2500 - CD-ROMs </ol>
        <ol> 200 - Videocassettes </ol>
        <ol> 125 - Journal titles and newsletters </ol>
        <ol> 20 - Newspapers and Magazines</ol>
        <ol> 75 - Audio cassettes</ol>
    `
    },
 // new ones
 KUMain: {
        coords: [27.619621, 85.538598],
        title: "Kathmandu University Administrative Building",
        address: 'https://ku.edu.np/',
        streetview: 'maps/index.html',
        description: `
        Kathmandu University
<ol>Address : Dhulikhel, Nepal</ol>
Phone : 977-11-415100, 977-11-415200, 977-9801210035, 977-11-415005
Fax : 977-11-415011 P.O Box: 6250
Email : info@ku.edu.np
        `,

    },

 KUBLOCK10: {
    coords: [27.619767, 85.538086],
    title: "Block 10",
    address: "Department of Management Informatics and Communication",
    streetview: 'maps/index.html',
    description: `
    Welcome to the Department of Management Informatics and Communication!

We are thrilled to have you explore the vibrant and dynamic world of Management, IT, and Business with us. 
Our department is dedicated to providing cutting-edge education and fostering innovation in fields such as Management, Entrepreneurship, and Communication.
    `},

 Cvraman: {
        coords: [27.619414, 85.538907],
        title: "C.V. Raman Auditorium",
        address: `https://ku.edu.np/history`,
        streetview: 'maps/index.html',
        description: `Best place at KU for organizing events. CV Raman has three halls Main Auditorium, Senate hall and Mini Auditorium.
KU canteen is also situated in CV Raman Block`,

    },

};

// Add markers to the map and bind popups
for (let key in data) {
    const location = data[key];

    // Add marker
    const marker = L.marker(location.coords, {
        title: location.title,
//        icon:customIcon,
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