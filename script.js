// Add the default map token from the Mapbox account
mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW55dWFuenkiLCJhIjoiY201eHprYXU0MGZwejJsb242Y3Nza25oYyJ9.h05hqdnqlx2BwgwbQNuKCg'; 

//Import the map style from MapBox. 
const map = new mapboxgl.Map({
    container: 'Lab2Map', // map container ID in the index.html file.
    style: 'mapbox://styles/kevinyuanzy/cm6ztbpqc003s01qwcvdrf6ft', // style URL from created MapBox style.
    center: [-79.391820, 43.701268], // starting position [lng, lat]. 
    zoom: 11, // starting zoom level.
});

map.on('load', () => {
  
    map.addSource('signature_sites', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/Toronto%20Signature%20Sites%20-%204326.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-signature-sites-points', 
        'type': 'circle', 
        'source': 'signature_sites',
        'paint': {
            'circle-color': '#ff1a1a',
            'circle-radius': 2 
        },
    });

    map.addSource('police_facilities', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/Police_Facilities_-8924748313065318893.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-police-facilities-points',
        'type': 'circle',
        'source': 'police_facilities',
        'paint': {
            'circle-color': '#105694',
            'circle-radius': 2 
        },
    });

    map.addSource('affordable_housing', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/affordablehousing.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-affordable-housing-points',
        'type': 'circle',
        'source': 'affordable_housing',
        'paint': {
            'circle-color': '#edc707',
            'circle-radius': 2 
        },
    });

    map.addSource('subway_line', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/TorontoSubwayRoutes.geojson' // The URL to GeoJson incompleted portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-subway-line', 
        'type': 'line', 
        'source': 'subway_line',
        'paint': {
            'line-color': '#00923f',
            'line-width': 2,
        },
    });

    map.addSource('subway_stations', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/TorontoSubwayStationsRidership.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-subway-stations-points',
        'type': 'circle',
        'source': 'subway_stations',
        'paint': {
            'circle-color': '#000000',
            'circle-radius': 2 
        },
    });

    map.addSource('health_services', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/Health%20Services%20-%204326.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-health-services-points',
        'type': 'circle',
        'source': 'health_services',
        'paint': {
            'circle-color': '#ed7e07',
            'circle-radius': 2 
        },
    });

})