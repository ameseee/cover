export const getLatLng = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let location = position.coords;

    console.log(location.latitude, location.longitude, location.accuracy);
    return `${location.latitude}, ${location.longitude}`;
  });
};

// (`https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&callback=initMap`);
