import React, { useState } from "react";
import "./CampaignDetails.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import C3Chart from "react-c3js";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CabinIcon from "@mui/icons-material/Cabin";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import InsightsIcon from "@mui/icons-material/Insights";
import FactCheckSharpIcon from "@mui/icons-material/FactCheckSharp";
import MapElement from "../../components/Map/MapElement";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import pdf from "./CampaignPDF/Winquist2006.pdf";

function CampgainDetailsTemplate() {
  const [selector, setSelector] = useState("0");
  const handleClick = (evt) => {
    if (evt.target.value !== undefined) {
      setSelector(evt.target.value);
    }
  };

  return (
    <div className="page">
      <div className="menuContainer">
        <div className="mapBox">
          <MapElement
            height="20vh"
            width="22vw"
            zoom={10}
            lat={32.7356}
            lng={-97.1071}
          />
        </div>
        <div className="menu">
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
            size="large"
          >
            {selector === "0" && (
              <Button
                onClick={handleClick}
                value={"0"}
                endIcon={<ArticleOutlinedIcon />}
              >
                <u>
                  <strong className="boldHighlight">Abstract/Issue</strong>
                </u>
              </Button>
            )}
            {selector !== "0" && (
              <Button
                onClick={handleClick}
                value={"0"}
                endIcon={<ArticleOutlinedIcon />}
              >
                Abstract/Issue
              </Button>
            )}
            {selector === "1" && (
              <Button onClick={handleClick} value={"1"} endIcon={<CabinIcon />}>
                <u>
                  <strong className="boldHighlight">
                    Targeted Audience, Behavior, and Pollutant
                  </strong>
                </u>
              </Button>
            )}
            {selector !== "1" && (
              <Button onClick={handleClick} value={"1"} endIcon={<CabinIcon />}>
                Targeted Audience, Behavior, and Pollutant
              </Button>
            )}
            {selector === "2" && (
              <Button
                onClick={handleClick}
                value={"2"}
                endIcon={<AnalyticsIcon />}
              >
                <u>
                  <strong className="boldHighlight">Research Score</strong>
                </u>
              </Button>
            )}
            {selector !== "2" && (
              <Button
                onClick={handleClick}
                value={"2"}
                endIcon={<AnalyticsIcon />}
              >
                Research Score
              </Button>
            )}
            {selector === "3" && (
              <Button
                onClick={handleClick}
                value={"3"}
                endIcon={<FactCheckSharpIcon />}
              >
                <u>
                  <strong className="boldHighlight">
                    {" "}
                    Campaign Implementation
                  </strong>
                </u>
              </Button>
            )}
            {selector !== "3" && (
              <Button
                onClick={handleClick}
                value={"3"}
                endIcon={<FactCheckSharpIcon />}
              >
                Campaign Implementation
              </Button>
            )}
            {selector === "4" && (
              <Button
                onClick={handleClick}
                value={"4"}
                endIcon={<DataUsageIcon />}
              >
                <u>
                  <strong className="boldHighlight">Evaluation Methods</strong>
                </u>
              </Button>
            )}
            {selector !== "4" && (
              <Button
                onClick={handleClick}
                value={"4"}
                endIcon={<DataUsageIcon />}
              >
                Evaluation Methods
              </Button>
            )}
            {selector === "5" && (
              <Button
                onClick={handleClick}
                value={"5"}
                endIcon={<InsightsIcon />}
              >
                <u>
                  <strong className="boldHighlight"> Evaluation Results</strong>
                </u>
              </Button>
            )}
            {selector !== "5" && (
              <Button
                onClick={handleClick}
                value={"5"}
                endIcon={<InsightsIcon />}
              >
                Evaluation Results
              </Button>
            )}
            {selector === "6" && (
              <Button
                onClick={handleClick}
                value={"6"}
                endIcon={<MonetizationOnIcon />}
              >
                <u>
                  <strong className="boldHighlight">Incentives</strong>
                </u>
              </Button>
            )}
            {selector !== "6" && (
              <Button
                onClick={handleClick}
                value={"6"}
                endIcon={<MonetizationOnIcon />}
              >
                Incentives
              </Button>
            )}
            {selector === "7" && (
              <Button onClick={handleClick} value={"7"} endIcon={<GroupIcon />}>
                <u>
                  <strong className="boldHighlight">
                    Socail/Racial Justice Considerations
                  </strong>
                </u>
              </Button>
            )}
            {selector !== "7" && (
              <Button onClick={handleClick} value={"7"} endIcon={<GroupIcon />}>
                Socail/Racial Justice Considerations
              </Button>
            )}
            {selector === "8" && (
              <Button
                onClick={handleClick}
                value={"8"}
                endIcon={<AttachFileIcon />}
              >
                <u>
                  <strong className="boldHighlight">PDF Link</strong>
                </u>
              </Button>
            )}
            {selector !== "8" && (
              <Button
                onClick={handleClick}
                value={"8"}
                endIcon={<AttachFileIcon />}
              >
                PDF Link
              </Button>
            )}
          </ButtonGroup>
        </div>
      </div>
      <div className="campaignBox">
        <center>
          <h1>
            The Neighborhood Water Stewardship Program: An Innovative Approach
            to Behavior Change in Northern Virginia
          </h1>
          {/* <p>
            Keywords: quae legis, ex illo, Theseu, tibi litore mitto unde tuam
            sine me vela tulere ratem,
          </p> */}
        </center>
        <hr />
        <center className="headerBox">
          <hr />
          <p className="headerParagraphs">
            {" "}
            <b>Authors: </b>Aileen Winquist
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Published: </b>2006
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Location: </b>Arlington, VA
          </p>
          <hr />
        </center>
        <hr />
        {selector === "0" && (
          <center>
            <h2>Abstract</h2>
            <p>
              Arlington, VA, is among the most densely populated jurisdictions
              in the country with a population density of about 7,700 persons
              per square mile. Development in Arlington has significantly
              impacted the nearly 30 miles of perennial streams in the County.
              More than half of the County's original stream network has been
              replaced by a dense network of underground storm sewers. During
              storms, these storm sewers convey a large volume of runoff and
              pollutants to streams at high velocities, causing stream bank
              erosion, water quality problems, and habitat degradation. The
              Neighborhood Water Steward Team Program goes beyond many nonpoint
              source (NPS) education programs to help residents learn new
              behaviors that prevent water pollution.The program is a
              partnership of a non-profit organization Arlingtonians for a Clean
              Environment, Arlington County, the City of Falls Church, and the
              City of Alexandria. To become water stewards, volunteer team
              leaders create neighborhood-based teams that learn about
              preventing water pollution.
            </p>
          </center>
        )}
        {selector === "1" && (
          <center>
            <h2>Targeted Audience</h2>
            <p>Homeowners</p>
            <h2>Targeted Behavior</h2>
            <p>
              - Replace household chemicals with environmentally friendly
              products - dog waste pick up - identify anf fix vehicle oil leaks
              - lawn care - rain barrel installations - rain garden
              installations - reduce vehilce miles traveled - find and fix water
              leaks - water conservation practices
            </p>
            <h2>Targeted Pollutant</h2>
            <p>None</p>
          </center>
        )}
        {selector === "2" && (
          <center>
            <C3Chart
              data={{
                columns: [
                  // each columns data
                  ["data", 37.5],
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
                Collect Baseline? <BsCheck2Circle />
              </li>
              <li>
                Observe Control Group or Counter-Factual <MdOutlineClear />{" "}
              </li>
              <li>
                Observed Behavior Directly? <MdOutlineClear />
              </li>
              <li>
                Address Selection Bias? <MdOutlineClear />
              </li>
              <li>
                Measure Long Term ({">"}1Year)? <MdOutlineClear />
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
            <p>Text</p>
          </center>
        )}
        {selector === "4" && (
          <center>
            <h2>Evaluation Methods</h2>
            <p>
              Team members completed a "before" and "after" assessment form to
              track which actions team members had adopted and to calcuate the
              environmental benefits of those actions.{" "}
            </p>
          </center>
        )}
        {selector === "5" && (
          <center>
            <h2>Evaluation Results</h2>
            <p>
              The Neighborhood Water Steward Team program is an important
              component of the education strategy for the three localities to
              meet MS4, Tributary Strategy, and TMDL public education
              requirements. Households participating in the program have adopted
              581 new actions, such as installing rain barrels, cisterns, rain
              gardens, reducing pesticide and fertilizer use, and checking
              vehicles for fuel leaks.Some actions were more popular than
              others. For example, 35 households (56%) replaced chemicals with
              environmentally friendly products, but only 3 households (5%)
              reported cleaning up after their dog. Twenty two households (35%)
              installed a rain barrel or downspout extensions and 18 (29%)
              households created a rain garden.{" "}
            </p>
          </center>
        )}
        {selector === "6" && (
          <center>
            <h2>Incentive</h2>
            <p>
              <b>NONE</b>
            </p>
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
            <h2>
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                PDF Link
              </a>
            </h2>
          </center>
        )}
      </div>
    </div>
  );
}

export default CampgainDetailsTemplate;
