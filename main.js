$(document).ready(function(){

/*map*/

var map = new GMaps({
    div: '.map',
    lat: 25.085914,
    lng: 121.5191553
  });

map.addMarker({
    lat: 25.085914,
    lng: 121.5191553,
    title: '絕地聖殿',
    infoWindow: {
        content: '<p>絕地聖殿</p>'
      }
});


});