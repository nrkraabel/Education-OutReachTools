import React from "react";
import TabPanel from "../components/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Tab.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function AddProgram() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="page">
      <h1>Add Program page details</h1>
      <div className="panelBoxAddProgram">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Add Program selector"
              centered={true}
            >
              <Tab label="General Background" {...a11yProps(0)} />
              <Tab label="Study Information" {...a11yProps(1)} />
              <Tab label="Data Collection" {...a11yProps(2)} />
              <Tab label="Data Verification" {...a11yProps(3)} />
              <Tab label="Campaign Materials & Instruments" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div>
              <button>Test responsiveness</button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Study Information
          </TabPanel>
          <TabPanel value={value} index={2}>
            Data Collection
          </TabPanel>
          <TabPanel value={value} index={3}>
            Data Verification
          </TabPanel>
          <TabPanel value={value} index={4}>
            Campaign Materials & Instruments
            <button>Test submit</button>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
export default AddProgram;
