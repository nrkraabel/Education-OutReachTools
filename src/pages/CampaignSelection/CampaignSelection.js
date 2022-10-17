import React, { useState, useRef } from "react";
import "../Tab.css";
import "../Text.css";
import "../Table.css";
import "./CampaignSelection.css";
import spreadSheet from "../documents/BCCampaignSpreadsheetTemplate.xlsx";

//Helper to tab prop

function CampaignSelection() {
  return (
    <div className="page">
      <center>
        <h2 className="programComparisonHeader">CAMPAIGN SELECTION TOOL</h2>
      </center>
      <div className="SelectionText">
        <p>
          &emsp;We developed this spreadsheet tool to help you{" "}
          <strong>choose</strong> a behavior change campaign based on your
          jurisdiction’s needs. You might use the tool when your jurisdiction is
          considering adding a new campaign or moving away from a current
          campaign, perhaps as required by permit. For example, suppose you were
          interested in starting a new campaign on either pet waste OR reducing
          illicit discharges. Or perhaps two different types of campaigns that
          both targeted pet waste.
        </p>
        <p>
          &emsp;The spreadsheet walks you through the various components of a
          behavior change campaign to help you assess which campaign might be
          the best choice for your jurisdiction. These include questions around
          target behaviors, target audience, water quality impacts, situational
          analysis, equity, community impact and the ability to leverage other
          resources or partnerships.
        </p>
        <p>
          &emsp;The tool allows you to compare multiple types of campaigns (the
          default is two, but you can always add columns). Different
          jurisdictions will inevitably weigh these factors differently, so the
          intention is <strong>not</strong> to have the tool automatically give
          you an answer by selecting the “best” campaign. Instead, it helps you
          make sure you are asking the right questions.
        </p>
        <a href={spreadSheet} download>
          Click here to download the spreadsheet
        </a>
        <p>
          You may also wish to explore another useful site for{" "}
          <a href="https://www.chesapeakebehaviorchange.org/survey-data">
            choosing campaigns
          </a>{" "}
          based on representative survey data from the Chesapeake region.
        </p>
      </div>
    </div>
  );
}

export default CampaignSelection;
