import * as Cesium from "cesium";
Cesium.Ion.defaultAccessToken='';
const viewer = new Cesium.Viewer("cesiumContainer",{
    geocoder: Cesium.Geocoder.IonGeo,
    timeline:false,
});