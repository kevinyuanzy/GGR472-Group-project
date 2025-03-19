// Add the default map token from the Mapbox account
mapboxgl.accessToken = 'pk.eyJ1IjoieGlleWl3ZTIiLCJhIjoiY201bzlrMzF4MGttMTJub20xODk5dGxydiJ9._U9znMhQu-2lUtT3MidkQg'; 

//Import the map style from MapBox. 
const map = new mapboxgl.Map({
    container: 'map', // map container ID in the index.html file.
    style: 'mapbox://styles/xieyiwe2/cm8c26hyq00a301s58yvi4c93', // style URL from created MapBox style.
    center: [-79.391820, 43.701268], // starting position [lng, lat]. 
    zoom: 11, // starting zoom level.
});

// add zoom control
map.addControl(new mapboxgl.NavigationControl());

// Add fullscreen option to the map
map.addControl(new mapboxgl.FullscreenControl());


const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    countries: "ca" //Canada only
});


// Append geocoder variable to goeocoder HTML div to position on page
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// Add event listener which returns map view to full screen on button click using flyTo method
document.getElementById('returnbutton').addEventListener('click', () => {
    map.flyTo({ center: [-79.39, 43.73], zoom: 10 });
});



map.on('load', () => {
  

    map.addSource('signature_sites', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/Toronto%20Signature%20Sites%20-%204326.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-signature-sites-points', 
        'type': 'symbol', 
        'source': 'signature_sites',
        'layout': {
            'icon-image': 'attraction',
            'icon-size': 1 
        },
    });

    map.addSource('police_facilities', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/Police_Facilities_-8924748313065318893.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-police-facilities-points',
        'type': 'symbol',
        'source': 'police_facilities',
        'layout': {
            'icon-image': 'police',
            'icon-size': 1 
        },
    });

    map.addSource('community_housing', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/Community%20Housing%20Data%20-%204326.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-community-housing-points',
        'type': 'symbol',
        'source': 'community_housing',
        'layout': {
            'icon-image': 'lodging',
            'icon-size': 1 
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
            'line-width': 1,
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
            'circle-color': '#cf7878',
            'circle-radius': 2 
        },
    });

    map.addSource('health_services', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/Health%20Services%20-%204326.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-health-services-points',
        'type': 'symbol',
        'source': 'health_services',
        'layout': {
            'icon-image': 'hospital',
            'icon-size': 1  
        },
    });
    // 
})


