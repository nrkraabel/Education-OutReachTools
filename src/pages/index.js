import React from "react";
import "./Text.css";
import MapElement from "../components/Map/MapElement.js";
import C3Chart from "react-c3js";
import { colors } from "tabler-react";

function Home() {
  return (
    <div className="page">
      <p>
        &emsp; Public Behavior Change Campaigns strive to increase awareness of
        stormwater impacts and encourage changes to actions that contribute to
        water quality and quantity problems within a watershed. Ecology
        recognizes the potential benefits of these campaigns on our state’s
        water bodies and includes behavior change campaigns as a required
        component of Stormwater Management Campaigns (SWMP). More recent NPDES
        permits require permittees to develop targeted campaigns using Social
        Marketing methods, evaluate the effectiveness of these campaigns, and
        apply results to improve their campaigns.
      </p>
      <p>
        &emsp;The purpose of this database is to provide jurisdictions with
        tools to identify and select which stormwater problems and behaviors to
        focus on, including guidance on how to conduct and report effectiveness
        evaluations to inform and improve future efforts in a positive feedback
        loop of doing and learning.
      </p>
      <center>
        {" "}
        <h2>BEHAVIOR CHANGE CAMPAIGNS</h2>
      </center>

      <center className="map">
        <MapElement height="60vh" width="70vw" zoom={4.3} />
      </center>

      <div>
        <C3Chart
          style={{ height: "20rem" }}
          data={{
            columns: [
              // each columns data
              ["data1", 182],
              ["data2", 122],
              ["data3", 5],
              ["data4", 72],
              ["data5", 21],
              ["data6", 19],
              ["data7", 101],
              ["data8", 51],
            ],
            type: "pie", // default type of chart
            colors: {
              data1: colors["rgb(0,63,92)"],
              data5: colors["rgb(88,80,141"],
              data2: colors["rgb(188,80,144"],
              data3: colors["rgb(255,99,97"],
              data4: colors["rgb(255,166,0"],
              data6: colors["rgb(108,41,3"],
              data7: colors["rgb(255,241,56"],
              data8: colors["rgb(0,166,81"],
            },
            names: {
              // name of each serie
              data1: "LID/Infiltration",
              data2: "Metals",
              data3: "Nutrients",
              data4: "Oils",
              data5: "Pathogens (Fecal Coliforms, Bacteria, E. Coli)",
              data6: "Sediment",
              data7: "Toxic Chemicals (Pesticide, Household Cleaner, etc.)",
              data8: "Trash",
            },
          }}
          legend={{
            show: true,
          }}
          padding={{
            bottom: 0,
            top: 0,
          }}
        />
      </div>
    </div>
  );
}

export default Home;
