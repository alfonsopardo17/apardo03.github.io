//40.4167° N, 3.7033° W
let coordinates = [40.4167, -3.7033];

let map = L.map("map", {
  center: coordinates, 
  zoom: 18
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
