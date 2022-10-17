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
import pdf from "./CampaignPDF/Boulet2017.pdf";

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
            lat={-37.8136}
            lng={144.9631}
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
            Behaviour change: Trialling a novel approach to reduce industrial
            stormwater pollution
          </h1>
          <p>
            Keywords: stormwater, pollution, behaviour, non-structural,
            industrial
          </p>
        </center>
        <hr />
        <center className="headerBox">
          <hr />
          <p className="headerParagraphs">
            {" "}
            <b>Authors: </b>Boulet, M., E. Ghafoori, B.S. Jorgensen, L.D.G.
            Smith
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Published: </b>2017
          </p>
          <hr />
          <p className="headerParagraphs">
            <b>Location: </b>Melbourne, Australia
          </p>
          <hr />
        </center>
        <hr />
        {selector === "0" && (
          <center>
            <h2>Abstract</h2>
            <p>
              This paper presents a detailed case study of the development,
              implementation, and evaluation of a targeted behavior change pilot
              program that engaged small to medium industrial businesses in an
              industrial estate in Melbourne, Australia.
            </p>
          </center>
        )}
        {selector === "1" && (
          <center>
            <h2>Targeted Audience</h2>
            <p>Businesses</p>
            <h2>Targeted Behavior</h2>
            <p>
              1) keeping stormwater drains clear and clean 2) storing and
              managing liquids properly 3) securing loose materials and wastes
              4) following spill response plans and using spill kits 5)
              preventing washing into stormwater drains 6) notifying the EPA if
              a spill occurs on site or is witnessed elsewhere
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
                  ["data", 75],
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
                Observed Behavior Directly? <BsCheck2Circle />
              </li>
              <li>
                Address Selection Bias? <BsCheck2Circle />{" "}
              </li>
              <li>
                Measure Long Term ({">"}1Year)? <MdOutlineClear />
              </li>
              <li>
                Measure Water quality? <BsCheck2Circle />
              </li>
            </ul>
          </center>
        )}
        {selector === "3" && (
          <center>
            <h2>Campaign Implementation</h2>
            <p>
              The program uses a combination of different behavior change
              strategies, such as capacity building, social norms, and
              commitment. The research team partnered with the metropolitan
              water authority, the state-based Environmental Protection
              Authority (EPA) and the local council, to co-design, implement,
              and evaluate the outcomes of the intervention. The intervention
              features a mix of voluntary and traditional measures to
              environmental regulation compliance. There are four components: 1)
              mailing out letters to all businesses in the industrial estate to
              raise awareness and highlight community involvement and
              expectations, 2) offering voluntary stormwater pollution
              assessments for high risk businesses to increase business
              capability and knowledge of stormwater pollution management, 3)
              creating broader social norms through an estate-wide communication
              campaign (162 street drains were stenciled throughout the estate
              and four EPA "Report Pollution" signs were installed, 4)
              conducting random EPA inspections of several businesses in the
              estate to provide a regulatory backstop for the voluntary behavior
              change program. The water authority contracted assessors to
              approach every available business in the estate in order to
              introduce the project, present an EPA poster on stormwater
              protection, and offer assessments to all businesses that were
              identified as high-risk. The assessors would perform assessments
              to businesses that agreed to participate. The businesses were
              provided with individualized report that included recommendations.
              Based on the recommendations, businesses were asked to identify
              one to three changes that they could make to improve stormwater
              protection. Then, the assessors did a follow-up visit to the same
              participating businesses in 2-3 weeks after the initial
              assessment.
            </p>
          </center>
        )}
        {selector === "4" && (
          <center>
            <h2>Evaluation Methods</h2>
            <p>
              The research team developed a monitoring and evaluation framework
              to assess the following: 1) target audience participation, 2)
              changes in compliance behaviors by high-risk businesses that
              participated in the voluntary assessments, 3) water quality data
              in stormwater system and local waterway of the industrial estate.
              Measures of participation were collected from the assessors
              reports. Behavior change measures were collected through
              comparision of results from initial and follow-up visits by the
              assessors with participating businesses. The assessors recorded
              both self-reported responses from businesses, as well as their own
              observations about a business site. With respect to water quality
              monitoring, the metropolitan water authority hired an external
              consulting group to conduct pollution sourcing tests throughout
              the estate. These tests were conducted several months before the
              intervention and then two months after it was implemented.
            </p>
          </center>
        )}
        {selector === "5" && (
          <center>
            <h2>Evaluation Results</h2>
            <p>
              The intervention resulted in a number of preventative stormwater
              pollution behaviors by businesses. Follow-up visits reported
              increases in the percentage of businesses complying with desired
              behaviors. For example, a higher percentage of businesses made EPA
              hotline visible on premises, did not let water from floor cleaning
              went into stormwater drains, had spill kit present, and did not
              have any uncovered waste bins outdoors. Nearly all businesses
              (96%) agreed to putting up the EPA’s poster showing their hotline
              telephone number. This finding is not surprising considering its
              low cost of adoption. However, behavior involving spending such as
              purchasing spill kits were relatively less likely to be adopted.
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
