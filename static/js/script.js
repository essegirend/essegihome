let map;

function initMap() {
  const mapOptions = {
    zoom: 16,
    center: { lat: 37.289503250360255, lng: 13.519411814393107 },
    disableDefaultUI: true,
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    position: { lat: 37.289503250360255, lng: 13.519411814393107},
    map: map,
  });
  
  const infowindow = new google.maps.InfoWindow({
    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;

