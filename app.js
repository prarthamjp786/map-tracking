import "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js";

const coordinates = [
    [9.96233, 49.80404],
    [6.11499, 50.76891],
    [6.80592, 51.53548],
    [9.50523, 51.31991],
    [9.66089, 48.70158],
    [9.93368, 53.55608],
    [11.56122, 48.14496],
    [13.34253, 52.5319],
    [6.11327, 50.77715]
];

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhdGhhbWpwNzg2IiwiYSI6ImNrZjhmZ3p1ejAwbmkyeG1vM3Jncmw0c3oifQ.4LjLuhmrrN-nbBpGhUDAfQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [9.50523, 51.31991],
    zoom: 15
});

map.on('load', function () {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': coordinates
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': 'black',
            'line-width': 6
        }
    });
});