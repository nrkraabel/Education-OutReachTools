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
            lat={29.79674}
            lng={-82.494324}
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
          <h1>Alachua County Scoop the Poop Campaign</h1>
          {/* <p>Keywords:</p> */}
        </center>
        <hr />
        <center className="headerBox">
          <hr />
          <p className="headerParagraphs">
            {" "}
            <b>Authors: </b>Alachua County, Florida
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Published: </b>2009
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Location: </b>Alachua County, Florida
          </p>
          <hr />
        </center>
        <hr />
        {selector === "0" && (
          <center>
            <h2>Abstract</h2>
            <p>
              The 2009 Alachua County Scoop the Poop Campaign is behavior change
              campaign to persuade citizens to scoop, bag, and trash pet waste
              at home and around the community.
            </p>
          </center>
        )}
        {selector === "1" && (
          <center>
            <h2>Targeted Audience</h2>
            <p>Dog owners.</p>
            <h2>Targeted Behavior</h2>
            <p>Pet waste pick-up and proper disposal.</p>
            <h2>Targeted Pollutant</h2>
            <p>Pathogens.</p>
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
                Address Selection Bias? <MdOutlineClear />{" "}
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
            <p>
              The Gainesville Clean Water Partnership, a partnership consisting
              of Alachua County Public Works Department, City of Gainesville
              Public Works, and the Florida Department of Transportation, funded
              the Alachua County Scoop the Poop Campaign. The campaign itself
              was designed and implemented by the Alachua County Environmental
              Protection Department (ACEPD). ACEPD hired Group Five and
              Associates for the campaign, and adopted the tagline: "Scoop it,
              Bag it, Trash it". Group Five and Associates designed a logo, two
              posters, a pledge, and a pamphlet, as well as produced two fifteen
              second commercials. Promotional items, such as bag dispensers for
              leashes and tiny key chain flashlights were purchased and
              distributed at public outreach events. In addition, veterinary
              offices also supported the campaign by accepting promotional
              materials to be placed in their offices. Local adoption centers
              were another valuable partner. Dog adoption agencies included the
              bag containers and pamphlets in their adoption packets that went
              home with new dog owners.
            </p>
          </center>
        )}
        {selector === "4" && (
          <center>
            <h2>Evaluation Methods</h2>
            <p>
              The University of Florida Bureau of Business and Economic Research
              administered a telephone survey to gauge the self-reported
              behaviors and attitudes of participants before and after the
              campaign. 185 dog owners participated in telephone surveys prior
              to release of any campaign materials and 112 of the same dog
              owners completed the follow up interview after most interventions
              were implemented.
            </p>
          </center>
        )}
        {selector === "5" && (
          <center>
            <h2>Evaluation Results</h2>
            <p>
              The percentage of people who reported never getting rid of their
              dogs' wastes decreased by 6%. Additionally, among people who got
              rid of their dog's waste, there was a 9% increase in putting the
              waste in the trash.
            </p>
          </center>
        )}
        {selector === "6" && (
          <center>
            <h2>Incentive</h2>
            <p>
              promotional materials such as bag dispensers for leashes and tiny
              key chain flashlights.
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
              <a
                href="https://drive.google.com/file/d/1seSvdZ7mW079TdOLtUBD6lCXy6kLwIIU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
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
