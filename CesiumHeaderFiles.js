import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDE5ODhlOS1lYjE4LTRhYTItYTYwOC1hYmI4MmIyYTJhNjUiLCJpZCI6MjYyNTQ0LCJpYXQiOjE3MzQyNTE4OTh9.XKt4Ola_5IvKAFjl3Ka1BerJfDUMCqcTiG_3omuN9Rk';

async function initCesium() {
    const viewer = new Cesium.Viewer("cesiumContainer", {
        animation: false,
        //timeline: false,
        timeline:false,
        geocoder: false, // Disable the geocoder properly
    });

    // Hide the default globe if needed
    viewer.scene.globe.show = false;

    try {
        const tileset = await Cesium.createGooglePhotorealistic3DTileset();
        viewer.scene.primitives.add(tileset);
    } catch (error) {
        console.log(`Failed to load tileset: ${error}`);
    }
}

initCesium();
