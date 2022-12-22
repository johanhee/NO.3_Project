function initMap(){
  const map=new google.maps.Map(document.getElementById("map"), {
	 center: {lat: 37.52035839710655, lng: 127.03083409796574},
	 zoom: 18
  });
  const image="./image/placeholder.png";
  const beachMarker=new google.maps.Marker({
	 map,
	 position: {lat: 37.52035839710655, lng: 127.03083409796574},
	 icon: image
  });
}

window.initMap=initMap;