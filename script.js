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

    map.addSource('affordable_housing', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/affordablehousing.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-affordable-housing-points',
        'type': 'symbol',
        'source': 'affordable_housing',
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
    
    //Change map layer display based on check box using setLayoutProperty method
    document.getElementById('signaturecheck').addEventListener('change', (e) => {
        map.setLayoutProperty(
            'toronto-signature-sites-points',
            'visibility',
        e.target.checked ? 'visible' : 'none'
        );
    });

    document.getElementById('policecheck').addEventListener('change', (e) => {
        map.setLayoutProperty(
            'toronto-police-facilities-points',
            'visibility',
        e.target.checked ? 'visible' : 'none'
        );
    });
    
    document.getElementById('healthcheck').addEventListener('change', (e) => {
        map.setLayoutProperty(
            'toronto-health-services-points',
            'visibility',
        e.target.checked ? 'visible' : 'none'
        );
    });

    document.getElementById('housingcheck').addEventListener('change', (e) => {
        map.setLayoutProperty(
            'toronto-affordable-housing-points',
            'visibility',
        e.target.checked ? 'visible' : 'none'
        );
    });

});
 

    // Pop-up windows that appear on a mouse click or hover
    // pop up, Bicycle Parking. When mouse click, can see the bicycle parking info. Changing cursor on mouse over.
    map.on('mouseenter', 'subway-station', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    
    // Changing cursor when mouse leave
    map.on('mouseleave', 'subway-station', () => {
        map.getCanvas().style.cursor = '';
    });
    
    // Event listener for showing popup on click, here is points data bicycle parking
    map.on('click', 'subway-station', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat) //Use method to set coordinates of popup based on mouse click location
            .setHTML(
                `<b>Station Name:</b> ${e.features[0].properties.Station_Name}<br>
                 <b>Line:</b> ${e.features[0].properties.Line}<br>
                 <b>Wheelchair Friendly:</b> ${e.features[0].properties.Wheelchair_Access}`
            )
            .addTo(map); //Show popup on map
    });

    // pop up, cycling network, mouse enter and mouse leave
    map.on('mouseenter', 'cycling-network', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'cycling-network', () => {
        map.getCanvas().style.cursor = '';
    });
    
    // Event listener for showing popup on click, here is line data cycling network
    map.on('click', 'cycling-network', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                `<b>Street Name:</b> ${e.features[0].properties.STREET_NAME}<br>
                 <b>From Street:</b> ${e.features[0].properties.FROM_STREET}<br>
                 <b>To Street:</b> ${e.features[0].properties.TO_STREET}`
            )
            .addTo(map);
    });