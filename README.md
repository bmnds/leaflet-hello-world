# leaflet-hello-world
Study of Leaflet mapping library.

Requirements so far:
* build with WebPack
* draw a simple circle and show a popup on click
* draw a simple marker with an icon and show a popup on click
* include measure widget

What to study next?
* draw a line from a list of points in JSON or GeoJSON
* query a feature layer by attribute
* query a feature layer by geometry
* render a timeline for temporal data

# dependencies

### (leaflet)[https://leafletjs.com/]

### (leaflet-measure)[https://github.com/ljagis/leaflet-measure]

### css-loader & style-loader & (leaflet-defaulticon-compatibility)[https://github.com/ghybs/leaflet-defaulticon-compatibility]

Due to Leaflet's use of `url` inside `.css`, a compatibility plugin had to be imported just to handle this within webpack.