var map;



function initMap() {
	var map;
	var bounds = new google.maps.LatLngBounds();
	var mapOptions = {
		mapTypeId: 'roadmap'
	};

	// Display a map on the web page
	map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
	map.setTilt(50);

	// Multiple markers location, latitude, and longitude
	var markers = [
         ['Torrey Pines State Reserve, CA', 32.9216491, -117.2535292],
         ['La Jolla Natural Park, CA', 32.84263391, -117.2600372],
         ['Adobe Falls , CA', 32.78177739999999, -117.07123250000001]
     ];

	// Info window content
	var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Torrey Pines State Reserve</h3>' +
        '<p>Torrey Pines State Natural Reserve is 2,000 acres of coastal state park located in the community of La Jolla, in San Diego, California, off North Torrey Pines Road. <br /><a href="../pages/torry_pines.html">Read More</a></p>' + '</div>'],
        ['<div class="info_content">' +
        '<h3>La Jolla Natural Park</h3>' +
        '<p>This sort of adventure you can explore enroute to something else.<br /><a href="../pages/la_jolla.html">Read More</a></p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Adobe Falls </h3>' +
        '<p>This is one of the only non-seasonal waterfalls in San Diego.<br /><a href="../pages/adobe_falls.html">Read More</a></p>' +
        '</div>']
    ];

	// Add multiple markers to map
	var infoWindow = new google.maps.InfoWindow(),
		marker, i;

	// Place each marker on the map  
	for (i = 0; i < markers.length; i++) {
		var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
		bounds.extend(position);
		marker = new google.maps.Marker({
			position: position,
			map: map,
			title: markers[i][0]
		});

		// Add info window to marker    
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infoWindow.setContent(infoWindowContent[i][0]);
				infoWindow.open(map, marker);
			}
		})(marker, i));

		// Center the map to fit all markers on the screen
		map.fitBounds(bounds);
	}

	// Set zoom level
	var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
		this.setZoom(10);
		google.maps.event.removeListener(boundsListener);
	});



}
// Load initialize function