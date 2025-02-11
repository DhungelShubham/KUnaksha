import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDE5ODhlOS1lYjE4LTRhYTItYTYwOC1hYmI4MmIyYTJhNjUiLCJpZCI6MjYyNTQ0LCJpYXQiOjE3MzQyNTE4OTh9.XKt4Ola_5IvKAFjl3Ka1BerJfDUMCqcTiG_3omuN9Rk';

const viewer=Cesium.Viewer("cesiumContainer",{
    timeline:false,
    animation:false,
    gecoder:false,
});

const locations=[
    {
        name:'Multipurpose Hall', lat:27.619391872948153 ,lon:85.53724899350867 ,alt:1442.6060064717171
    },
];

locations.forEach(location => {
    const position=Cesium.Cartesian3.fromDegrees(location.lon,location.lat,location.alt);
    viewer.entities.add({
        name:location.name,
        postion:position,
        point:{
            pixelSize:10,
            color:Cesium.Color.YELLOW,
            outlineColor:Cesium.Color.BLACK,
            outlineWidth:2,
        },
        description:`
        <h3>${location.name}</h3>
        <p>Latitude: ${location.lat.toFixed(6)}</p>
        <p>Longitude: ${location.lon.toFixed(6)}</p>
        <p>Altitude: ${location.alt} meters</p>
        `
    });
    
});

viewer.flyTo(viewer.entities);

viewer.screenSpaceEventHandler.setInputAction(function(click) {
    const pickedObject=viewer.scene.pick(click.position);
    if(Cesium.defined(pickedObject))
    {
        viewer.selectedEntity=pickedObject.id;
    }  
},Cesium.ScreenSpaceEventType.LEFT_CLICK);
