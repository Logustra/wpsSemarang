google.maps.event.addDomListener(window, 'load', init);
function init() {
  var mapOptions = {
      zoom: 13,
      scrollwheel: false,
      DoubleClickZoom: true,
      center: new google.maps.LatLng(40.761636, -73.977579), // New York
      styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var icon = {
    url: "assets/images/map-marker.svg", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };
 var point = new google.maps.LatLng(40.761636, -73.977579);
 var data = "11 W 53rd St <br> New York <br> NY 10019 <br><br> <a href='https://www.google.com/maps/place/Museum+of+Modern+Art/@40.7584387,-73.9968041,14z/data=!3m1!5s0x89c258fbd5ec7547:0x7edf0a3ab30aad59!4m5!3m4!1s0x89c258f97bdb102b:0xea9f8fc0b3ffff55!8m2!3d40.7614327!4d-73.9776216'>View on Google Maps</a>";
 var infowindow = new google.maps.InfoWindow({
   content: data
 });
  var marker = new google.maps.Marker({
      position: point,
      map: map,
      icon: icon,
  });
  google.maps.event.addListener(marker, 'click', function() {
   infowindow.open(map,marker);
 });
}
