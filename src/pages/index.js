import "./Text.css";
import MapElement from "../components/Map/MapElement.js";
import C3Chart from "react-c3js";
import React, { useState } from "react";
import { storage } from ".././firebase";

function Home() {
  const [pdf, setPdf] = useState("");

  // Getting Download Link
  storage
    .ref("Documents")
    .child("MapDetails.pdf")
    .getDownloadURL()
    .then((url) => {
      setPdf(url);
    });
  return (
    <div>
      <div className="page">
        <div className="roundedGreyBox">
          <p>
            &emsp; Behavior Change Campaigns encourage members of the public to
            change their actions in ways that contribute to water quality and
            runoff problems within a watershed. In many places, NPDES permits
            require permittees to develop targeted campaigns using “social
            marketing” or “community-based social marketing” methods. Some also
            require permittees to evaluate the effectiveness of these campaigns
            and apply results to improve their campaigns.
          </p>
          <p>
            &emsp;This site has two main purposes. First, what works? To help
            jurisdictions assess the effectiveness of existing campaigns around
            the country, it compiles every known evaluation of a behavior change
            campaign in stormwater or water quality. We provide details on
            campaign implementation and evaluation and rate the research quality
            of the evaluation. (If you know of an evaluation that is not on the
            site, please help us by submitting it via the “Add Campaign”
            function above.)
          </p>
          <p>
            &emsp;Second, it provides jurisdictions with guidance on choosing
            and evaluating their own campaigns. It provides a downloadable
            decision-aide (in spreadsheet form) that a jurisdiction can use when
            deciding among several options for new campaigns. It also includes
            guidance for permittees in Washington State on how to conduct and
            report effectiveness evaluations to inform and improve future
            efforts in a positive feedback loop of doing and learning.
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
            href={pdf}
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
                  data1: "#d2dddf",
                  data2: "#423f4f",
                  data3: "#565e75",
                  data4: "#565e75",
                  data5: "#d2dddf",
                  data6: "#d2dddf",
                  data7: "#8096a5",
                  data8: "#8096a5",
                  data9: "#838996",
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
                  data1: "#423f4f",
                  data2: "#423f4f",
                  data3: "#565e75",
                  data4: "#565e75",
                  data5: "#d2dddf",
                  data6: "#d2dddf",
                  data7: "#8096a5",
                  data8: "#8096a5",
                  data9: "#838996",
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
