var map = L.map('map').setView([-14.2350, -51.9253], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    minZoom: 1,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery � <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

var jsonData = {};

fetch('./locations.json')
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        jsonData = data;

        var locations = [];

        while (locations.length < Object.keys(jsonData).length) {
            locations = [
                ...locations,
                [
                    jsonData[locations.length].lati,
                    jsonData[locations.length].long
                ]
            ];
        }

        var indexOfLocations = 0;

        while (indexOfLocations < locations.length) {
            L.marker(locations[indexOfLocations]).addTo(map);
            indexOfLocations += 1;
        }

    });

