// Add the default map token from the Mapbox account
mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW55dWFuenkiLCJhIjoiY201eHprYXU0MGZwejJsb242Y3Nza25oYyJ9.h05hqdnqlx2BwgwbQNuKCg'; 

//Import the map style from MapBox. 
const map = new mapboxgl.Map({
    container: 'map', // map container ID in the index.html file.
    style: 'mapbox://styles/kevinyuanzy/cm8gdgpss00fk01ry06upe52t', // style URL from created MapBox style.
    center: [-79.391820, 43.701268], // starting position [lng, lat]. 
    zoom: 11, // starting zoom level.
});

// add zoom control to the map
// Add fullscreen option to the map

map.addControl(new mapboxgl.NavigationControl(), 'top-left');
map.addControl(new mapboxgl.FullscreenControl(), 'top-left');

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
            'icon-size': 1, 
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
        'type': 'circle',
        'source': 'affordable_housing',
        'layout': {
            'icon-image': 'lodging',
            'icon-size': 1 
        },
    });

    map.addSource('subway_line', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/ttcsubwayroute_updated.geojson' // The URL to GeoJson incompleted portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-subway-line', 
        'type': 'line', 
        'source': 'subway_line',
        'paint': {
            'line-color': [
                'step', // STEP expression produces stepped results based on value pairs
                ['get', 'Line'], // GET expression retrieves property value from 'population' data field
                '#ffffff', // Colour assigned to any values < first step
                1, '#F8C300', // Colours assigned to values >= each step
                2, '#00923F',
                4, '#A21A68'
            ],
            'line-width': 1.5,
        },
    });

    map.addSource('subway_stations', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Group-project/refs/heads/main/data/ttcstations.geojson' // The URL to GeoJson completed portion of subway line.
    });

    map.addLayer({
        'id': 'toronto-subway-stations-points',
        'type': 'circle',
        'source': 'subway_stations',
        'paint': {
            'circle-color': '#f5f5f5',
            'circle-radius': 5,
            'circle-stroke-color': '#000000',
            'circle-stroke-width': 1
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

    document.getElementById('subwaycheck').addEventListener('change', (e) => {
        map.setLayoutProperty(
            'toronto-subway-stations-points',
            'visibility',
            e.target.checked ? 'visible' : 'none'
        );
        map.setLayoutProperty(
            'toronto-subway-line',
            'visibility',
            e.target.checked ? 'visible' : 'none'
        );
    });
});

    // Pop-up windows that appear on a mouse click or hover
    // pop up, Bicycle Parking. When mouse click, can see the bicycle parking info. Changing cursor on mouse over.
    map.on('mouseenter', 'toronto-subway-stations-points', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    
    // Changing cursor when mouse leave
    map.on('mouseleave', 'toronto-subway-stations-points', () => {
        map.getCanvas().style.cursor = '';
    });
    
    // Event listener for showing popup on click, here is points data bicycle parking
    map.on('click', 'toronto-subway-stations-points', (e) => {
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
    map.on('mouseenter', 'toronto-affordable-housing-points', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'toronto-affordable-housing-points', () => {
        map.getCanvas().style.cursor = '';
    });
    
    // Event listener for showing popup on click, here is line data cycling network
    map.on('click', 'toronto-affordable-housing-points', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                `<b>Address:</b> ${e.features[0].properties.ADDRESS}<br>
                 <b>Area-Name:</b> ${e.features[0].properties.AREA_NAME}`
            )
            .addTo(map);
    });

    // pop up, cycling network, mouse enter and mouse leave
    map.on('mouseenter', 'toronto-health-services-points', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'toronto-health-services-points', () => {
        map.getCanvas().style.cursor = '';
    });
    
    // Event listener for showing popup on click, here is line data cycling network
    map.on('click', 'toronto-health-services-points', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                `<b>Agency_Name:</b> ${e.features[0].properties.AGENCY_NAME}<br>
                 <b>Address:</b> ${e.features[0].properties.ADDRESS_FULL}<br>
                 <b>Hours:</b> ${e.features[0].properties.HOURS}<br>
                 <b>Website:</b> ${e.features[0].properties.WEBSITE}`
            )
            .addTo(map);
    });

    // pop up, cycling network, mouse enter and mouse leave
    map.on('mouseenter', 'toronto-signature-sites-points', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'toronto-signature-sites-points', () => {
        map.getCanvas().style.cursor = '';
    });
    
    // Event listener for showing popup on click, here is line data cycling network
    map.on('click', 'toronto-signature-sites-points', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                `<b>Name:</b> ${e.features[0].properties.AREA_NAME}<br>`
            )
            .addTo(map);
    });

    // pop up, cycling network, mouse enter and mouse leave
    map.on('mouseenter', 'toronto-police-facilities-points', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'toronto-police-facilities-points', () => {
        map.getCanvas().style.cursor = '';
    });
    
    // Event listener for showing popup on click, here is line data cycling network
    map.on('click', 'toronto-police-facilities-points', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                `<b>Address:</b> ${e.features[0].properties.ADDRESS}<br>
                 <b>Facility:</b> ${e.features[0].properties.FACILITY}<br>`
            )
            .addTo(map);
    });
 

    map.on('load', () => {
        const legend = document.getElementById('legend');
    
        const layers = [
            { id: 'toronto-signature-sites-points', name: 'Signature Sites', type: 'icon', icon: 'attraction' },
            { id: 'toronto-police-facilities-points', name: 'Police Facilities', type: 'icon', icon: 'Police' },
            { id: 'toronto-affordable-housing-points', name: 'Affordable Housing', type: 'color', color: '#260E5D' },
            { id: 'toronto-health-services-points', name: 'Health Services', type: 'icon', icon: 'Hospital' },
            { id: 'toronto-subway-stations-points', name: 'Subway Stations', type: 'color', color: '#f5f5f5'},
        ];
    
        layers.forEach(layer => {
            const item = document.createElement('div');
            item.className = 'legend-item';
    
            const key = document.createElement('span');
            key.className = 'legend-color';
    
            if (layer.type === 'color') {
                key.style.backgroundColor = layer.color; // 显示颜色标识
            } else if (layer.type === 'icon') {
                key.innerHTML = `<img src="assets_icons/${layer.icon}.png" class="legend-icon">`;  // ✅ 使用本地图片
            }
    
            // 添加 layer 名称
            const label = document.createElement('span');
            label.textContent = layer.name;
    
            // 组合 legend
            item.appendChild(key);
            item.appendChild(label);
            legend.appendChild(item);
        });
    });

    