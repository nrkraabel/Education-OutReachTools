import React from "react";
import "./Text.css";
import MapContainer from "../components/Map/MapElement.js";

function Home() {
  return (
    <div className="page">
      <p>
        &emsp; Public Behavior Change Programs strive to increase awareness of
        stormwater impacts and encourage changes to actions that contribute to
        water quality and quantity problems within a watershed. Ecology
        recognizes the potential benefits of these programs on our state’s water
        bodies and includes behavior change programs as a required component of
        Stormwater Management Programs (SWMP). More recent NPDES permits require
        permittees to develop targeted programs using Social Marketing methods,
        evaluate the effectiveness of these programs, and apply results to
        improve their programs.
      </p>
      <p>
        &emsp;The purpose of this database is to provide jurisdictions with
        tools to identify and select which stormwater problems and behaviors to
        focus on, including guidance on how to conduct and report effectiveness
        evaluations to inform and improve future efforts in a positive feedback
        loop of doing and learning.
      </p>

      <h2 className="center">BEHAVIOR CHANGE PROGRAMS</h2>
      {/*<MapContainer />*/}
    </div>
  );
}

export default Home;
