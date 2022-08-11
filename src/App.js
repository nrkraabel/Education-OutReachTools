import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About/About";
import AddCampaign from "./pages/AddCampaign/AddCampaign";
import EvaluationTools from "./pages/evaluationTools";
import SearchCampaigns from "./pages/SearchCampaign/SearchCampaigns";
import CampaignSelection from "./pages/CampaignSelection/CampaignSelection";
import OtherResources from "./pages/otherResources";
import Navbar from "./components/Navbar";
import CampaignDetails from "./pages/CampaignDetails/CampaignDetailsTemplate";
import EducationChangesResidentialNonpoint from "./pages/CampaignDetails/EducationChangesResidentialNonpoint";
import Example2 from "./pages/CampaignDetails/IdentificationInduction";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-campaign" element={<AddCampaign />} />
        <Route path="/search-campaigns" element={<SearchCampaigns />} />
        <Route path="/evaluation-tools" element={<EvaluationTools />} />
        <Route path="/campaign-selection" element={<CampaignSelection />} />
        <Route path="/other-resources" element={<OtherResources />} />
        <Route path="/about" element={<About />} />
        <Route path="/campaign-details" element={<CampaignDetails />} />
        <Route
          path="/campaign-details-example"
          element={<EducationChangesResidentialNonpoint />}
        />
        <Route path="/campaign-details-example2" element={<Example2 />} />
      </Routes>
    </Router>
  );
}

export default App;
