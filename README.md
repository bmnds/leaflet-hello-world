# leaflet-hello-world
Personal project to study the Leaflet mapping library.

Requirements so far:
* [x] build with WebPack (a little tricky to get it working, see more in the section about leaflet-defaulticon-compatibility)
* [x] zoom to Manaus/Amazonas, Brazil on map load
* [x] draw a simple marker represented by an icon and show a popup when map gets loaded (super easy, natively supports popups)
* [x] draw a simple circle and show a popup on click (super easy, natively supports popups)
* [x] include measure widget (had to import a plugin)
* [x] render gpx files (had to import a plugin)
* [x] include table of contents widget (natively support it)
* [x] zoom to layer when it gets rendered (super easy)

What to study next?
* draw a line from a list of points in JSON or GeoJSON
* query a feature layer by attribute
* query a feature layer by geometry
* render a timeline for temporal data

# thoughts so far
* Simple to use
* Has numerous plugins
* API has inline examples, but has no links between Samples and API Classes
* Extensible architecture through L.Class and clear conventions for writing plugins

# dependencies

### [leaflet](https://leafletjs.com/)

### [leaflet-defaulticon-compatibility](https://github.com/ghybs/leaflet-defaulticon-compatibility)
Due to Leaflet's use of `url` inside `.css`, a compatibility plugin had to be imported just to handle this within webpack.

### [leaflet-measure](https://github.com/ljagis/leaflet-measure)

### [leaflet-gpx](https://github.com/mpetazzoni/leaflet-gpx)

# [live demo](https://maptracks-a9a31.firebaseapp.com/)
