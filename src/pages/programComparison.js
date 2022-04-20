import React, { useState } from "react";
import TabPanel from "../components/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Tab.css";
import "./Text.css";
import "./Table.css";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { CSVLink, CSVDownload } from "react-csv";

//Helper to tab prop
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function ProgramComparison() {
  const [tabNum, setTabNum] = useState(0);

  const handleChange = (event, newValue) => {
    setTabNum(newValue);
  };

  const handleNext = () => {
    setTabNum(tabNum + 1);
  };

  const handlePerivous = () => {
    setTabNum(tabNum - 1);
  };

  const columns = [
    {
      field: "Question",
      headerName: "Question",
      width: 650,
    },
    {
      field: "Program1",
      headerName: "Program One",
      width: 250,
    },
    {
      field: "Program2",
      headerName: "Program Two",
      width: 250,
    },
    {
      field: "Program3",
      headerName: "Program Three",
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
        Question: "Program Title",
        Program1: ProgramOne.ProgramTitle,
        Program2: ProgramTwo.ProgramTitle,
        Program3: ProgramThree.ProgramTitle,
      },
      {
        id: 2,
        Question: "Problem Addressed",
        Program1: ProgramOne.ProblemAddressed,
        Program2: ProgramTwo.ProblemAddressed,
        Program3: ProgramThree.ProblemAddressed,
      },
      {
        id: 3,
        Question: "Target Behavior",
        Program1: ProgramOne.TargetBehavior,
        Program2: ProgramTwo.TargetBehavior,
        Program3: ProgramThree.TargetBehavior,
      },
      {
        id: 4,
        Question: 'Is the behavior an "end-state" behavior?',
        Program1: ProgramOne.BehaviorEndState,
        Program2: ProgramTwo.BehaviorEndState,
        Program3: ProgramThree.BehaviorEndState,
      },
      {
        id: 5,
        Question: "Can the behavior be measured?",
        Program1: ProgramOne.BehaviorMeasureable,
        Program2: ProgramTwo.BehaviorMeasureable,
        Program3: ProgramThree.BehaviorMeasureable,
      },
      {
        id: 6,
        Question: "What gap or need for action will this behavior change fill?",
        Program1: ProgramOne.NeedForAction,
        Program2: ProgramTwo.NeedForAction,
        Program3: ProgramThree.NeedForAction,
      },
      {
        id: 7,
        Question:
          "Is data available to show percent of people not engaging in behavior?",
        Program1: ProgramOne.DataAvaiable,
        Program2: ProgramTwo.DataAvaiable,
        Program3: ProgramThree.DataAvaiable,
      },
      {
        id: 8,
        Question: "Target Audience",
        Program1: ProgramOne.TargetAudience,
        Program2: ProgramTwo.TargetAudience,
        Program3: ProgramThree.TargetAudience,
      },
      {
        id: 9,
        Question:
          "What research, if any, was performed to select the target audience/support target audience choice?",
        Program1: ProgramOne.ResearchSelectionOfTargetAudience,
        Program2: ProgramTwo.ResearchSelectionOfTargetAudience,
        Program3: ProgramThree.ResearchSelectionOfTargetAudience,
      },
      {
        id: 10,
        Question:
          "Is the strategic marketing mix appropriate for target audience?",
        Program1: ProgramOne.StartegicMarketing,
        Program2: ProgramTwo.StartegicMarketing,
        Program3: ProgramThree.StartegicMarketing,
      },
      {
        id: 11,
        Question:
          "Does the behavior address a local water quality or flow control problem?",
        Program1: ProgramOne.BehaviorAddresses,
        Program2: ProgramTwo.BehaviorAddresses,
        Program3: ProgramThree.BehaviorAddresses,
      },
      {
        id: 12,
        Question:
          "What is the targeted pollutant or flow control method addressed?",
        Program1: ProgramOne.TargetedPollutant,
        Program2: ProgramTwo.TargetedPollutant,
        Program3: ProgramThree.TargetedPollutant,
      },
      {
        id: 13,
        Question: "What is the top benefit of enacting the behavior?",
        Program1: ProgramOne.TopBenefit,
        Program2: ProgramTwo.TopBenefit,
        Program3: ProgramThree.TopBenefit,
      },
      {
        id: 14,
        Question:
          "What evidence is there that the behavior will affect local water quality and flow control issues? What is the source of evidence?",
        Program1: ProgramOne.EvidenceOfBenefit,
        Program2: ProgramTwo.EvidenceOfBenefit,
        Program3: ProgramThree.EvidenceOfBenefit,
      },
      {
        id: 15,
        Question: "Generally, are most people able to enact the behavior?",
        Program1: ProgramOne.AreMostPeopleAble,
        Program2: ProgramTwo.AreMostPeopleAble,
        Program3: ProgramThree.AreMostPeopleAble,
      },
      {
        id: 16,
        Question: "What are the barriers to enacting the behavior?",
        Program1: ProgramOne.Barriers,
        Program2: ProgramTwo.Barriers,
        Program3: ProgramThree.Barriers,
      },
      {
        id: 17,
        Question:
          "To what degree can barriers be addressed as part of the program?",
        Program1: ProgramOne.DegreeBarriersAddressed,
        Program2: ProgramTwo.DegreeBarriersAddressed,
        Program3: ProgramThree.DegreeBarriersAddressed,
      },
      {
        id: 18,
        Question: "To what degree are people willing to enact the behavior?",
        Program1: ProgramOne.DegreePeopleWilling,
        Program2: ProgramTwo.DegreePeopleWilling,
        Program3: ProgramThree.DegreePeopleWilling,
      },
      {
        id: 19,
        Question: "Have prior and similar efforts been undertaken?",
        Program1: ProgramOne.PriorOrSimilar,
        Program2: ProgramTwo.PriorOrSimilar,
        Program3: ProgramThree.PriorOrSimilar,
      },

      {
        id: 20,
        Question: "What political issues, if any, are surrounding this work?",
        Program1: ProgramOne.PoliticalIssues,
        Program2: ProgramTwo.PoliticalIssues,
        Program3: ProgramThree.PoliticalIssues,
      },

      {
        id: 21,
        Question:
          "To what degree can equity issues be addressed with this behavior change?",
        Program1: ProgramOne.EquityIssues,
        Program2: ProgramTwo.EquityIssues,
        Program3: ProgramThree.EquityIssues,
      },

      {
        id: 22,
        Question:
          "Will enacting the behavior have any negative impact on the community?",
        Program1: ProgramOne.NegativeCommunityImpact,
        Program2: ProgramTwo.NegativeCommunityImpact,
        Program3: ProgramThree.NegativeCommunityImpact,
      },

      {
        id: 23,
        Question:
          "Is the behavior (or improvements from it) visible to the community?",
        Program1: ProgramOne.VisiblityToCommunity,
        Program2: ProgramTwo.VisiblityToCommunity,
        Program3: ProgramThree.VisiblityToCommunity,
      },

      {
        id: 24,
        Question:
          "What level of support will this behavior have from the community? ",
        Program1: ProgramOne.LevelOfSupport,
        Program2: ProgramTwo.LevelOfSupport,
        Program3: ProgramThree.LevelOfSupport,
      },

      {
        id: 25,
        Question:
          "What other policies/initiatives of the community/jurisdiction does this behavior support, if any?",
        Program1: ProgramOne.OtherSupport,
        Program2: ProgramTwo.OtherSupport,
        Program3: ProgramThree.OtherSupport,
      },

      {
        id: 26,
        Question: "What are the possible partnership opportunities, if any?",
        Program1: ProgramOne.PossiblePartnerships,
        Program2: ProgramTwo.PossiblePartnerships,
        Program3: ProgramThree.PossiblePartnerships,
      },

      {
        id: 27,
        Question: "Would this program qualify for a grant?",
        Program1: ProgramOne.QualifyForGrant,
        Program2: ProgramTwo.QualifyForGrant,
        Program3: ProgramThree.QualifyForGrant,
      },

      {
        id: 28,
        Question:
          "What community partners would be willing to advocate this work, if any?",
        Program1: ProgramOne.CommunityPartners,
        Program2: ProgramTwo.CommunityPartners,
        Program3: ProgramThree.CommunityPartners,
      },

      {
        id: 29,
        Question:
          "Are materials/tools/instruments available from previous studies?",
        Program1: ProgramOne.PerivousMaterials,
        Program2: ProgramTwo.PerivousMaterials,
        Program3: ProgramThree.PerivousMaterials,
      },

      {
        id: 30,
        Question:
          "Have available materials/tools/instruments been validated or pre-tested?",
        Program1: ProgramOne.AvaiableMaterials,
        Program2: ProgramTwo.AvaiableMaterials,
        Program3: ProgramThree.AvaiableMaterials,
      },
    ]);
    setCSVFileReady(true);
  };
  const [ProgramOne, setProgramOne] = useState({
    ProgramTitle: "",
    ProblemAddressed: "",
    TargetBehavior: "",
    BehaviorEndState: "",
    BehaviorMeasureable: "",
    NeedForAction: "",
    DataAvaiable: "",
    TargetAudience: "",
    ResearchSelectionOfTargetAudience: "",
    StartegicMarketing: "",
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

  const handleChangeProgramOne = (evt) => {
    const value = evt.target.value;
    setProgramOne({
      ...ProgramOne,
      [evt.target.name]: value,
    });
  };
  const [ProgramTwo, setProgramTwo] = useState({
    ProgramTitle: "",
    ProblemAddressed: "",
    TargetBehavior: "",
    BehaviorEndState: "",
    BehaviorMeasureable: "",
    NeedForAction: "",
    DataAvaiable: "",
    TargetAudience: "",
    ResearchSelectionOfTargetAudience: "",
    StartegicMarketing: "",
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
  const handleChangeProgramTwo = (evt) => {
    const value = evt.target.value;
    setProgramTwo({
      ...ProgramTwo,
      [evt.target.name]: value,
    });
  };

  const [ProgramThree, setProgramThree] = useState({
    ProgramTitle: "",
    ProblemAddressed: "",
    TargetBehavior: "",
    BehaviorEndState: "",
    BehaviorMeasureable: "",
    NeedForAction: "",
    DataAvaiable: "",
    TargetAudience: "",
    ResearchSelectionOfTargetAudience: "",
    StartegicMarketing: "",
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
  const handleChangeProgramThree = (evt) => {
    const value = evt.target.value;
    setProgramThree({
      ...ProgramThree,
      [evt.target.name]: value,
    });
  };

  return (
    <div className="page">
      <span>
        <h2 className="programComparisonHeader">PROGRAM COMPARISON TOOL</h2>
        <p className="introText">
          It’s time to select an Behavior Change program that is right for you!
          The tool below allows you to compare Behavior Change programs based on
          your jursdiction’s needs.
          <br />
          <br />
          Begin by entering information below and work through each of the
          sections for your program(s). At the end, you will have the option to
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
              {"  "}Types of Programs
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
              aria-label="Comparison selector"
              scrollButtons="auto"
              varient="fullWidth"
            >
              <Tab label="Program Purpose & Problem" {...a11yProps(0)} />
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
                    <b>Program #1</b>
                  </th>
                  <th>
                    <b>Program #2</b>
                  </th>
                  <th>
                    <b>Program #3</b>
                  </th>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Enter program title:</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TextField
                      id="Program Title1"
                      name="ProgramTitle"
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.ProgramTitle}
                      size="small"
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="Program Title2"
                      name="ProgramTitle"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.ProgramTitle}
                      size="small"
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="Program Title3"
                      name="ProgramTitle"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.ProgramTitle}
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.ProblemAddressed}
                      size="small"
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="problem addressed #2"
                      name="ProblemAddressed"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.ProblemAddressed}
                      size="small"
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="problem addressed #3"
                      name="ProblemAddressed"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.ProblemAddressed}
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
                    <b>Program #1</b>
                  </th>
                  <th>
                    <b>Program #2</b>
                  </th>
                  <th>
                    <b>Program #3</b>
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.TargetBehavior}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      id="TargetBehavior2"
                      name="TargetBehavior"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.TargetBehavior}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TargetBehavior"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.TargetBehavior}
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
                      value={ProgramOne.BehaviorEndState}
                      name="BehaviorEndState"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.BehaviorEndState}
                      name="BehaviorEndState"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.BehaviorEndState}
                      name="BehaviorEndState"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
                      value={ProgramOne.BehaviorMeasureable}
                      name="BehaviorMeasureable"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.BehaviorMeasureable}
                      name="BehaviorMeasureable"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.BehaviorMeasureable}
                      name="BehaviorMeasureable"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.NeedForAction}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="NeedForAction"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.NeedForAction}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="NeedForAction"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.NeedForAction}
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
                      value={ProgramOne.DataAvaiable}
                      name="DataAvaiable"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.DataAvaiable}
                      name="DataAvaiable"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.DataAvaiable}
                      name="DataAvaiable"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
              <div className="buttonPerivous">
                <Button onClick={handlePerivous} variant="contained">
                  Perivous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={2}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Program #1</b>
                  </th>
                  <th>
                    <b>Program #2</b>
                  </th>
                  <th>
                    <b>Program #3</b>
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.TargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TargetAudience"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.TargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TargetAudience"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.TargetAudience}
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.ResearchSelectionOfTargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="ResearchSelectionOfTargetAudience"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.ResearchSelectionOfTargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="ResearchSelectionOfTargetAudience"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.ResearchSelectionOfTargetAudience}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>
                      Is the strategic marketing mix appropriate for target
                      audience?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={ProgramOne.StartegicMarketing}
                      name="StartegicMarketing"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.StartegicMarketing}
                      name="StartegicMarketing"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.StartegicMarketing}
                      name="StartegicMarketing"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
              <div className="buttonPerivous">
                <Button onClick={handlePerivous} variant="contained">
                  Perivous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={3}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Program #1</b>
                  </th>
                  <th>
                    <b>Program #2</b>
                  </th>
                  <th>
                    <b>Program #3</b>
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
                      value={ProgramOne.BehaviorAddresses}
                      name="BehaviorAddresses"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.BehaviorAddresses}
                      name="BehaviorAddresses"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.BehaviorAddresses}
                      name="BehaviorAddresses"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
                      value={ProgramOne.TargetedPollutant}
                      name="TargetedPollutant"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
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
                      value={ProgramTwo.TargetedPollutant}
                      name="TargetedPollutant"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
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
                      value={ProgramThree.TargetedPollutant}
                      name="TargetedPollutant"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.TopBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TopBenefit"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.TopBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="TopBenefit"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.TopBenefit}
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.EvidenceOfBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="EvidenceOfBenefit"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.EvidenceOfBenefit}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="EvidenceOfBenefit"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.EvidenceOfBenefit}
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
              <div className="buttonPerivous">
                <Button onClick={handlePerivous} variant="contained">
                  Perivous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={4}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Program #1</b>
                  </th>
                  <th>
                    <b>Program #2</b>
                  </th>
                  <th>
                    <b>Program #3</b>
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
                      value={ProgramOne.AreMostPeopleAble}
                      name="AreMostPeopleAble"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.AreMostPeopleAble}
                      name="AreMostPeopleAble"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.AreMostPeopleAble}
                      name="AreMostPeopleAble"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.Barriers}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="Barriers"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.Barriers}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="Barriers"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.Barriers}
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
                      program?
                    </b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={ProgramOne.DegreeBarriersAddressed}
                      name="DegreeBarriersAddressed"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.DegreeBarriersAddressed}
                      name="DegreeBarriersAddressed"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.DegreeBarriersAddressed}
                      name="DegreeBarriersAddressed"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
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
                      value={ProgramOne.DegreePeopleWilling}
                      name="DegreePeopleWilling"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.DegreePeopleWilling}
                      name="DegreePeopleWilling"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.DegreePeopleWilling}
                      name="DegreePeopleWilling"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
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
                      value={ProgramOne.PriorOrSimilar}
                      name="PriorOrSimilar"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.PriorOrSimilar}
                      name="PriorOrSimilar"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.PriorOrSimilar}
                      name="PriorOrSimilar"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.PoliticalIssues}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="PoliticalIssues"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.PoliticalIssues}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="PoliticalIssues"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.PoliticalIssues}
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
              <div className="buttonPerivous">
                <Button onClick={handlePerivous} variant="contained">
                  Perivous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={5}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Program #1</b>
                  </th>
                  <th>
                    <b>Program #2</b>
                  </th>
                  <th>
                    <b>Program #3</b>
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
                      value={ProgramOne.EquityIssues}
                      name="EquityIssues"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.EquityIssues}
                      name="EquityIssues"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.EquityIssues}
                      name="EquityIssues"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
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
                      value={ProgramOne.NegativeCommunityImpact}
                      name="NegativeCommunityImpact"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.NegativeCommunityImpact}
                      name="NegativeCommunityImpact"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"Maybe"}>Maybe</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.NegativeCommunityImpact}
                      name="NegativeCommunityImpact"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
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
                      value={ProgramOne.VisiblityToCommunity}
                      name="VisiblityToCommunity"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.VisiblityToCommunity}
                      name="VisiblityToCommunity"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.VisiblityToCommunity}
                      name="VisiblityToCommunity"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
                      value={ProgramOne.LevelOfSupport}
                      name="LevelOfSupport"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.LevelOfSupport}
                      name="LevelOfSupport"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Low"}>Low</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"High"}>High</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.LevelOfSupport}
                      name="LevelOfSupport"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.OtherSupport}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="OtherSupport"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.OtherSupport}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="OtherSupport"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.OtherSupport}
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
              <div className="buttonPerivous">
                <Button onClick={handlePerivous} variant="contained">
                  Perivous
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={tabNum} index={6}>
            <div className="roundedCorner">
              <table className="programComparisonTable">
                <tr className="headerRow">
                  <th>
                    <b>Program #1</b>
                  </th>
                  <th>
                    <b>Program #2</b>
                  </th>
                  <th>
                    <b>Program #3</b>
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.PossiblePartnerships}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="PossiblePartnerships"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.PossiblePartnerships}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="PossiblePartnerships"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.PossiblePartnerships}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                </tr>
                <tr>
                  <td className="questionLabels" colSpan="3">
                    <b>Would this program qualify for a grant?</b>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Select
                      value={ProgramOne.QualifyForGrant}
                      name="QualifyForGrant"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.QualifyForGrant}
                      name="QualifyForGrant"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.QualifyForGrant}
                      name="QualifyForGrant"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
                      onChange={handleChangeProgramOne}
                      variant="outlined"
                      value={ProgramOne.CommunityPartners}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="CommunityPartners"
                      onChange={handleChangeProgramTwo}
                      variant="outlined"
                      value={ProgramTwo.CommunityPartners}
                      size="small"
                      multiline
                      fullWidth
                    />
                  </td>
                  <td>
                    <TextField
                      name="CommunityPartners"
                      onChange={handleChangeProgramThree}
                      variant="outlined"
                      value={ProgramThree.CommunityPartners}
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
                      value={ProgramOne.PerivousMaterials}
                      name="PerivousMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.PerivousMaterials}
                      name="PerivousMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.PerivousMaterials}
                      name="PerivousMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
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
                      value={ProgramOne.AvaiableMaterials}
                      name="AvaiableMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramOne}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramTwo.AvaiableMaterials}
                      name="AvaiableMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramTwo}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                  <td>
                    <Select
                      value={ProgramThree.AvaiableMaterials}
                      name="AvaiableMaterials"
                      fullWidth
                      size="small"
                      onChange={handleChangeProgramThree}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </td>
                </tr>
              </table>
              <div className="buttonNext">
                {" "}
                {/* submit uses same formating as Next */}
                <Button onClick={handleSubmit} variant="contained">
                  Submit
                </Button>
              </div>
              <div className="buttonPerivous">
                <Button onClick={handlePerivous} variant="contained">
                  Perivous
                </Button>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
      {CSVFileReady == true && (
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

export default ProgramComparison;
