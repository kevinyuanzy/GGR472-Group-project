// Add the default map token from the Mapbox account
mapboxgl.accessToken = 'pk.eyJ1IjoieGlleWl3ZTIiLCJhIjoiY201bzlrMzF4MGttMTJub20xODk5dGxydiJ9._U9znMhQu-2lUtT3MidkQg'; 

//Import the map style from MapBox. 
const map = new mapboxgl.Map({
    container: 'Lab2Map', // map container ID in the index.html file.
    style: 'mapbox://styles/xieyiwe2/cm8c26hyq00a301s58yvi4c93', // style URL from created MapBox style.
    center: [-79.391820, 43.701268], // starting position [lng, lat]. 
    zoom: 11.25, // starting zoom level.
});
duiwuikdwyd

