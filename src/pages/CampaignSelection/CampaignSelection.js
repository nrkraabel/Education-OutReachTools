import React, { useState } from "react";
import TabPanel from "../../components/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../Tab.css";
import "../Text.css";
import "../Table.css";
import "./CampaignSelection.css";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DoneIcon from "@mui/icons-material/Done";

//Helper to tab prop
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function CampaignSelection() {
  const [tabNum, setTabNum] = useState(0);

  const handleChange = (event, newValue) => {
    setTabNum(newValue);
  };

  const handleNext = () => {
    setTabNum(tabNum + 1);
  };

  const handlePrevious = () => {
    setTabNum(tabNum - 1);
  };

  const columns = [
    {
      field: "Question",
      headerName: "Question",
      width: 650,
    },
    {
      field: "Campaign1",
      headerName: "Campaign One",
      width: 250,
    },
    {
      field: "Campaign2",
      headerName: "Campaign Two",
      width: 250,
    },
    {
      field: "Campaign3",
      headerName: "Campaign Three",
      width: 250,
    },
  ];

  //CSV Handling
  const [CSVFileReady, setCSVFileReady] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const handleSubmit = () => {
    setCombinedData([
      {
        id: 1,
        Question: "Campaign Title",
        Campaign1: CampaignOne.CampaignTitle,
        Campaign2: CampaignTwo.CampaignTitle,
        Campaign3: CampaignThree.CampaignTitle,
      },
      {
        id: 2,
        Question: "Problem Addressed",
        Campaign1: CampaignOne.ProblemAddressed,
        Campaign2: CampaignTwo.ProblemAddressed,
        Campaign3: CampaignThree.ProblemAddressed,
      },
      {
        id: 3,
        Question: "Target Behavior",
        Campaign1: CampaignOne.TargetBehavior,
        Campaign2: CampaignTwo.TargetBehavior,
        Campaign3: CampaignThree.TargetBehavior,
      },
      {
        id: 4,
        Question: 'Is the behavior an "end-state" behavior?',
        Campaign1: CampaignOne.BehaviorEndState,
        Campaign2: CampaignTwo.BehaviorEndState,
        Campaign3: CampaignThree.BehaviorEndState,
      },
      {
        id: 5,
        Question: "Can the behavior be measured?",
        Campaign1: CampaignOne.BehaviorMeasureable,
        Campaign2: CampaignTwo.BehaviorMeasureable,
        Campaign3: CampaignThree.BehaviorMeasureable,
      },
      {
        id: 6,
        Question: "What gap or need for action will this behavior change fill?",
        Campaign1: CampaignOne.NeedForAction,
        Campaign2: CampaignTwo.NeedForAction,
        Campaign3: CampaignThree.NeedForAction,
      },
      {
        id: 7,
        Question:
          "Is data available to show percent of people not engaging in behavior?",
        Campaign1: CampaignOne.DataAvaiable,
        Campaign2: CampaignTwo.DataAvaiable,
        Campaign3: CampaignThree.DataAvaiable,
      },
      {
        id: 8,
        Question: "Target Audience",
        Campaign1: CampaignOne.TargetAudience,
        Campaign2: CampaignTwo.TargetAudience,
        Campaign3: CampaignThree.TargetAudience,
      },
      {
        id: 9,
        Question:
          "What research, if any, was performed to select the target audience/support target audience choice?",
        Campaign1: CampaignOne.ResearchSelectionOfTargetAudience,
        Campaign2: CampaignTwo.ResearchSelectionOfTargetAudience,
        Campaign3: CampaignThree.ResearchSelectionOfTargetAudience,
      },

      {
        id: 11,
        Question:
          "Does the behavior address a local water quality or flow control problem?",
        Campaign1: CampaignOne.BehaviorAddresses,
        Campaign2: CampaignTwo.BehaviorAddresses,
        Campaign3: CampaignThree.BehaviorAddresses,
      },
      {
        id: 12,
        Question:
          "What is the targeted pollutant or flow control method addressed?",
        Campaign1: CampaignOne.TargetedPollutant,
        Campaign2: CampaignTwo.TargetedPollutant,
        Campaign3: CampaignThree.TargetedPollutant,
      },
      {
        id: 13,
        Question: "What is the top benefit of enacting the behavior?",
        Campaign1: CampaignOne.TopBenefit,
        Campaign2: CampaignTwo.TopBenefit,
        Campaign3: CampaignThree.TopBenefit,
      },
      {
        id: 14,
        Question:
          "What evidence is there that the behavior will affect local water quality and flow control issues? What is the source of evidence?",
        Campaign1: CampaignOne.EvidenceOfBenefit,
        Campaign2: CampaignTwo.EvidenceOfBenefit,
        Campaign3: CampaignThree.EvidenceOfBenefit,
      },
      {
        id: 15,
        Question: "Generally, are most people able to enact the behavior?",
        Campaign1: CampaignOne.AreMostPeopleAble,
        Campaign2: CampaignTwo.AreMostPeopleAble,
        Campaign3: CampaignThree.AreMostPeopleAble,
      },
      {
        id: 16,
        Question: "What are the barriers to enacting the behavior?",
        Campaign1: CampaignOne.Barriers,
        Campaign2: CampaignTwo.Barriers,
        Campaign3: CampaignThree.Barriers,
      },
      {
        id: 17,
        Question:
          "To what degree can barriers be addressed as part of the campaign?",
        Campaign1: CampaignOne.DegreeBarriersAddressed,
        Campaign2: CampaignTwo.DegreeBarriersAddressed,
        Campaign3: CampaignThree.DegreeBarriersAddressed,
      },
      {
        id: 18,
        Question: "To what degree are people willing to enact the behavior?",
        Campaign1: CampaignOne.DegreePeopleWilling,
        Campaign2: CampaignTwo.DegreePeopleWilling,
        Campaign3: CampaignThree.DegreePeopleWilling,
      },
      {
        id: 19,
        Question: "Have prior and similar efforts been undertaken?",
        Campaign1: CampaignOne.PriorOrSimilar,
        Campaign2: CampaignTwo.PriorOrSimilar,
        Campaign3: CampaignThree.PriorOrSimilar,
      },

      {
        id: 20,
        Question: "What political issues, if any, are surrounding this work?",
        Campaign1: CampaignOne.PoliticalIssues,
        Campaign2: CampaignTwo.PoliticalIssues,
        Campaign3: CampaignThree.PoliticalIssues,
      },

      {
        id: 21,
        Question:
          "To what degree can equity issues be addressed with this behavior change?",
        Campaign1: CampaignOne.EquityIssues,
        Campaign2: CampaignTwo.EquityIssues,
        Campaign3: CampaignThree.EquityIssues,
      },

      {
        id: 22,
        Question:
          "Will enacting the behavior have any negative impact on the community?",
        Campaign1: CampaignOne.NegativeCommunityImpact,
        Campaign2: CampaignTwo.NegativeCommunityImpact,
        Campaign3: CampaignThree.NegativeCommunityImpact,
      },

      {
        id: 23,
        Question:
          "Is the behavior (or improvements from it) visible to the community?",
        Campaign1: CampaignOne.VisiblityToCommunity,
        Campaign2: CampaignTwo.VisiblityToCommunity,
        Campaign3: CampaignThree.VisiblityToCommunity,
      },

      {
        id: 24,
        Question:
          "What level of support will this behavior have from the community? ",
        Campaign1: CampaignOne.LevelOfSupport,
        Campaign2: CampaignTwo.LevelOfSupport,
        Campaign3: CampaignThree.LevelOfSupport,
      },

      {
        id: 25,
        Question:
          "What other policies/initiatives of the community/jurisdiction does this behavior support, if any?",
        Campaign1: CampaignOne.OtherSupport,
        Campaign2: CampaignTwo.OtherSupport,
        Campaign3: CampaignThree.OtherSupport,
      },

      {
        id: 26,
        Question: "What are the possible partnership opportunities, if any?",
        Campaign1: CampaignOne.PossiblePartnerships,
        Campaign2: CampaignTwo.PossiblePartnerships,
        Campaign3: CampaignThree.PossiblePartnerships,
      },

      {
        id: 27,
        Question: "Would this campaign qualify for a grant?",
        Campaign1: CampaignOne.QualifyForGrant,
        Campaign2: CampaignTwo.QualifyForGrant,
        Campaign3: CampaignThree.QualifyForGrant,
      },

      {
        id: 28,
        Question:
          "What community partners would be willing to advocate this work, if any?",
        Campaign1: CampaignOne.CommunityPartners,
        Campaign2: CampaignTwo.CommunityPartners,
        Campaign3: CampaignThree.CommunityPartners,
      },

      {
        id: 29,
        Question:
          "Are materials/tools/instruments available from previous studies?",
        Campaign1: CampaignOne.PerivousMaterials,
        Campaign2: CampaignTwo.PerivousMaterials,
        Campaign3: CampaignThree.PerivousMaterials,
      },

      {
        id: 30,
        Question:
          "Have available materials/tools/instruments been validated or pre-tested?",
        Campaign1: CampaignOne.AvaiableMaterials,
        Campaign2: CampaignTwo.AvaiableMaterials,
        Campaign3: CampaignThree.AvaiableMaterials,
      },
    ]);
    setCSVFileReady(true);
  };
  const [CampaignOne, setCampaignOne] = useState({
    CampaignTitle: "",
    ProblemAddressed: "",
    TargetBehavior: "",
    BehaviorEndState: "",
    BehaviorMeasureable: "",
    NeedForAction: "",
    DataAvaiable: "",
    TargetAudience: "",
    ResearchSelectionOfTargetAudience: "",
    BehaviorAddresses: "",
    TargetedPollutant: "",
    TopBenefit: "",
    EvidenceOfBenefit: "",
    AreMostPeopleAble: "",
    Barriers: "",
    DegreeBarriersAddressed: "",
    DegreePeopleWilling: "",
    PriorOrSimilar: "",
    PoliticalIssues: "",
    EquityIssues: "",
    NegativeCommunityImpact: "",
    VisiblityToCommunity: "",
    LevelOfSupport: "",
    OtherSupport: "",
    PossiblePartnerships: "",
    QualifyForGrant: "",
    CommunityPartners: "",
    PerivousMaterials: "",
    AvaiableMaterials: "",
  });

  const handleChangeCampaignOne = (evt) => {
    const value = evt.target.value;
    setCampaignOne({
      ...CampaignOne,
      [evt.target.name]: value,
    });
  };
  const [CampaignTwo, setCampaignTwo] = useState({
    CampaignTitle: "",
    ProblemAddressed: "",
    TargetBehavior: "",
    BehaviorEndState: "",
    BehaviorMeasureable: "",
    NeedForAction: "",
    DataAvaiable: "",
    TargetAudience: "",
    ResearchSelectionOfTargetAudience: "",
    BehaviorAddresses: "",
    TargetedPollutant: "",
    TopBenefit: "",
    EvidenceOfBenefit: "",
    AreMostPeopleAble: "",
    Barriers: "",
    DegreeBarriersAddressed: "",
    DegreePeopleWilling: "",
    PriorOrSimilar: "",
    PoliticalIssues: "",
    EquityIssues: "",
    NegativeCommunityImpact: "",
    VisiblityToCommunity: "",
    LevelOfSupport: "",
    OtherSupport: "",
    PossiblePartnerships: "",
    QualifyForGrant: "",
    CommunityPartners: "",
    PerivousMaterials: "",
    AvaiableMaterials: "",
  });
  const handleChangeCampaignTwo = (evt) => {
    const value = evt.target.value;
    setCampaignTwo({
      ...CampaignTwo,
      [evt.target.name]: value,
    });
  };

  const [CampaignThree, setCampaignThree] = useState({
    CampaignTitle: "",
    ProblemAddressed: "",
    TargetBehavior: "",
    BehaviorEndState: "",
    BehaviorMeasureable: "",
    NeedForAction: "",
    DataAvaiable: "",
    TargetAudience: "",
    ResearchSelectionOfTargetAudience: "",
    BehaviorAddresses: "",
    TargetedPollutant: "",
    TopBenefit: "",
    EvidenceOfBenefit: "",
    AreMostPeopleAble: "",
    Barriers: "",
    DegreeBarriersAddressed: "",
    DegreePeopleWilling: "",
    PriorOrSimilar: "",
    PoliticalIssues: "",
    EquityIssues: "",
    NegativeCommunityImpact: "",
    VisiblityToCommunity: "",
    LevelOfSupport: "",
    OtherSupport: "",
    PossiblePartnerships: "",
    QualifyForGrant: "",
    CommunityPartners: "",
    PerivousMaterials: "",
    AvaiableMaterials: "",
  });
  const handleChangeCampaignThree = (evt) => {
    const value = evt.target.value;
    setCampaignThree({
      ...CampaignThree,
      [evt.target.name]: value,
    });
  };

  return (
    <div className="page">
      <span>
        <h2 className="programComparisonHeader">CAMPAIGN SELECTION TOOL</h2>
        <p className="introText">
          It’s time to select an Behavior Change campaign that is right for you!
          The tool below allows you to compare Behavior Change campaigns based
          on your jursdiction’s needs.
          <br />
          <br />
          Begin by entering information below and work through each of the
          sections for your campaign(s). At the end, you will have the option to
          download your responses as an Excel spreadsheet for future reference.
          Please note that your information is not saved on this site, so you
          must complete the steps and download your report before closing your
          browser window or else your responses will be lost.
        </p>

        <div className="greyBox">
          <center>
            <h2>
              <b>HELPFUL LINKS</b>
            </h2>
          </center>
          <div>
            <LinkIcon />

            <Link
              href="file:///C:/Users/Nicholas/Downloads/E&O%20Website%20Mock%20Up_FINAL.pdf"
              underline="hover"
            >
              {"  "}Types of Campaigns
            </Link>
          </div>
          <div>
            <span>
              <LinkIcon />
            </span>
            <span>
              <Link
                href="file:///C:/Users/Nicholas/Downloads/E&O%20Website%20Mock%20Up_FINAL.pdf"
                underline="hover"
              >
                {"  "}Target Pollutants
              </Link>
            </span>
          </div>
          <div>
            <span>
              <LinkIcon />
            </span>
            <span>
              <Link
                href="file:///C:/Users/Nicholas/Downloads/E&O%20Website%20Mock%20Up_FINAL.pdf"
                underline="hover"
              >
                {"  "} Ask a Question
              </Link>
            </span>
          </div>
        </div>
      </span>
      <div className="panelBoxProgramComparison">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabNum}
              onChange={handleChange}
              aria-label="Campaign selector"
              scrollButtons="auto"
              varient="fullWidth"
            >
              <Tab label="Campaign Purpose & Problem" {...a11yProps(0)} />
              <Tab label="Target Behavior" {...a11yProps(1)} />
              <Tab label="Target Audience" {...a11yProps(2)} />
              <Tab label="Water Quality" {...a11yProps(3)} />
              <Tab label="Situational Analysis" {...a11yProps(4)} />
              <Tab label="Community Impact" {...a11yProps(5)} />
              <Tab label="Resources" {...a11yProps(6)} />
            </Tabs>
          </Box>
          <TabPanel value={tabNum} index={0}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Campaign #1</b>
                  </th>
                  <th>
                    <b>Campaign #2</b>
                  </th>
                  <th>
                    <b>Campaign #3</b>
                  </th>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Enter campaign title:</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      id="Campaign Title1"
                      name="CampaignTitle"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.CampaignTitle}
                      size="small"
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="Campaign Title2"
                      name="CampaignTitle"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.CampaignTitle}
                      size="small"
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="Campaign Title3"
                      name="CampaignTitle"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.CampaignTitle}
                      size="small"
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Enter problem addressed:</b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      id="problem addressed #1"
                      name="ProblemAddressed"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.ProblemAddressed}
                      size="small"
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="problem addressed #2"
                      name="ProblemAddressed"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.ProblemAddressed}
                      size="small"
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="problem addressed #3"
                      name="ProblemAddressed"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.ProblemAddressed}
                      size="small"
                      fullWidth
                    />
                  </td>
                </tr>
              </table>

              <div className="buttonNext">
                <Button onClick={handleNext} variant="contained">
                  Next
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={1}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Campaign #1</b>
                  </th>
                  <th>
                    <b>Campaign #2</b>
                  </th>
                  <th>
                    <b>Campaign #3</b>
                  </th>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Target Behavior:</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      id="Target Behavior1"
                      name="TargetBehavior"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.TargetBehavior}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="TargetBehavior2"
                      name="TargetBehavior"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.TargetBehavior}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TargetBehavior"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.TargetBehavior}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Is the behavior an "end-state" behavior?</b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.BehaviorEndState}
                      name="BehaviorEndState"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.BehaviorEndState}
                      name="BehaviorEndState"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.BehaviorEndState}
                      name="BehaviorEndState"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Can the behavior be measured?</b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.BehaviorMeasureable}
                      name="BehaviorMeasureable"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.BehaviorMeasureable}
                      name="BehaviorMeasureable"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.BehaviorMeasureable}
                      name="BehaviorMeasureable"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What gap or need for action will this behavior change
                      fill?
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="NeedForAction"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.NeedForAction}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="NeedForAction"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.NeedForAction}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="NeedForAction"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.NeedForAction}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      Is data available to show percent of people not engaging
                      in behavior?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.DataAvaiable}
                      name="DataAvaiable"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.DataAvaiable}
                      name="DataAvaiable"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.DataAvaiable}
                      name="DataAvaiable"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
              </table>
              <div className="buttonNext">
                <Button onClick={handleNext} variant="contained">
                  Next
                </Button>
              </div>
              <div className="buttonPrevious">
                <Button onClick={handlePrevious} variant="contained">
                  Previous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={2}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Campaign #1</b>
                  </th>
                  <th>
                    <b>Campaign #2</b>
                  </th>
                  <th>
                    <b>Campaign #3</b>
                  </th>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Target Audience:</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="TargetAudience"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.TargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TargetAudience"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.TargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TargetAudience"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.TargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What research, if any, was performed to select the target
                      audience/support target audience choice?
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="ResearchSelectionOfTargetAudience"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.ResearchSelectionOfTargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="ResearchSelectionOfTargetAudience"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.ResearchSelectionOfTargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="ResearchSelectionOfTargetAudience"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.ResearchSelectionOfTargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
              </table>
              <div className="buttonNext">
                <Button onClick={handleNext} variant="contained">
                  Next
                </Button>
              </div>
              <div className="buttonPrevious">
                <Button onClick={handlePrevious} variant="contained">
                  Previous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={3}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Campaign #1</b>
                  </th>
                  <th>
                    <b>Campaign #2</b>
                  </th>
                  <th>
                    <b>Campaign #3</b>
                  </th>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      Does the behavior address a local water quality or flow
                      control problem?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.BehaviorAddresses}
                      name="BehaviorAddresses"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.BehaviorAddresses}
                      name="BehaviorAddresses"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.BehaviorAddresses}
                      name="BehaviorAddresses"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What is the targeted pollutant or flow control method
                      addressed?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.TargetedPollutant}
                      name="TargetedPollutant"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                      multiline
                    >
                      <MenuItem
                        value={"Pathogens (Fecal Coliforms, Bacteria, E.Coli)"}
                      >
                        Pathogens (Fecal Coliforms, Bacteria, E.Coli)
                      </MenuItem>
                      <MenuItem value={"Nutrients"}>Nutrients</MenuItem>
                      <MenuItem value={"Metals"}>Metals</MenuItem>
                      <MenuItem value={"Oils"}>Oils</MenuItem>
                      <MenuItem value={"Sediment"}>Sediment</MenuItem>
                      <MenuItem value={"Trash"}>Trash</MenuItem>
                      <MenuItem
                        value={
                          "Toxic Chemicals (Pesticide, Household Cleaner, etc.)"
                        }
                      >
                        Toxic Chemicals (Pesticide, Household Cleaner, etc.)
                      </MenuItem>
                      <MenuItem value={"Flow Control/LID"}>
                        Flow Control/LID
                      </MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.TargetedPollutant}
                      name="TargetedPollutant"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                      multiline
                    >
                      <MenuItem
                        multiline
                        value={"Pathogens (Fecal Coliforms, Bacteria, E.Coli)"}
                      >
                        Pathogens (Fecal Coliforms, Bacteria, E.Coli)
                      </MenuItem>
                      <MenuItem value={"Nutrients"}>Nutrients</MenuItem>
                      <MenuItem value={"Metals"}>Metals</MenuItem>
                      <MenuItem value={"Oils"}>Oils</MenuItem>
                      <MenuItem value={"Sediment"}>Sediment</MenuItem>
                      <MenuItem value={"Trash"}>Trash</MenuItem>
                      <MenuItem
                        value={
                          "Toxic Chemicals (Pesticide, Household Cleaner, etc.)"
                        }
                      >
                        Toxic Chemicals (Pesticide, Household Cleaner, etc.)
                      </MenuItem>
                      <MenuItem value={"Flow Control/LID"}>
                        Flow Control/LID
                      </MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.TargetedPollutant}
                      name="TargetedPollutant"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                      multiline
                    >
                      <MenuItem
                        multiline
                        value={"Pathogens (Fecal Coliforms, Bacteria, E.Coli)"}
                      >
                        Pathogens (Fecal Coliforms, Bacteria, E.Coli)
                      </MenuItem>
                      <MenuItem multiline value={"Nutrients"}>
                        Nutrients
                      </MenuItem>
                      <MenuItem multiline value={"Metals"}>
                        Metals
                      </MenuItem>
                      <MenuItem multiline value={"Oils"}>
                        Oils
                      </MenuItem>
                      <MenuItem multiline value={"Sediment"}>
                        Sediment
                      </MenuItem>
                      <MenuItem multiline value={"Trash"}>
                        Trash
                      </MenuItem>
                      <MenuItem
                        multiline
                        value={
                          "Toxic Chemicals (Pesticide, Household Cleaner, etc.)"
                        }
                      >
                        Toxic Chemicals (Pesticide, Household Cleaner, etc.)
                      </MenuItem>
                      <MenuItem value={"Flow Control/LID"}>
                        Flow Control/LID
                      </MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>What is the top benefit of enacting the behavior?</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="TopBenefit"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.TopBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TopBenefit"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.TopBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TopBenefit"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.TopBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What evidence is there that the behavior will affect local
                      water quality and flow control issues? What is the source
                      of evidence?
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="EvidenceOfBenefit"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.EvidenceOfBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="EvidenceOfBenefit"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.EvidenceOfBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="EvidenceOfBenefit"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.EvidenceOfBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
              </table>
              <div className="buttonNext">
                <Button onClick={handleNext} variant="contained">
                  Next
                </Button>
              </div>
              <div className="buttonPrevious">
                <Button onClick={handlePrevious} variant="contained">
                  Previous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={4}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Campaign #1</b>
                  </th>
                  <th>
                    <b>Campaign #2</b>
                  </th>
                  <th>
                    <b>Campaign #3</b>
                  </th>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      Generally, are most people able to enact the behavior?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.AreMostPeopleAble}
                      name="AreMostPeopleAble"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.AreMostPeopleAble}
                      name="AreMostPeopleAble"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.AreMostPeopleAble}
                      name="AreMostPeopleAble"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>What are the barriers to enacting the behavior?</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="Barriers"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.Barriers}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="Barriers"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.Barriers}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="Barriers"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.Barriers}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      To what degree can barriers be addressed as part of the
                      campaign?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.DegreeBarriersAddressed}
                      name="DegreeBarriersAddressed"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.DegreeBarriersAddressed}
                      name="DegreeBarriersAddressed"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.DegreeBarriersAddressed}
                      name="DegreeBarriersAddressed"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      To what degree are people willing to enact the behavior?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.DegreePeopleWilling}
                      name="DegreePeopleWilling"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.DegreePeopleWilling}
                      name="DegreePeopleWilling"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.DegreePeopleWilling}
                      name="DegreePeopleWilling"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Have prior and similar efforts been undertaken?</b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.PriorOrSimilar}
                      name="PriorOrSimilar"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.PriorOrSimilar}
                      name="PriorOrSimilar"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.PriorOrSimilar}
                      name="PriorOrSimilar"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>

                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What political issues, if any, are surrounding this work?
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="PoliticalIssues"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.PoliticalIssues}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="PoliticalIssues"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.PoliticalIssues}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="PoliticalIssues"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.PoliticalIssues}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
              </table>
              <div className="buttonNext">
                <Button onClick={handleNext} variant="contained">
                  Next
                </Button>
              </div>
              <div className="buttonPrevious">
                <Button onClick={handlePrevious} variant="contained">
                  Previous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={5}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Campaign #1</b>
                  </th>
                  <th>
                    <b>Campaign #2</b>
                  </th>
                  <th>
                    <b>Campaign #3</b>
                  </th>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      To what degree can equity issues be addressed with this
                      behavior change?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.EquityIssues}
                      name="EquityIssues"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.EquityIssues}
                      name="EquityIssues"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.EquityIssues}
                      name="EquityIssues"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      Will enacting the behavior have any negative impact on the
                      community?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.NegativeCommunityImpact}
                      name="NegativeCommunityImpact"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.NegativeCommunityImpact}
                      name="NegativeCommunityImpact"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.NegativeCommunityImpact}
                      name="NegativeCommunityImpact"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      Is the behavior (or improvements from it) visible to the
                      community?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.VisiblityToCommunity}
                      name="VisiblityToCommunity"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.VisiblityToCommunity}
                      name="VisiblityToCommunity"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.VisiblityToCommunity}
                      name="VisiblityToCommunity"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What level of support will this behavior have from the
                      community?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.LevelOfSupport}
                      name="LevelOfSupport"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.LevelOfSupport}
                      name="LevelOfSupport"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.LevelOfSupport}
                      name="LevelOfSupport"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What other policies/initiatives of the
                      community/jurisdiction does this behavior support, if any?
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="OtherSupport"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.OtherSupport}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="OtherSupport"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.OtherSupport}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="OtherSupport"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.OtherSupport}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
              </table>
              <div className="buttonNext">
                <Button onClick={handleNext} variant="contained">
                  Next
                </Button>
              </div>
              <div className="buttonPrevious">
                <Button onClick={handlePrevious} variant="contained">
                  Previous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={6}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Campaign #1</b>
                  </th>
                  <th>
                    <b>Campaign #2</b>
                  </th>
                  <th>
                    <b>Campaign #3</b>
                  </th>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What are the possible partnership opportunities, if any?
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="PossiblePartnerships"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.PossiblePartnerships}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="PossiblePartnerships"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.PossiblePartnerships}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="PossiblePartnerships"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.PossiblePartnerships}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Would this campaign qualify for a grant?</b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.QualifyForGrant}
                      name="QualifyForGrant"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.QualifyForGrant}
                      name="QualifyForGrant"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.QualifyForGrant}
                      name="QualifyForGrant"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      What community partners would be willing to advocate this
                      work, if any?
                    </b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      name="CommunityPartners"
                      onChange={handleChangeCampaignOne}
                      variant="outlined"
                      value={CampaignOne.CommunityPartners}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="CommunityPartners"
                      onChange={handleChangeCampaignTwo}
                      variant="outlined"
                      value={CampaignTwo.CommunityPartners}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="CommunityPartners"
                      onChange={handleChangeCampaignThree}
                      variant="outlined"
                      value={CampaignThree.CommunityPartners}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      Are materials/tools/instruments available from previous
                      studies?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.PerivousMaterials}
                      name="PerivousMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.PerivousMaterials}
                      name="PerivousMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.PerivousMaterials}
                      name="PerivousMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      Have available materials/tools/instruments been validated
                      or pre-tested?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={CampaignOne.AvaiableMaterials}
                      name="AvaiableMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignTwo.AvaiableMaterials}
                      name="AvaiableMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={CampaignThree.AvaiableMaterials}
                      name="AvaiableMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeCampaignThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Unsure"}>Unsure</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
              </table>
              <div className="buttonPrevious">
                <Button onClick={handlePrevious} variant="contained">
                  Previous
                </Button>
              </div>
              <div className="buttonSubmit">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  size="large"
                  endIcon={<DoneIcon />}
                >
                  Submit
                </Button>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
      {CSVFileReady === true && (
        <div
          style={{
            marginTop: 150,
            marginBottom: 100,
            height: 500,
            width: "100%",
          }}
        >
          <DataGrid
            rows={combinedData}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </div>
      )}
    </div>
  );
}

export default CampaignSelection;
