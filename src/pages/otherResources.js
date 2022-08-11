import React from "react";
import "./Text.css";
import OtherResourcesImage from "./Images/OtherResources.jpg";
function OtherResources() {
  return (
    <div className="page">
      <div className="flexbox">
        <div className="otherResourcesText">
          <h2>OTHER RESOURCES</h2>
          <h3>Stormwater in WA</h3>
          <p>
            <a
              href="https://www.wastormwatercenter.org/"
              target="_blank"
              rel="noreferrer"
            >
              Washington Stormwater Center
            </a>
          </p>
          <p>
            <a
              href="https://ecology.wa.gov/Regulations-Permits/Reporting-requirements/Stormwater-monitoring/Stormwater-Action-Monitoring"
              target="_blank"
              rel="noreferrer"
            >
              Stormwater Action Monitoring
            </a>
            &nbsp; (SAM)
          </p>
          <p>
            <a href="https://www.psp.wa.gov/" target="_blank" rel="noreferrer">
              Puget Sound Partnership
            </a>
          </p>
          <p>
            <a
              href="https://vitalsigns.pugetsoundinfo.wa.gov/VitalSignIndicator/Detail/45"
              target="_blank"
              rel="noreferrer"
            >
              Sound Behavior Index
            </a>
          </p>
          <br />
          <br />

          <h3>Other BMP databases</h3>
          <p>
            <a
              href="https://www.chesapeakebehaviorchange.org/"
              target="_blank"
              rel="noreferrer"
            >
              Chesapeake Behavior Change
            </a>
          </p>
          <p>
            <a
              href="https://www.toolsofchange.com/en/home/"
              target="_blank"
              rel="noreferrer"
            >
              Tools of Change
            </a>
          </p>
          <p>
            <a href="https://cbsm.com/" target="_blank" rel="noreferrer">
              Community-Based Social Marketing (cbsm.org)
            </a>
          </p>
          <p>
            <a href="https://pnsma.org/" target="_blank" rel="noreferrer">
              Pacific Northwest Social Marketing Association
            </a>
          </p>
          <p>
            EPA Non Point Source (NPS) Outreach &nbsp;
            <a
              href="https://cfpub.epa.gov/npstbx/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Toolbox
            </a>
          </p>
          <br />
          <br />

          <h3>
            Social marketing online training and courses (may not be actively
            offered)
          </h3>
          <p>
            <a
              href="https://coast.noaa.gov/digitalcoast/training/social-marketing.html"
              target="_blank"
              rel="noreferrer"
            >
              NOAA
            </a>
            &nbsp; Fostering Behavior Change
          </p>
          <p>
            EPA &nbsp;
            <a
              href="https://cfpub.epa.gov/watertrain/moduleFrame.cfm?parent_object_id=1822"
              target="_blank"
              rel="noreferrer"
            >
              Getting in Step
            </a>
            &nbsp; training (self-guided)
          </p>
          <p>
            <a
              href="https://ifas-aec-ccsm.catalog.instructure.com/courses/ccsm"
              target="_blank"
              rel="noreferrer"
            >
              University of Florida “Cultivating Community Cultivating Community
              Change: Social Marketing to Encourage Environmental Behaviors
            </a>
          </p>
          <p>
            <a
              href="https://sites.nicholas.duke.edu/execed/environmental-marketing-strategy-for-behavior-change/"
              target="_blank"
              rel="noreferrer"
            >
              Duke
            </a>
            &nbsp; University “Environmental Marketing Strategy for Behavior
            Change”
          </p>
          <p>
            UC San Diego Extension &nbsp;
            <a
              href="https://extendedstudies.ucsd.edu/courses-and-programs/sustainability-and-behavior-change"
              target="_blank"
              rel="noreferrer"
            >
              “Sustainability and Behavior Change”
            </a>
          </p>

          <br />
          <br />
        </div>
        <div>
          <img
            width="100%"
            src={OtherResourcesImage}
            alt="Minneapolis stormwater program 2020"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default OtherResources;
