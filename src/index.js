import './index.css';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

import 'leaflet-measure';
import 'leaflet-measure/dist/leaflet-measure.css';

var myMap = L.map("map", {
    measureControl: true
  }).setView([-3.1190275, -60.0217314], 11);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11"
  }
).addTo(myMap);

L.marker([-3.13246, -59.900984])
  .addTo(myMap)
  .bindPopup(
    "Aqui fica o <b>Encontro das Águas</b>!<br/>É a união do Rio Negro com o Rio Solimões"
  )
  .openPopup();

L.circle([-3.130403, -60.023597], 500, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5
})
  .addTo(myMap)
  .bindPopup("Por aqui fica o <b>Centro Histórico</b> de Manaus");

var popup = L.popup();

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
    .openOn(myMap);
}

myMap.on("click", onMapClick);
