    
    document.addEventListener("deviceready", onDeviceReady);
    function onDeviceReady() {
      var onSuccess = function(position) {
        document.getElementById('place').innerHTML='Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n';
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        document.getElementById('place').innerHTML='code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n';
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
