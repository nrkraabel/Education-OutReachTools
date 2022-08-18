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
            lat={47.912849}
            lng={-122.093048}
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
            North and South Sound Natural Yard Care Education Evaluation Report
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
            <b>Authors: </b>Cascadia Consulting Group (Jessica Branom-Zwick) and
            TerraStat Consulting Group (Tamre Cardoso
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Published: </b>2015
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Location: </b>Snohomish County, Thurston County, Cities of
            Arlington, Bothell, Brier, Edmonds, Everett, Granite, Lynnwood,
            Marysville, Mill Creek, Monroe, Mountlake Terrace, Mukilteo,
            Snohomish, and Tumwater
          </p>
          <hr />
        </center>
        <hr />
        {selector === "0" && (
          <center>
            <h2>Abstract</h2>
            <p>
              The Snohomish County and the City of Olympia partnered with 15
              other local jurisdictions in the Puget Sound region. They
              implemented two natural yard care education programs in two
              regions in 2014. Snohomish County partnered with thirteen cities,
              the Snohomish Conservation District, and the WSU Extension Master
              Gardener Program, implemented the North Sound Program. program.
              The City of Olympia partnered with the City of Tumwater and
              Thurston County implemented the South Sound Program. program.
            </p>
          </center>
        )}
        {selector === "1" && (
          <center>
            <h2>Targeted Audience</h2>
            <p>Homeowners with lawns</p>
            <h2>Targeted Behavior</h2>
            <p>Lawn care practices</p>
            <h2>Targeted Pollutant</h2>
            <p>
              Nutrient and Toxic Chemicals (Pesticide, Household Cleaner, etc.)
            </p>
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
                Address Selection Bias? <MdOutlineClear />
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
              The North Sound program included a three-part evening lecture
              series on various natural yard care topics by landscape
              professionals. Participants in the North Sound program received 50
              minutes of lecture in a large workshop format (up to 75 people).
              The South Sound program included two lawn coach home visits, a
              demonstration workshop, and incentives to promote natural lawn
              care. Participants in the South Sound program received six hours
              of hands-on education on natural lawn care, including two hours of
              personalized at-home education from lawn care professionals and
              four hours in small demonstration workshops of no more than 20
              people.
            </p>
          </center>
        )}
        {selector === "4" && (
          <center>
            <h2>Evaluation Methods</h2>
            <p>
              Participants completed surveys before and after participating in
              programs. In addition, surveys were also administered to randomly
              selected non-participating households to test whether they changed
              behavior during the same time period without participating in a
              program.
            </p>
          </center>
        )}
        {selector === "5" && (
          <center>
            <h2>Evaluation Results</h2>
            <p>
              Both programs resulted in significant behavior change in many of
              the yard care practices that they addressed. There were several
              practices that showed little to no behavior change, but most
              showed moderate to high levels of impact. North Sound participants
              reported varying levels of behavior change with some notable
              results. For example, there were 53% reductions in people who
              reported using weed-and-feed, 27% reductions in using fast-release
              or weed-and-feed fertilizer, and 26% increase in people who knew
              to prepare soil with compost. Similar to the North Sound
              participants, South Sound participants also reported varying
              levels of behavior change with some notable results. For example,
              there were 47% reductions in people who reported using
              weed-and-feed, 55% increase in people who reported using slow
              release, natural, organic fertilizer, and 60% increase in people
              who applied lime every 2-3 years.{" "}
            </p>
          </center>
        )}
        {selector === "6" && (
          <center>
            <h2>Incentive</h2>
            <p>
              For the South Sound program, incentives included a free soil test
              and lawn measurement, free slow-release fertilizer, free lime, and
              a discount on renting an aerator.
            </p>
          </center>
        )}
        {selector === "7" && (
          <center>
            <h2>Socail/Racial Justice Considerations</h2>
            <p>
              both the baseline and post-outreach surveys asked for respondent
              demographics, particularly the number of years living in current
              home.
            </p>
          </center>
        )}

        {selector === "8" && (
          <center>
            <h2>
              <a
                href="https://drive.google.com/file/d/1kY3yFeKVddMmJacvCx1slVySAjj_J6l7/view?usp=sharing"
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
