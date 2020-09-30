
const api = "https://api.wheretheiss.at/v1/satellites/25544";
async function getISS() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  console.log(data.latitude);
  console.log(data.longitude);
  var latitude = data.latitude;
  var longitude = data.longitude;
  var altitude = data.altitude;
  document.getElementById("lat").textContent = latitude;
  document.getElementById("long").textContent = longitude;
  document.getElementById("alt").textContent =altitude;

  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude]
      } 
    
    }]

  };
  geojson.features.forEach(function (marker) {

    // create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker';

     
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });

  


}

setInterval(getISS, 2000);
 

 