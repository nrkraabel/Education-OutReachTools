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
      Abstract
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
            lat={38.7573}
            lng={-90.31951}
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
          <h1>Thurston County Natural Lawn Care Education Evaluation Report</h1>
          <p>Keywords: None</p>
        </center>
        <hr />
        <center className="headerBox">
          <hr />
          <p className="headerParagraphs">
            {" "}
            <b>Authors: </b>Cascadia Consulting Group (Jessica Branom-Zwick and
            Sophia Ahn)
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Published: </b>March, 2021
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Location: </b>Thurston County, the City of Olympia, and the City
            of Tumwater, Washington
          </p>
          <hr />
        </center>
        <hr />
        {selector === "0" && (
          <center>
            <h2>Issue</h2>
            <p>
              This study evaluates a 2014 campaign six years later to assess
              whether participants sustained the behavior change created by the
              GoGREEN lawn care program
            </p>
          </center>
        )}
        {selector === "1" && (
          <center>
            <h2>Targeted Audience</h2>
            <p>Homeowners with yards.</p>
            <h2>Targeted Behavior</h2>
            <p>Yard care.</p>
            <h2>Targeted Pollutant</h2>
            <p>
              Nutrients, and Toxic Chemicals (Pesticide, Household Cleaner,
              etc.)
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
                Address Selection Bias? <MdOutlineClear />{" "}
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
              In 2009, the city of Olympia developed an outreach program on
              "yard care practices protective of water quality" in response to a
              requirement in its 2007-2013 NPDES Phase II permit. After a 2012
              pilot, Olympia, in partnership with the City of Tumwater and
              Thurston County, implemented in 2014 a natural lawn care education
              program using an intensive education model. Before developing its
              strategy, the City of Olympia conducted an ethnographic study to
              identify its priority audience and barriers related to natural
              lawn care practices. The campaign consisted of two home visits
              from a lawn care professional; one or two demonstration workshops,
              and incentives. Olympia continued the program with a second group
              of participants in 2015.
            </p>
          </center>
        )}
        {selector === "4" && (
          <center>
            <h2>Evaluation Methods</h2>
            <p>
              Participants completed surveys at four points during their
              participation: 1) baseline survey (before receiving education) 2)
              immediate post-outreach survey (after the spring lawn coach visit
              and the demonstration workshops but before the fall lawn coach
              visit) 3) medium-term post-outreach survey (6-12 months after
              receiving education) 4) long-term post-outreach survey (6 years
              after receiving education). Respondents self-reported on a list of
              17 behaviors such as aerating their lawn every 2 years, applying
              Weed and Feed, etc. Study did not attempt to assess statistical
              significance.
            </p>
          </center>
        )}
        {selector === "5" && (
          <center>
            <h2>Evaluation Results</h2>
            <p>
              Nearly all behaviors improved within the first year after the
              workshop and visits. With respect to Weed-and-Feed, for example,
              the percent using the product dropped from 65% at baseline to 12%
              in the "medium" run survey. The only behaviors that did not
              improve in the medium term was the timing of fertilizer
              application, which was already "good" (fertilize in spring or fall
              but not in winter). Most behaviors, however, showed evidence of
              "back-sliding" in the long-term survey five years later. The
              percentage using Weed-and-Feed, for example, increased from 12% to
              38%. Because this was still lower than the baseline (65%), the
              authors conclude that the program shows long-term effects, though
              tempered by back-sliding. In fact, many survey respondents in the
              2020 survey asked for refresher workshops. Backsliding was least
              pronounced for mulch mowing, and most pronounced for aerating
              lawns, knowing how much nitrogen to apply and calculating lawn
              area and application rate, using slow release organic fertilizers,
              using lime, and not using Weed-and-Feed.
            </p>
          </center>
        )}
        {selector === "6" && (
          <center>
            <h2>Incentive</h2>
            <p>
              Free soil test in spring; Spring and Fall lawn coach consultations
              through home visits covering current lawn and soil conditions
              based on soil test results and visual inspection; free lawn
              measurement, free slow-release fertilizer and lime in quantities
              based on participants' soil test results and lawn size; and $30
              rebate towards lawn aeration service or free rental of lawn
              aerator equipment when participants shared the equipment with two
              other households.
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
                href="https://drive.google.com/file/d/1iV8d2Tm1SJufoz8Gf8ZZ9NqLmzzggnwT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
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
