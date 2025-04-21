import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

// ── tokens & IDs ────────────────────────────
// FIXME: Replace with your actual tokens and asset ID
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5YzEyZWM4Zi1jNDUwLTQ0ZWQtYjFjNC01ZGEyNjQ3YmQ1NzQiLCJpZCI6Mjk1OTg0LCJpYXQiOjE3NDUyNzU4NTB9.1DaG3xwvJSM1AoNCfl3S7jS98VFqCyCU9Z33UdPreXY";
const terrainAssetId = 1; // Cesium World Terrain
const mapboxToken    = "pk.eyJ1IjoibGFydnV6OTkiLCJhIjoiY204cm14YTF6MDFpcTJ3cHU5Mnd2ZHR3YSJ9.tsrPNYc985UfuT452me7DQ";
// ──────────────────────────────────────

const viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: false,
  terrainProvider: await Cesium.CesiumTerrainProvider.fromIonAssetId(
    terrainAssetId,
    { requestVertexNormals: true, requestWaterMask: true }
  ),
  baseLayerPicker: false,
  timeline: false,
  animation: false,
});

viewer.imageryLayers.addImageryProvider(
  new Cesium.UrlTemplateImageryProvider({
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/{z}/{x}/{y}@2x?access_token=${mapboxToken}`,
    maximumLevel: 18,
    tileWidth: 512,
    tileHeight: 512,
  })
);

viewer.scene.globe.enableLighting = true;
viewer.scene.globe.depthTestAgainstTerrain = true;

// ── start over Tre Cime di Lavaredo ──
viewer.scene.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(12.299, 46.618, 2000),
  orientation: { heading: 0, pitch: Cesium.Math.toRadians(-45), roll: 0 },
}); 