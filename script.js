// Initialize the map and set its view to Kathmandu University with a slightly higher zoom level
const map = L.map('map').setView([27.6194, 85.5395], 18); // Increased zoom level to 18

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);
const data ={
    KUCorner:{
        coords:[27.619570, 85.538588],
        title : "KU Corner",
        address :`KU Corner/Administration Block`,
        streetview :'maps/index.html',


    },
    Library:{
        coords:[27.618968, 85.538574],
        title:"Library" ,
        address :`Library`,
        streetview:'maps/index.html',

    },

}


//const customIcon=L.icon({
//  iconUrl:'KUnaksha-master/library.png',
//    iconSize:[50,50],
//});

for (let key in data){
    const locations = data[key];


// Adding a marker for Kathmandu University
L.marker(locations.coords,{
    title : locations.title,
//    icon:customIcon,
})
.bindPopup(`
    <span class="popup">
    ${locations.address}
    <a href ="${locations.streetview}" target="_blank">streetview</a><br>
    </span>
    `)
    .addTo(map)
}
  
