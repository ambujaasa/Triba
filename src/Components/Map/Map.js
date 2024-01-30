import React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "./Map.css";

const MapView = (props) => {
  return (
    <MapContainer
      style={{ height: "100vh" }}
      id="map"
      center={[13.002, 77.5907]}
      zoom={15}
      maxZoom={19}
      zoomControl={false}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGVjb3JzbmFwIiwiYSI6ImNrcTVjNmRwdzByM20ybnBwenVpbTBwcG8ifQ.-CUcCijKzxvvfry7qqxdzQ"
        attribution='© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      <ZoomControl position={"bottomleft"} />
    </MapContainer>
  );
};

export default MapView;
