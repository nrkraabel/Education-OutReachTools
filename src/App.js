import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About/About";
import AddCampaign from "./pages/AddCampaign/AddCampaign";
import EvaluationTools from "./pages/EvaluationTools";
import SearchCampaigns from "./pages/SearchCampaign/SearchCampaigns";
import CampaignSelection from "./pages/CampaignSelection/CampaignSelection";
import OtherResources from "./pages/OtherResources";
import Navbar from "./components/Navbar";

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
      </Routes>
    </Router>
  );
}

export default App;
