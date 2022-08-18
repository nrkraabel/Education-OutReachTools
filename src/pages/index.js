import React from "react";
import "./Text.css";
import MapElement from "../components/Map/MapElement.js";
import C3Chart from "react-c3js";
import { colors } from "tabler-react";
import Header from "./Images/WebsiteHeaderImage.png";
import MapDetails from "./documents/MapDetails.pdf";

function Home() {
  return (
    <div>
      <div className="page">
        <div className="roundedGreyBox">
          <p>
            &emsp; Public Behavior Change Campaigns strive to increase awareness
            of stormwater impacts and encourage changes to actions that
            contribute to water quality and quantity problems within a
            watershed. Ecology recognizes the potential benefits of these
            campaigns on our state’s water bodies and includes behavior change
            campaigns as a required component of Stormwater Management Campaigns
            (SWMP). More recent NPDES permits require permittees to develop
            targeted campaigns using Social Marketing methods, evaluate the
            effectiveness of these campaigns, and apply results to improve their
            campaigns.
          </p>
          <p>
            &emsp;The purpose of this database is to provide jurisdictions with
            tools to identify and select which stormwater problems and behaviors
            to focus on, including guidance on how to conduct and report
            effectiveness evaluations to inform and improve future efforts in a
            positive feedback loop of doing and learning.
          </p>
        </div>
        <center>
          {" "}
          <h2>BEHAVIOR CHANGE CAMPAIGNS</h2>
        </center>

        <div className="map">
          <MapElement
            height="65vh"
            width="80vw"
            zoom={4.3}
            lat={35.51073}
            lng={-96.4247}
            alt="Map containing location data of studies in examined, click link below for more info."
          />
        </div>
        <center className="MapDetailsBox">
          <a
            className="MapDetails"
            href={MapDetails}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Opens a text based pdf of map info."
          >
            Map details
          </a>
        </center>
        <div className="Charts">
          <div className="chartBox">
            <center>
              <h2>TARGETED POLLUTANTS</h2>
            </center>
            <C3Chart
              data={{
                columns: [
                  // each columns data
                  ["data1", 7],
                  ["data2", 16],
                  ["data3", 0],
                  ["data4", 2],
                  ["data5", 0],
                  ["data6", 1],
                  ["data7", 18],
                  ["data8", 6],
                  ["data9", 7],
                ],
                type: "pie", // default type of chart
                colors: {
                  data1: "#003f5c",
                  data5: "#2f4b7c",
                  data2: "#665191",
                  data3: "#a05195",
                  data4: "#d45087",
                  data6: "#f95d6a",
                  data7: "#ff7c43",
                  data8: "#ffa600",
                  data9: "#de425b",
                },
                names: {
                  // name of each serie
                  data1: "Pathogens (Fecal Coliforms, Bacteria, E. Coli)",
                  data2: "Nutrients",
                  data3: "Metals",
                  data4: "Oils",
                  data5: "Sediment",
                  data6: "Trash",
                  data7: "Toxic Chemicals (Pesticide, Household Cleaner, etc.)",
                  data8: "LID",
                  data9: "Infiltration",
                },
              }}
              legend={{
                show: false,
              }}
              padding={{
                bottom: 0,
                top: 0,
              }}
              alt="Graph of targeted Pollutant"
            />
          </div>
          <div className="chartBox">
            <center>
              <h2>TARGET AUDIENCE</h2>
            </center>
            <C3Chart
              data={{
                columns: [
                  // each columns data
                  ["data1", 3],
                  ["data2", 5],
                  ["data3", 42],
                  ["data4", 4],
                ],
                type: "donut", // default type of chart
                colors: {
                  data1: "#423f4f",
                  data2: "#565e75",
                  data3: "#8096a5",
                  data4: "#d2dddf",
                },
                names: {
                  // name of each serie
                  data1: "General Public",
                  data2: "Businesses",
                  data3: "Residents",
                  data4: "Mobile Businesses",
                },
              }}
              legend={{
                show: false,
              }}
              padding={{
                bottom: 0,
                top: 0,
              }}
              alt="Graph of targeted Audience"
            />
          </div>
          <div className="chartBox">
            <center>
              <h2>TARGETED BEHAVIOR CHANGE</h2>
            </center>
            <C3Chart
              data={{
                columns: [
                  // each columns data
                  ["data1", 2],
                  ["data2", 4],
                  ["data3", 11],
                  ["data4", 4],
                  ["data5", 2],
                  ["data6", 24],
                  ["data7", 2],
                  ["data8", 4],
                  ["data9", 47],
                ],
                type: "pie", // default type of chart
                colors: {
                  data1: "#0000FF",
                  data2: "#0028FF",
                  data3: "#0050FF",
                  data4: "#003CFF",
                  data5: "#0014FF",
                  data6: "#0064FF",
                  data7: "#0F00FF",
                  data8: "#3600FF",
                  data9: "#00A0FF",
                },
                names: {
                  // name of each serie
                  data1: "Vehicle Care",
                  data2: "Other",
                  data3: "Pet Waste",
                  data4: "Septic Care",
                  data5: "Rain Garden",
                  data6: "Multiple",
                  data7: "Rain Barrel",
                  data8: "Littering",
                  data9: "Lawn Care",
                },
              }}
              legend={{
                show: false,
              }}
              padding={{
                bottom: 0,
                top: 0,
              }}
              alt="Graph of targeted behavior"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
