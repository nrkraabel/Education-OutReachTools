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
import { storage } from "C:/Users/Nicholas/StormwaterWebsite/Education-OutReachTools/src/firebase.js";

function CampgainDetailsTemplate() {
  const [pdf, setPDF] = useState("");

  // Getting Download Link
  storage
    .ref("behaviorChangePdfs")
    .child("Bennett2017.pdf")
    .getDownloadURL()
    .then((url) => {
      setPDF(url);
    });
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
            lat={39.2833}
            lng={-76.6167}
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
            Blue Water Baltimore Rainwater Harvesting Behavior Change
            Implementation
          </h1>
          {/* <p>
            Keywords:
          </p> */}
        </center>
        <hr />
        <center className="headerBox">
          <hr />
          <p className="headerParagraphs">
            {" "}
            <b>Authors: </b>Bennett, Erin
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Published: </b>2017
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Location: </b>Baltimore, Maryland
          </p>
          <hr />
        </center>
        <hr />
        {selector === "0" && (
          <center>
            <h2>Abstract</h2>
            <p>
              Blue Water Baltimore (BWB) conducts a behavior change project to
              increase the adoption, installation, and use of rain barrels in
              Herring Run and Direct Harbor watersheds to decrease stormwater
              runoff in Baltimore City and County.
            </p>
          </center>
        )}
        {selector === "1" && (
          <center>
            <h2>Targeted Audience</h2>
            <p>
              Two communities identified in Baltimore City and Baltimore County
              within the Herring Run and Direct Harbor watersheds. The
              communities chosen are Belair-Edison and Dundalk. Belair-Edison is
              a lower income neighborhood, predominantly African American and
              long-term members of the community. Dundalk is a middle income,
              working-class community, and located close to water.
            </p>
            <h2>Targeted Behavior</h2>
            <p>Rain Barrel Adoption</p>
            <h2>Targeted Pollutant</h2>
            <p>LID/Inflitration</p>
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
                Collect Baseline? <BsCheck2Circle />
              </li>
              <li>
                Observe Control Group or Counter-Factual <MdOutlineClear />{" "}
              </li>
              <li>
                Observed Behavior Directly? <MdOutlineClear />
              </li>
              <li>
                Address Selection Bias? <BsCheck2Circle />{" "}
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
              This project serves as a pilot program on specific blocks in one
              Baltimore City and one Baltimore County neighborhood, in addition
              to being driven by watershed plans with respond to the 2025 water
              quality goals established by the Chesapeake Bay Program. Outreach
              materials were distributed and the pilot program was implemented
              from May 2015 through early September 2015. Each household
              included in the pilot blocks received a letter and a handout. The
              Rain Barrel Coordinator conducted a pre-survey at the time of
              installation. Pilot program evaluation occured mid-September
              through October 2015. Broad implementation began in February 2016
              and extended to August 2016. They collaborated with the
              neighborhood partners to utilize their social media outlets and
              other common outreach strategies such as community meetings and
              newsletters. A final evaluation was conducted in September through
              October 2016 to determine the overall change in behavior from
              before and after the implementation.
            </p>
          </center>
        )}
        {selector === "4" && (
          <center>
            <h2>Evaluation Methods</h2>
            <p>
              A survey was conducted at the time of installation to assess the
              individual's knowledge of rain barrels, the plan for use of the
              water, and opinions on the pilot program. An additional survey was
              deployed a few months after the rain barrel was installed to gauge
              the individual's use and opinion of rain barrels. The results of
              the pilot survey prompted BWB to change a few of the outreach
              strategies before broad implementation. The same pre and post
              survey were also conducted among the broad implementation
              participants.
            </p>
          </center>
        )}
        {selector === "5" && (
          <center>
            <h2>Evaluation Results</h2>
            <p>
              The broad implementation phase installed 29 rain barrels in
              Belair-Edison and Dundalk. Including installation as part of the
              rain barrel price was found to be an effective way to address
              installation barrier that was identified in their 2014 research.
            </p>
          </center>
        )}
        {selector === "6" && (
          <center>
            <h2>Incentive</h2>
            <p>
              individuals participating in the program were giving up $20 to get
              a rain barrel. The rain barrel cost was discounsted from $89
              (retail value) down to $20. In most cases, individuals were
              trading using their hose or outside water access for using a rain
              barrel with less water pressure.
            </p>
          </center>
        )}
        {selector === "7" && (
          <center>
            <h2>Socail/Racial Justice Considerations</h2>
            <p>
              The communities chosen in this project represent diverse
              demographics, land use, and socio-economic status.
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
