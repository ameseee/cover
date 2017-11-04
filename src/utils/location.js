const locationSuccess = (pos) => {
  let crd = pos.coords;

  console.log(`Your current position is: Lat: ${crd.latitude}, Lng: ${crd.longitude}, More or less ${crd.accuracy} meters.`);
};

const locationError = (error) => {
  alert(`ERROR(${error.code}): ${error.message}`);
};

export const getLatLng = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(
    locationSuccess,
    locationError,
    options
  );
};

// (`https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&callback=initMap`)
