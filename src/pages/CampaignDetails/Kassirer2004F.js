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
            lat={47.6032}
            lng={-122.3303}
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
          <h1>Community Program #6: Seattle and King County, Washington</h1>
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
            <b>Authors: </b>Kassirer, Jay, S. Koswan, K. Spence, S. Morphet, C.
            Wolnik, S. Goom, and T Del Matto.
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Published: </b>2004
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Location: </b>Seattle and King County, Washington
          </p>
          <hr />
        </center>
        <hr />
        {selector === "0" && (
          <center>
            <h2>Abstract</h2>
            <p>
              In the early 1990's, Seattle and King County began collaborating
              on programs to change a number of yard and garden practices by
              residents, including a reduction in pesticide use. The Green
              Gardening program was implemented to educate the population about
              alternatives to lawn and garden chemicals. In 1996, Seattle Public
              Utilities and King County began a campaign to encourage Natural
              Lawn Care. This program aimed to reduce the volume of grass
              clippings entering the composting stream, the residential use of
              pesticide, and water consumption for lawn irrigation. The Natural
              Lawn Care evolved into Natural Yard Care program with an expanded
              focus on all aspect of residential gardening. Unfortunately,
              programming budget had to be reduced due to the economic
              condition.
            </p>
          </center>
        )}
        {selector === "1" && (
          <center>
            <h2>Targeted Audience</h2>
            <p>Info</p>
            <h2>Targeted Behavior</h2>
            <p>Info</p>
            <h2>Targeted Pollutant</h2>
            <p>Info</p>
          </center>
        )}
        {selector === "2" && (
          <center>
            <C3Chart
              data={{
                columns: [
                  // each columns data
                  ["data", 50],
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
            <p>Text</p>
          </center>
        )}
        {selector === "4" && (
          <center>
            <h2>Evaluation Methods</h2>
            <p>Text</p>
          </center>
        )}
        {selector === "5" && (
          <center>
            <h2>Evaluation Results</h2>
            <p>Text</p>
          </center>
        )}
        {selector === "6" && (
          <center>
            <h2>Incentive</h2>
            <p>Text</p>
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
              <a href="link" target="_blank" rel="noopener noreferrer">
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
