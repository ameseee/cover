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






//
// initialize() {
//   const geocoder = new google.maps.Geocoder();
// }
//
// findAddress(geocoder) {
//   const coordinates = this.locationSuccess();
// geocoder.geocode( { 'location': coordinates}, (results, status) => {
//   if (status === 'OK') {
//     const address = results[0].formatted_address;
//     console.log('address in geo function', address);
//   }
// });
//}
