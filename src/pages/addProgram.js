import React from "react";
import TabPanel from "../components/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Tab.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, setState, state } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import LinkIcon from "@mui/icons-material/Link";
import Link from "@mui/material/Link";
import "./InputFile.css";
import "./Table.css";
import { Alert } from "@mui/material";
import { fireStore, storage } from "../firebase";
import { TwentyZeroMpRounded } from "@mui/icons-material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AddProgram() {
  const [Tabvalue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleNext = () => {
    setTabValue(Tabvalue + 1);
  };
  const handlePerivous = () => {
    setTabValue(Tabvalue - 1);
  };

  //handles changes in form data
  const handleChangeFormData = (evt) => {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value,
    });
  };

  //Files Constants
  const handleFile = (evt) => {
    setFormState({ formState: evt.target.files[0] });
  };

  ///Form Data
  const [formState, setFormState] = useState({
    JurisdictionName: "",
    JurisdictionContact: "",
    OtherAgencies: "",
    AgenciesContact: "",
    StudyName: "",
    Authors: "",
    YearStarted: "",
    YearCompleted: "",
    Report: null,
    Abstract: null,
    StudyLocation: "",
    Pollutant: "",
    TargetBehaviourChange: "",
    BehaviorChangeCategory: "",
    TargetAudience: "",
    TargetAudienceCategory: "",
    CampaignLocation: "",
    DescriptionofCampaignMaterials: "",
    CampaignMaterialExample: null,
    MaterialsValidated: "",
    Type: "",
    Location: "",
    SampleSize: "",
    DataCollectionDatePreEOStart: "",
    DataCollectionDatePreEOEnd: "",
    DataCollectionDatePostEOStart: "",
    DataCollectionDatePostEOEnd: "",
    InstrumentsUsed: "",
    IntendedPurpose: "",
    InstrumentsValidated: "",
    ValidationProcess: "",
    InstrumentExample: null,
    DataQualityIndicators: "",
    UsabilityValidated: "",
    DataAnalysisMethod: "",
    HypothesisTesting: "",
  });

  const submitData = (evt) => {
    evt.preventDefault();
    fireStore.collection("UserSubmited").add({
      JurisdictionName: formState.JurisdictionName,
      JurisdictionContact: formState.JurisdictionContact,
      OtherAgencies: formState.OtherAgencies,
      AgenciesContact: formState.AgenciesContact,
      StudyName: formState.StudyName,
      Authors: formState.Authors,
      YearStarted: formState.YearStarted,
      YearCompleted: formState.YearCompleted,
      Report: formState.Report,
      Abstract: formState.Abstract,
      StudyLocation: formState.StudyLocation,
      Pollutant: formState.Pollutant,
      TargetBehaviourChange: formState.TargetBehaviourChange,
      BehaviorChangeCategory: formState.BehaviorChangeCategory,
      TargetAudience: formState.TargetAudience,
      TargetAudienceCategory: formState.TargetAudienceCategory,
      CampaignLocation: formState.CampaignLocation,
      DescriptionofCampaignMaterials: formState.DescriptionofCampaignMaterials,
      CampaignMaterialExample: formState.CampaignMaterialExample,
      MaterialsValidated: formState.MaterialsValidated,
      Type: formState.Type,
      Location: formState.Location,
      SampleSize: formState.SampleSize,
      DataCollectionDatePreEOStart: formState.DataCollectionDatePreEOStart,
      DataCollectionDatePreEOEnd: formState.DataCollectionDatePreEOEnd,
      DataCollectionDatePostEOStart: formState.DataCollectionDatePostEOStart,
      DataCollectionDatePostEOEnd: formState.DataCollectionDatePostEOEnd,
      InstrumentsUsed: formState.InstrumentsUsed,
      IntendedPurpose: formState.IntendedPurpose,
      InstrumentsValidated: formState.InstrumentsValidated,
      ValidationProcess: formState.ValidationProcess,
      InstrumentExample: formState.InstrumentExample,
      DataQualityIndicators: formState.DataQualityIndicators,
      UsabilityValidated: formState.UsabilityValidated,
      DataAnalysisMethod: formState.DataAnalysisMethod,
      HypothesisTesting: formState.HypothesisTesting,
    });
    alert("Data Upload Successful");
  };

  return (
    <div className="page">
      <span>
        <h2>SUBMIT DATA</h2>
        <p className="introText">
          If you know of stormwater and/or water quality behavior change
          programs that we do not have listed, please help us by inputting the
          details through this form. We will follow up to verify information
          before publicly posting. If you have any questions or would like to
          suggest corrections to existing entries in the data please contact us
          at Joe.Cook@WSU.edu.
          <br />
          <br />
          To begin, enter info in the tabs below.
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
              {"   "}How to Submit
            </Link>
          </div>
          <div>
            <LinkIcon />

            <Link
              href="file:///C:/Users/Nicholas/Downloads/E&O%20Website%20Mock%20Up_FINAL.pdf"
              underline="hover"
            >
              {"   "}Types of Programs
            </Link>
          </div>
          <div>
            <LinkIcon />
            <Link
              href="file:///C:/Users/Nicholas/Downloads/E&O%20Website%20Mock%20Up_FINAL.pdf"
              underline="hover"
            >
              {"   "}Target Pollutants
            </Link>
          </div>
          <div>
            <LinkIcon />
            <Link
              href="file:///C:/Users/Nicholas/Downloads/E&O%20Website%20Mock%20Up_FINAL.pdf"
              underline="hover"
            >
              {"   "} Ask a Question
            </Link>
          </div>
        </div>
      </span>

      <h2>DATA USAGE</h2>
      <p>
        The data collected here is reviewed by our team and added to the working
        database.
      </p>

      <h2>SECURITY</h2>
      <p>
        All data is held within a secured database. Contact information is not
        shared publicly in any capacity.
      </p>

      <div className="panelBoxAddProgram">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={Tabvalue}
              onChange={handleChangeTab}
              aria-label="Add Program selector"
              scrollButtons="auto"
              textColor="inherit"
              variant="fullWidth"
            >
              <Tab label="General Background" {...a11yProps(0)} />
              <Tab label="Study Information" {...a11yProps(1)} />
              <Tab label="Data Collection" {...a11yProps(2)} />
              <Tab label="Data Verification" {...a11yProps(3)} />
              <Tab label="Campaign Materials & Instruments" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={Tabvalue} index={0}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <table className="addProgram">
                <tr>
                  <td>
                    <TextField
                      id="Jurisdiction Name & Department"
                      label="Jurisdiction Name & Department"
                      name="JurisdictionName"
                      onChange={handleChangeFormData}
                      variant="outlined"
                      value={formState.JurisdictionName}
                      size="small"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="Jurisdiction Contact"
                      label="Jurisdiction Contact"
                      name="JurisdictionContact"
                      onChange={handleChangeFormData}
                      variant="outlined"
                      value={formState.JurisdictionContact}
                      size="small"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="Other Agencies Involvedined-basic"
                      label="Other Agencies Involved"
                      name="OtherAgencies"
                      onChange={handleChangeFormData}
                      variant="outlined"
                      value={formState.OtherAgencies}
                      size="small"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="Other Agency Contact(s)"
                      label="Other Agency Contact(s)"
                      name="AgenciesContact"
                      onChange={handleChangeFormData}
                      variant="outlined"
                      value={formState.AgenciesContact}
                      size="small"
                      fullWidth
                      margin="normal"
                    />
                  </td>
                  <td>
                    <TextField
                      id="Study Name"
                      label="Study Name"
                      name="StudyName"
                      onChange={handleChangeFormData}
                      variant="outlined"
                      value={formState.StudyName}
                      size="small"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="Report Author(s)"
                      label="Report Author(s)"
                      name="Authors"
                      onChange={handleChangeFormData}
                      variant="outlined"
                      value={formState.Authors}
                      size="small"
                      fullWidth
                      margin="normal"
                    />
                    <span>
                      <div className="leftbox">
                        <TextField
                          id="date"
                          label="Year Study Started"
                          name="YearStarted"
                          onChange={handleChangeFormData}
                          value={formState.YearStarted}
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          size="small"
                          margin="normal"
                        />
                      </div>
                      <div className="rightbox">
                        <TextField
                          id="date"
                          label="Year Study Completed"
                          name="YearCompleted"
                          onChange={handleChangeFormData}
                          value={formState.YearCompleted}
                          type="date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          size="small"
                          margin="normal"
                        />
                      </div>
                    </span>
                    <center>
                      <input
                        name="Report"
                        onChange={handleFile}
                        accept="doc/*"
                        id="report-upload-file"
                        value={formState.Report}
                        type="file"
                      ></input>
                      <label for="report-upload-file">Upload Report</label>
                    </center>
                    <center className="spacing">
                      <input
                        name="Abstract"
                        onChange={handleFile}
                        accept="doc/*"
                        value={formState.Abstract}
                        id="Abstract-upload-file"
                        type="file"
                      ></input>
                      <label for="Abstract-upload-file">Upload Abstract</label>
                    </center>
                  </td>
                </tr>
                <div className="buttonNext">
                  <Button onClick={handleNext} variant="contained">
                    Next
                  </Button>
                </div>
              </table>
            </Box>
          </TabPanel>
          <TabPanel value={Tabvalue} index={1}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="leftbox">
                <TextField
                  id="Study Location"
                  label="Study Location"
                  name="StudyLocation"
                  onChange={handleChangeFormData}
                  variant="outlined"
                  value={formState.StudyLocation}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <InputLabel id="Target Pollutant">
                  Target Pollutant, If Applicable
                </InputLabel>
                <Select
                  labelId="Target Pollutant"
                  id="TargetPollutant"
                  value={formState.Pollutant}
                  label="Pollutant"
                  name="Pollutant"
                  fullWidth
                  size="small"
                  onChange={handleChangeFormData}
                >
                  <MenuItem value={"Pathogens"}>
                    Pathogens (Fecal Coliforms, Bacteria, E.Coli)
                  </MenuItem>
                  <MenuItem value={"Nutrients"}>Nutrients</MenuItem>
                  <MenuItem value={"Metals"}>Metals</MenuItem>
                  <MenuItem value={"Oils"}>Oils</MenuItem>
                  <MenuItem value={"Sediment"}>Sediment</MenuItem>
                  <MenuItem value={"Trash"}>Trash</MenuItem>
                  <MenuItem value={"Toxic_Chemicals"}>
                    Toxic Chemicals (Pesticide, Household Cleaner, etc.)
                  </MenuItem>
                </Select>
                <TextField
                  id="Target Behavior Change"
                  label="Target Behavior Change"
                  name="TargetBehaviourChange"
                  onChange={handleChangeFormData}
                  value={formState.TargetBehaviourChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <div className="buttonPerivous">
                  <Button onClick={handlePerivous} variant="contained">
                    Perivous
                  </Button>
                </div>
              </div>
              <div className="rightbox">
                <InputLabel id="Target Behavior Change Category">
                  Target Behavior Change Category
                </InputLabel>
                <Select
                  labelId="Target Behavior Change Category"
                  id="TargetBehaviorChangeCategory"
                  value={formState.BehaviorChangeCategory}
                  name="BehaviorChangeCategory"
                  label="Behavior Change Category"
                  onChange={handleChangeFormData}
                  fullWidth
                  size="small"
                >
                  <MenuItem
                    value={
                      "Pet Waste Management and Disposal; Yard Car Techniques"
                    }
                  >
                    Pet Waste Management and Disposal; Yard Car Techniques
                  </MenuItem>
                  <MenuItem value={"Dumpster and Trash Compactor Maintenance"}>
                    Dumpster and Trash Compactor Maintenance
                  </MenuItem>
                  <MenuItem value={"Litter and Debris Prevention"}>
                    Litter and Debris Prevention
                  </MenuItem>
                  <MenuItem
                    value={
                      "Use and Storage of Automotive Chemicals, Hazardous Cleaning Supplies, Carwash Soaps, and Other Hazardous Materials"
                    }
                  >
                    Use and Storage of Automotive Chemicals, Hazardous Cleaning
                    Supplies, Carwash Soaps, and Other Hazardous Materials
                  </MenuItem>
                  <MenuItem value={"Prevention of Illicit Discharges"}>
                    Prevention of Illicit Discharges
                  </MenuItem>
                  <MenuItem
                    value={
                      "Use and Storage of Pesticides, Fertilizers, and other Household Chemicals"
                    }
                  >
                    Use and Storage of Pesticides, Fertilizers, and other
                    Household Chemicals
                  </MenuItem>
                  <MenuItem value={"Carpet Cleaning"}>Carpet Cleaning</MenuItem>
                  <MenuItem
                    value={
                      "Repair and Maintenance for Best Management Practices (BMPs) for Vehicles, Equipment, and/or Home Buildings"
                    }
                  >
                    Repair and Maintenance for Best Management Practices (BMPs)
                    for Vehicles, Equipment, and/or Home Buildings
                  </MenuItem>
                  <MenuItem
                    defaultValue={
                      "Low Impact Development (LID) Principals and LID BMPs"
                    }
                  >
                    {" "}
                    Low Impact Development (LID) Principals and LID BMPs
                  </MenuItem>
                  <MenuItem
                    value={
                      "Stormwater Facility Maintenance, Including LID Facilities; Sediment and Erosion Control"
                    }
                  >
                    Stormwater Facility Maintenance, Including LID Facilities;
                    Sediment and Erosion Control
                  </MenuItem>
                </Select>
                <TextField
                  id="Target Audience"
                  label="Target Audience"
                  name="TargetAudience"
                  onChange={handleChangeFormData}
                  value={formState.TargetAudience}
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <InputLabel id="Target Audience Category">
                  Target Audience Category
                </InputLabel>
                <Select
                  labelId="Target Audience Category"
                  id="Target Audience Category"
                  value={formState.TargetAudienceCategory}
                  label="Target Audience Category"
                  fullWidth
                  name="TargetAudienceCategory"
                  size="small"
                  onChange={handleChangeFormData}
                >
                  <MenuItem value={"General Public"}>General Public</MenuItem>
                  <MenuItem value={"School-Age Children"}>
                    School-Age Children
                  </MenuItem>
                  <MenuItem value={"Businesses"}>Businesses</MenuItem>
                  <MenuItem value={"Engineers"}>Engineers</MenuItem>
                  <MenuItem value={"Contractors"}>Contractors</MenuItem>
                  <MenuItem value={"Developers"}>Developers</MenuItem>
                  <MenuItem value={"Planners"}>Planners</MenuItem>
                  <MenuItem value={"Residents"}>Residents</MenuItem>
                  <MenuItem value={"Landscapers"}>Landscapers</MenuItem>
                  <MenuItem value={"Property Managers"}>
                    Property Managers
                  </MenuItem>
                  <MenuItem valueTAC={"Development Review Staff"}>
                    Development Review Staff
                  </MenuItem>
                </Select>
                <div className="buttonNext">
                  <Button onClick={handleNext} variant="contained">
                    Next
                  </Button>
                </div>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value={Tabvalue} index={2}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="leftbox">
                <InputLabel id="Type">Type</InputLabel>
                <Select
                  labelId="Type"
                  id="Type"
                  value={formState.Type}
                  label="Target Audience Category"
                  fullWidth
                  name="Type"
                  size="small"
                  onChange={handleChangeFormData}
                >
                  <MenuItem value={"Baseline"}>Baseline</MenuItem>
                  <MenuItem value={"Follow-up"}>Follow-up</MenuItem>
                  <MenuItem value={"Both"}>Both</MenuItem>
                </Select>
                <TextField
                  label="Location"
                  variant="outlined"
                  name="Location"
                  onChange={handleChangeFormData}
                  value={formState.Location}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Sample Size"
                  variant="outlined"
                  name="SampleSize"
                  onChange={handleChangeFormData}
                  value={formState.SampleSize}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <span>
                  <center>
                    <p>
                      <b>Data Collection Date Range</b>
                    </p>
                  </center>
                  <div className="leftbox">
                    <TextField
                      label="Start of pre-E&O data collection"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="DataCollectionDatePreEOStart"
                      onChange={handleChangeFormData}
                      value={formState.DataCollectionDatePreEOStart}
                      size="small"
                      margin="normal"
                    />
                  </div>
                  <div className="rightbox">
                    <TextField
                      label="End of pre-E&O data collection"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="DataCollectionDatePreEOEnd"
                      onChange={handleChangeFormData}
                      value={formState.DataCollectionDatePreEOEnd}
                      size="small"
                      margin="normal"
                    />
                  </div>
                  <div className="leftbox">
                    <TextField
                      label="Start of post-E&O data collection"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="DataCollectionDatePostEOStart"
                      onChange={handleChangeFormData}
                      value={formState.DataCollectionDatePostEOStart}
                      size="small"
                      margin="normal"
                    />
                  </div>
                  <div className="rightbox">
                    <TextField
                      label="End of post-E&O data collection"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="DataCollectionDatePostEOEnd"
                      onChange={handleChangeFormData}
                      value={formState.DataCollectionDatePostEOEnd}
                      size="small"
                      margin="normal"
                    />
                  </div>
                </span>
                <div className="buttonPerivous">
                  <Button onClick={handlePerivous} variant="contained">
                    Perivous
                  </Button>
                </div>
              </div>
              <div className="rightbox">
                <TextField
                  label="Instruments Used"
                  variant="outlined"
                  name="InstrumentsUsed"
                  onChange={handleChangeFormData}
                  value={formState.InstrumentsUsed}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Intended Purpose"
                  variant="outlined"
                  name="IntendedPurpose"
                  onChange={handleChangeFormData}
                  value={formState.IntendedPurpose}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <InputLabel id="InstrumentsValidated">
                  Was the instrument validated or pre-tested?
                </InputLabel>
                <Select
                  labelId="InstrumentsValidated"
                  value={formState.InstrumentsValidated}
                  label="Was the instrument validated or pre-tested?"
                  fullWidth
                  name="InstrumentsValidated"
                  size="small"
                  onChange={handleChangeFormData}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
                <TextField
                  label="Instrument Validation Process"
                  variant="outlined"
                  name="ValidationProcess"
                  onChange={handleChangeFormData}
                  value={formState.ValidationProcess}
                  size="small"
                  fullWidth
                  margin="normal"
                />

                <center className="spacing">
                  <input
                    name="InstrumentExample"
                    onChange={handleFile}
                    accept="doc/*"
                    value={formState.InstrumentExample}
                    id="Instrument Example"
                    type="file"
                  ></input>
                  <label for="Instrument Example">
                    Upload Instrument Example
                  </label>
                </center>
                <div className="buttonNextDataCollection">
                  <Button onClick={handleNext} variant="contained">
                    Next
                  </Button>
                </div>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value={Tabvalue} index={3}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="leftbox">
                <InputLabel id="DQI">
                  Data Quality Indicators (DQIs) that Were Addressed
                </InputLabel>
                <Select
                  labelId="DQI"
                  value={formState.DataQualityIndicators}
                  label="Data Quality Indicators (DQIs) that Were Addressed"
                  fullWidth
                  name="DataQualityIndicators"
                  size="small"
                  onChange={handleChangeFormData}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
                <TextField
                  label="Was the usability of the data validated? If so, how?"
                  variant="outlined"
                  name="UsabilityValidated"
                  onChange={handleChangeFormData}
                  value={formState.UsabilityValidated}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <div className="buttonPerivous">
                  <Button onClick={handlePerivous} variant="contained">
                    Perivous
                  </Button>
                </div>
              </div>
              <div className="rightbox">
                <TextField
                  label="Data Analysis Methods"
                  variant="outlined"
                  name="DataAnalysisMethod"
                  onChange={handleChangeFormData}
                  value={formState.DataAnalysisMethod}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <InputLabel id="HTC">
                  Was hypothesis testing completed?
                </InputLabel>
                <Select
                  labelId="HTC"
                  value={formState.HypothesisTesting}
                  label="Was hypothesis testing completed?"
                  fullWidth
                  name="HypothesisTesting"
                  size="small"
                  onChange={handleChangeFormData}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
                <div className="buttonNext">
                  <Button onClick={handleNext} variant="contained">
                    Next
                  </Button>
                </div>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value={Tabvalue} index={4}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="leftbox">
                <TextField
                  label="Campaign Location"
                  variant="outlined"
                  name="CampaignLocation"
                  onChange={handleChangeFormData}
                  value={formState.CampaignLocation}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Description of Campaign Materials Used"
                  variant="outlined"
                  name="DescriptionofCampaignMaterials"
                  onChange={handleChangeFormData}
                  value={formState.DescriptionofCampaignMaterials}
                  size="small"
                  fullWidth
                  margin="normal"
                />
                <div className="buttonPerivous">
                  <Button onClick={handlePerivous} variant="contained">
                    Perivous
                  </Button>
                </div>
              </div>
              <div className="rightbox">
                <center className="spacing">
                  <input
                    name="CampaignMaterialExample"
                    onChange={handleFile}
                    accept="doc/*"
                    value={formState.CampaignMaterialExample}
                    id="CME"
                    type="file"
                  ></input>
                  <label for="CME">Upload Campaign Material Example</label>
                </center>
                <InputLabel id="MV">
                  Was campaign material validated or pre-tested?
                </InputLabel>
                <Select
                  labelId="MV"
                  value={formState.MaterialsValidated}
                  label="Was campaign material validated or pre-tested?"
                  fullWidth
                  name="MaterialsValidated"
                  size="small"
                  onChange={handleChangeFormData}
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </div>
            </Box>
            <div className="ButtonDiv">
              <center className="buffer">
                <Button variant="contained" onClick={submitData}>
                  Submit
                </Button>
              </center>
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
export default AddProgram;
