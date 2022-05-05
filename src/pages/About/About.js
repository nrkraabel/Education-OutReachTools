import React from "react";
import "../Text.css";
import WSU from "C:/Users/Nicholas/educationtools/src/Images/WSUExtension.jpg";
import SAM from "C:/Users/Nicholas/educationtools/src/Images/SAM.jpg";
import StormWater from "C:/Users/Nicholas/educationtools/src/Images/StormwaterCenter.png";
import "./About.css";

function About() {
  return (
    <div className="page">
      <h2>ABOUT US</h2>
      <p>
        &emsp;This site was created by staff at WSU Extension and the Washington
        Stormwater Center as part of a larger project on behavior change
        campaigns funded by the Stormwater Action Monitoring (SAM) program. The
        SAM program is funded by permittees and administered by the Washington
        Department of Ecology. The project team included Dr. Joseph Cook (PI),
        Dr. Aimee Navickis-Brasch, Dr. Anand Jayakaran, Laurie Larson-Pugh, and
        Francesca White. We thank Madison Pearson for help with a mock-up of the
        site, and Nick Kraabel for website design. We also thank Christine
        Lovelace at the City of Shoreline for sharing her BMP selection tool,
        which was the inspiration for the tool here.
      </p>
      <div className="LogoImages">
        <img src={WSU} alt="WSU Extension Logo"></img>
      </div>
      <div className="LogoImages">
        <img src={SAM} alt="SAM Logo"></img>
      </div>
      <div className="LogoImages">
        <img src={StormWater} alt="StormWater Centers Logo"></img>
      </div>
    </div>
  );
}

export default About;
