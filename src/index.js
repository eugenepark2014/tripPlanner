const mapboxgl = require("mapbox-gl")
const buildMarker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoibXN0aXJuIiwiYSI6ImNqZXEyajNvZjYzemMzM28xZHRkenBqb3gifQ.jk5RaOjx01kYlPKe_jwenw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

buildMarker("restaurants", [-74.009151, 40.705086]).addTo(map);
const hotelMaker = buildMarker("hotels", [-74.009191, 40.705086]);
hotelMaker.addTo(map)
const activityMaker = buildMarker("activities", [-74.009271, 40.705086]);
activityMaker.addTo(map)

module.exports = map;
