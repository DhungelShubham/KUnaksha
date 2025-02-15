import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDE5ODhlOS1lYjE4LTRhYTItYTYwOC1hYmI4MmIyYTJhNjUiLCJpZCI6MjYyNTQ0LCJpYXQiOjE3MzQyNTE4OTh9.XKt4Ola_5IvKAFjl3Ka1BerJfDUMCqcTiG_3omuN9Rk';

const viewer=Cesium.Viewer("cesiumContaineer",{
    timeline:false,
    animation:false,
    baseLayerPicker:false,
    gecoder:Cesium.IonGeocodeProviderType.GOOGLE,
    gecoder:false,
})

const locations=[
    {
        name:"Multipupose Hall",
        lat:123,
        lon:123,
        alt:123,
        description:"Big Hall",
        image:"images/.png",
    }
]

locations.forEach(location => {
    const position=Cesium.Cartesian3.fromDegrees(location.lon,location.lat,location.alt);
    viewer.entities.add({
        name:location.name,
        position:position,
        point:{
            pixelSize:10,
            color:Cesium.Color.YELLOW,
        },
        description:`
            <h3>${location.name}</h3>
            <p><b>Description:</b> ${location.description}</p>
            <p><b>Latitude:</b> ${location.lat.toFixed(6)}</p>
            <p><b>Longitude:</b> ${location.lon.toFixed(6)}</p>
            <p><b>Altitude:</b> ${location.alt.toFixed(6)} meters</p>
            <img src="${location.image}" width="300px" style="border-radius: 10px;">`
    })
});

try{
    const tileset=await Cesium.createGooglePhotorealistic3DTileset();
    viewer.scene.primitives.add(tileset);
}
catch(error)
{
    console.log("Error Ocuured ")
}