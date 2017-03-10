module.exports = function (address, callback) {
  var geocoder = new google.maps.Geocoder()
  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var lat = results[0].geometry.location.lat()
      var lng = results[0].geometry.location.lng()
      console.log(lat, lng, 'result?')
      callback({ Status: 'OK', Latitude: lat, Longitude: lng })
    }
  })
}
