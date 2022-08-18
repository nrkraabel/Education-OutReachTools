import React, { useState, useEffect } from "react";

import "./PopupWindow.css";

import mapstyle from "./MapStyles.js";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { fireData } from "../../firebase";
import { get, child } from "firebase/database";

const libraries = ["places"];

const options = {
  styles: mapstyle,
  disableDefaultUI: true,
  zoomControl: true,
};
function MapElement(props) {
  const [Studies, setStudies] = useState([]);
  useEffect(() => {
    let dataRef = fireData;
    get(child(dataRef, "/")).then((snapshot) => {
      var Study = snapshot.val();
      setStudies(Study);
    });
  }, []);
  const center = {
    lat: props.lat, //35.51073
    lng: props.lng, //-96.4247
  };

  const mapContainerStyle = {
    width: props.width,
    height: props.height,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAG1f8Z7haVyHIqox2r6Y3KSB06EAeVnzs",
    libraries,
  });
  const [selected, setSelected] = React.useState(null);
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
    >
      {Studies.map((marker) => (
        <Marker
          key={marker.Title}
          position={{ lat: marker.lat, lng: marker.lon }}
          icon={{
            url: "/MapMarker.svg",
            scaledSize: new window.google.maps.Size(25, 25),
          }}
          onClick={() => {
            setSelected(marker);
          }}
        />
      ))}
      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lon }}
          onCloseClick={() => {
            setSelected(null);
            localStorage.removeItem(selected);
          }}
        >
          <div>
            <h1 className="MapMarker">{selected.Title}</h1>
            <a
              href={"/" + selected.InternalRef}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to more details
            </a>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
}

export default MapElement;
