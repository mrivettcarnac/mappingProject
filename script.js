//Setting map and defifing it's location

var map = L.map('projectMap').setView([40.714269, -74.005973], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

//Creating a variable that links to the healthCenterData data set.

var healthCenter = healthCenterData.rows; 

//Starting for loop that will place a marker and popup at every health center

for (var i=0; i<healthCenter.length; i++){
	
	var individualHealthCenter = healthCenter[i];
	
	var marker = L.marker([individualHealthCenter.Latitude, individualHealthCenter.Longitude]).addTo(map);
	
	marker.bindPopup("<b>"+individualHealthCenter.NameofCenter+"</b><br>"+individualHealthCenter.CenterAddress+"<br>"+individualHealthCenter.TelephoneNumber);

} //End of for loop.
