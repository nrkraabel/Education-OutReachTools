import React, { useState } from "react";
import "./CampaignDetails.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import C3Chart from "react-c3js";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import InfoIcon from "@mui/icons-material/Info";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CabinIcon from "@mui/icons-material/Cabin";
import SpaIcon from "@mui/icons-material/Spa";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import InsightsIcon from "@mui/icons-material/Insights";
import FactCheckSharpIcon from "@mui/icons-material/FactCheckSharp";
import MapElement from "../../components/Map/MapElement";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";

function CampgainDetailsTemplate() {
  const [selector, setSelector] = useState("0");
  const handleClick = (evt) => {
    setSelector(evt.target.value);
  };
  const buttons = [
    <Button onClick={handleClick} value={"0"} endIcon={<ArticleOutlinedIcon />}>
      Abstract/Issue
    </Button>,
    <Button onClick={handleClick} value={"1"} endIcon={<CabinIcon />}>
      Targeted Audience, Behavior, and Pollutant
    </Button>,
    <Button onClick={handleClick} value={"2"} endIcon={<AnalyticsIcon />}>
      Research Score
    </Button>,
    <Button onClick={handleClick} value={"3"} endIcon={<FactCheckSharpIcon />}>
      Campaign Implementation
    </Button>,
    <Button onClick={handleClick} value={"4"} endIcon={<DataUsageIcon />}>
      Evaluation Methods
    </Button>,
    <Button onClick={handleClick} value={"5"} endIcon={<InsightsIcon />}>
      Evaluation Results
    </Button>,
    <Button onClick={handleClick} value={"6"} endIcon={<MonetizationOnIcon />}>
      Incentives
    </Button>,
    <Button onClick={handleClick} value={"7"} endIcon={<GroupIcon />}>
      Socail/Racial Justice Considerations
    </Button>,
    <Button onClick={handleClick} value={"8"} endIcon={<AttachFileIcon />}>
      PDF Link
    </Button>,
  ];

  return (
    <div className="page">
      <div className="menuContainer">
        <div className="mapBox">
          <MapElement
            height="18vh"
            width="20vw"
            zoom={10}
            lat={41.2778}
            lng={-72.7997}
          />
        </div>
        <div className="menu">
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
            size="large"
          >
            {buttons}
          </ButtonGroup>
        </div>
      </div>
      <div className="campaignBox">
        <center>
          <h1>
            Education and Changes in Residential Nonpoint Source Pollution
          </h1>
          <p>
            Keywords: stormwater, education, nonpoint, residential, impervious.{" "}
          </p>
        </center>
        <hr />
        <center className="headerBox">
          <hr />
          <p className="headerParagraphs">
            {" "}
            <b>Authors: </b>Dietz, M.E., John C. Clausen, Karen K. Filchak
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Published: </b> 2004
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Location: </b>Branford, Connecticut
          </p>
          <hr />
        </center>
        <hr />
        {selector === "0" && (
          <center>
            <h2>Issue</h2>
            <p>
              The authors used a paired watershed research design to determine
              whether educating homeowners about residential BMPs could change
              behavior and improve the quality of stormwater runoff. The
              campaign did not use "social marketing" techniques in identifying
              a target audience, a specific target behavior, and an
              identification of barriers preventing behavior change.
            </p>
          </center>
        )}
        {selector === "1" && (
          <center>
            <h2>Targeted Audience</h2>
            <p>
              Residential neighborhood near Long Island Sound in the town of
              Branford, Connecticut.
            </p>
            <h2>Targeted Behavior</h2>
            <p>Yard and garden care, and pet waste management.</p>
            <h2>Targeted Pollutant</h2>
            <p>
              Pathogens (Fecal Coliforms, Bacteria, E. Coli), and Nutrients.
            </p>
          </center>
        )}
        {selector === "2" && (
          <center>
            <C3Chart
              data={{
                columns: [
                  // each columns data
                  ["data", 62.5],
                ],
                type: "gauge", // default type of chart
                gauge: {},
                names: {
                  data: "Score",
                },
                color: {
                  data: "#228B22",
                },
              }}
              legend={{
                show: false,
              }}
              padding={{
                bottom: 0,
                top: 0,
              }}
            />
            <ul className="no-bullets">
              <li>
                Have Target Audience? <BsCheck2Circle />
              </li>
              <li>
                Have Target Behavior? <BsCheck2Circle />
              </li>
              <li>
                Collect Baseline? <MdOutlineClear />
              </li>
              <li>
                Observe Control Group or Counter-Factual <MdOutlineClear />{" "}
              </li>
              <li>
                Observed Behavior Directly? <BsCheck2Circle />
              </li>
              <li>
                Address Selection Bias? <BsCheck2Circle />{" "}
              </li>
              <li>
                Measure Long Term ({">"}1Year)? <BsCheck2Circle />
              </li>
              <li>
                Measure Water quality? <MdOutlineClear />
              </li>
            </ul>
          </center>
        )}
        {selector === "3" && (
          <center>
            <h2>Campaign Implementation</h2>
            <p>
              A team from the University of Connecticut provided a series of
              four seminars open to the public, each on a specific topic. The
              purposes of the seminars was to educate project volunteers on
              basic nonpoint source pollution, home site evaluation, lawn care,
              soil sampling, and educational methods for homeowners. Then, the
              trained volunteers performed a site assessment on 34 lots in the
              treatment watershed. The residential site assessment was to assess
              stormwater management, yard and garden care, and pet waste
              management. A nutrient soil test was also performed on each lawn.
              Volunteers provided recommendations to homeowners following the
              test.
            </p>
          </center>
        )}
        {selector === "4" && (
          <center>
            <h2>Evaluation Methods</h2>
            <p>
              Two adjacent watersheds in Branford, Connecticut, were studied
              following the design of the paired watershed approach. Water
              quality testing was performed for two years before the education
              campaign to calibrate the analysis. A baseline survey was mailed
              to control and treatment residents during the calibration period.
              The survey was repeated for residents of the treatment watershed
              only in 2001. Statistical analyses were performed on water quality
              data.
            </p>
          </center>
        )}
        {selector === "5" && (
          <center>
            <h2>Evaluation Results</h2>
            <p>
              The campaign had no statistically-signficant impact on behaviors,
              though the authors report a significant increase in structural BMP
              adoption (12 of 34 lots). The campaign caused a 75% reduction in
              'nitrite + nitrate -N' and a 127% reduction in fecal coliform
              bacteria concentrations. However, there was no significant
              reduction in bacteria, total nitrogen, total phosphorus, and
              ammonia-N concentrations.
            </p>
          </center>
        )}
        {selector === "6" && (
          <center>
            <h2>Incentive</h2>
            <p>None</p>
          </center>
        )}
        {selector === "7" && (
          <center>
            <h2>Socail/Racial Justice Considerations</h2>
            <p>
              <b>NONE</b>
            </p>
          </center>
        )}

        {selector === "8" && (
          <center>
            <a
              href="https://drive.google.com/file/d/1anznOalDM07nUlvguFyjru_o3_KaRAeC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <h2>PDF Link</h2>
            </a>
          </center>
        )}
      </div>
    </div>
  );
}

export default CampgainDetailsTemplate;
