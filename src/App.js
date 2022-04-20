import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import AddProgram from "./pages/addProgram";
import EvaluationTools from "./pages/evaluationTools";
import SearchPrograms from "./pages/searchPrograms";
import ProgramComparison from "./pages/programComparison";
import OtherResources from "./pages/otherResources";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-program" element={<AddProgram />} />
        <Route path="/search-programs" element={<SearchPrograms />} />
        <Route path="/evaluation-tools" element={<EvaluationTools />} />
        <Route path="/program-comparison" element={<ProgramComparison />} />
        <Route path="/other-resources" element={<OtherResources />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
