import "./index.css";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-measure";
import "leaflet-measure/dist/leaflet-measure.css";

import "leaflet-gpx";
import startIcon from "leaflet-gpx/pin-icon-start.png";
import endIcon from "leaflet-gpx/pin-icon-end.png";
import waypointIcon from "leaflet-gpx/pin-icon-wpt.png";
import shadowIcon from "leaflet-gpx/pin-shadow.png";
import ipyGpx from "./gpx/salto-do-ipy.gpx";
import mutumGpx from "./gpx/cachoeira-do-mutum.gpx";
import sussuGpx from "./gpx/cachoeira-da-sussuarana.gpx";

let streetsLayer = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11"
  }
);
//  .addTo(myMap);

let satelliteLayer = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: "mapbox/satellite-v9"
  }
);

let markerLayer = L.marker([-3.13246, -59.900984])
  //.addTo(myMap)
  .bindPopup(
    "Aqui fica o <b>Encontro das Águas</b>!<br/>É a união do Rio Negro com o Rio Solimões"
  );

let circleLayer = L.circle([-3.130403, -60.023597], 500, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5
})
  //.addTo(myMap)
  .bindPopup("Por aqui fica o <b>Centro Histórico</b> de Manaus");

let gpxOptions = {
  async: true,
  marker_options: {
    startIconUrl: startIcon,
    endIconUrl: endIcon,
    shadowUrl: shadowIcon,
    wptIconUrls: null
  }
}
let ipyGpxLayer = new L.GPX(ipyGpx, gpxOptions)
  .on("add", onOverlayAdd);
let mutumGpxLayer = new L.GPX(mutumGpx, gpxOptions)
  .on("add", onOverlayAdd);
let sussuGpxLayer = new L.GPX(sussuGpx, gpxOptions)
  .on("add", onOverlayAdd);

var popup = L.popup();

var map = L.map("map", {
  measureControl: true,
  layers: [satelliteLayer, markerLayer, circleLayer]
})
  .on("load", onMapLoad)
  .on("click", onMapClick)
  .setView([-3.1190275, -60.0217314], 11);

var baseMaps = {
  Streets: streetsLayer,
  Satellite: satelliteLayer
};

var overlayMaps = {
  Markers: markerLayer,
  Circles: circleLayer,
  "Ipy": ipyGpxLayer,
  "Mutum": mutumGpxLayer,
  "Sussuarana": sussuGpxLayer
};
L.control.layers(baseMaps, overlayMaps)
  .addTo(map);

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent(
      "Coordenadas do ponto:<ul><li>Latitude <b>" +
        e.latlng.lat +
        "</b></li><li>Longitude <b>" +
        e.latlng.lng +
        "</b></li></ul>"
    )
    .openOn(map);
}

function onMapLoad(e) {
  markerLayer.openPopup();
}

function onOverlayAdd(e) {
  map.fitBounds(e.target.getBounds());
}
