import React from "react";
import GoogleMapReact from "google-map-react";

const MapMarker = ({ text }) => (
  <div
    style={{
      width: "10px",
      height: "10px",
      color: "red",
      background: "red",
      borderRadius: "50%",
    }}
  >
    *
  </div>
);
function Maps() {
  const center = {
    lat: 30.3,
    lng: -81.6,
  }; // Replace with your preferred initial location coordinates

  const locations = [{ lat: 30.3281, lng: -81.6721 }];

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDw-wcGHKH4Kx9Aq1pPKhLKagMl7WZpmf8" }}
        defaultCenter={center}
        defaultZoom={10}
      >
        {locations.map((location, index) => (
          <MapMarker key={index} lat={location.lat} lng={location.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
}
export default Maps;
