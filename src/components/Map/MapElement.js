import React, { useState, useEffect } from "react";

import "./PopupWindow.css";

import mapstyle from "./MapStyles.js";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const center = {
  lat: 35.51073,
  lng: -96.4247,
};
const options = {
  styles: mapstyle,
  disableDefaultUI: true,
  zoomControl: true,
};
function MapElement(props) {
  const mapContainerStyle = {
    width: props.width,
    height: props.height,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  //To prevent rerendering the map data is saved unless data changes
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Map";
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={props.zoom || 5}
      center={center}
      options={options}
      onLoad={onMapLoad}
    ></GoogleMap>
  );
}

export default MapElement;
