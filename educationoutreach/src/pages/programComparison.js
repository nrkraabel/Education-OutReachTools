import React from "react";
import TabPanel from "../components/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Tab.css";
import "./Text.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function ProgramComparison() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="page">
      <h1>Program Comparison page details</h1>
      <div className="panelBoxProgramComparison">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Comparison selector"
              centered={true}
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
          <TabPanel value={value} index={0}>
            Program Purpose & Problem
          </TabPanel>
          <TabPanel value={value} index={1}>
            Target Behavior
          </TabPanel>
          <TabPanel value={value} index={2}>
            Target Audience
          </TabPanel>
          <TabPanel value={value} index={3}>
            Water Quality
          </TabPanel>
          <TabPanel value={value} index={4}>
            Situational Analysis
          </TabPanel>
          <TabPanel value={value} index={5}>
            Community Impact
          </TabPanel>
          <TabPanel value={value} index={6}>
            Resources
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default ProgramComparison;
