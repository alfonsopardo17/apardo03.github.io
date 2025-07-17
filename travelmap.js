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

let circleMarker01 = L.circle(coordinates, {
  color: "cyan",
  fillcolor: "maroon",
  fillOpacity: 0.5,
  radius: 500
}).bindPopup(`<center>
             <h3>Hello from Madrid, Spain</h3>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/e6gRU8RSqnc?si=HNdt7BVjG9spNlpZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </center>`).addTo(map);
