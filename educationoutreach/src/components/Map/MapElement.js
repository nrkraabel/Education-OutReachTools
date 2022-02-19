// @flow

import React, { useState, useEffect } from "react";

import "./PopupWindow.css";

import mapstyle from "./MapStyles.js";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapstyle}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);
