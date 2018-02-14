
/*Meteor.startup(function() {
   GoogleMaps.load();
 });*/


 var MAP_ZOOM = 15;

 Meteor.startup(function() {
   GoogleMaps.load();
 });

 Template.map.onCreated(function() {
   var self = this;

   GoogleMaps.ready('map', function(map) {
     var marker;

     // Create and move the marker when latLng changes.
     self.autorun(function() {
       var latLng = Geolocation.latLng();

       if (! latLng)
         return;

       // If the marker doesn't yet exist, create it.
       if (! marker) {
         marker = new google.maps.Marker({
           position: new google.maps.LatLng(43.437397, -80.4863699),
           map: map.instance,
           title:"1-250 Mill Street Kitchener Ont N2H 3R5",
           icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
         });
       }
       // The marker already exists, so we'll just change its position.
      /* else {
         marker.setPosition(latLng);
       }*/

       // Center and zoom the map view onto the current position.
       map.instance.setCenter(marker.getPosition());
       map.instance.setZoom(MAP_ZOOM);

     });
   });
 });

 Template.map.helpers({
   geolocationError: function() {
     var error = Geolocation.error();
     return error && error.message;
   },
   mapOptions: function() {
     var latLng = Geolocation.latLng();
     // Initialize the map once we have the latLng.
     if (GoogleMaps.loaded() && latLng) {
       return {
         center: new google.maps.LatLng(43.437397, -80.4863699),
         zoom: MAP_ZOOM
       };
     }
   }
 });
