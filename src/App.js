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
import AlachuaCounty2009 from "./pages/CampaignDetails/AlachuaCounty2009";
import Bennett2017 from "./pages/CampaignDetails/Bennett2017";
import Bos2015 from "./pages/CampaignDetails/Bos2015";
import Boulet2017 from "./pages/CampaignDetails/Boulet2017";
import Branom2015 from "./pages/CampaignDetails/Branom-Zwick2015";
import Branom2019 from "./pages/CampaignDetails/Branom-Zwick2019";
import Branom2021 from "./pages/CampaignDetails/Branom-Zwick2021";
import Brehm from "./pages/CampaignDetails/Brehm";
import ChesapeakeBay2005 from "./pages/CampaignDetails/ChesapeakeBay2005";
import CityOfDavis from "./pages/CampaignDetails/CityOfDavis";
import CityOfKirkland2020 from "./pages/CampaignDetails/CityOfKirkland2020";
import CityOfShoreline2020 from "./pages/CampaignDetails/CityOfShoreline2020";
import CityOfTallahasse2011 from "./pages/CampaignDetails/CityOfTallahasse2011";
import ClallamCounty2014 from "./pages/CampaignDetails/ClallamCounty2014";
import CumberLandConservationDistrict2018 from "./pages/CampaignDetails/CumberLandConservationDistrict2018";
import Cunningham2011 from "./pages/CampaignDetails/Cunningham2011";
import Dietz2004 from "./pages/CampaignDetails/Dietz2004";
import Downs2011 from "./pages/CampaignDetails/Downs2011";
import Eckman2013 from "./pages/CampaignDetails/Eckman2013";
import FauntleroyCouncil2008 from "./pages/CampaignDetails/FauntleroyCouncil2008";
import FortinConsulting2020 from "./pages/CampaignDetails/FortinConsulting2020";
import Franz2000 from "./pages/CampaignDetails/Franz2000";
import Frenzl2011 from "./pages/CampaignDetails/Frenzl2011";
import Green2012 from "./pages/CampaignDetails/Green2012";
import Gronder from "./pages/CampaignDetails/Gronder";
import Guzman2018 from "./pages/CampaignDetails/Guzman2018";
import Hale2010 from "./pages/CampaignDetails/Hale2010";
import Hughes2009 from "./pages/CampaignDetails/Hughes2009";
import Hutton2014 from "./pages/CampaignDetails/Hutton2014";
import Kassirer2004A from "./pages/CampaignDetails/Kassirer2004A";
import Kassirer2004B from "./pages/CampaignDetails/Kassirer2004B";
import Kassirer2004C from "./pages/CampaignDetails/Kassirer2004C";
import Kassirer2004D from "./pages/CampaignDetails/Kassirer2004D";
import Kassirer2004E from "./pages/CampaignDetails/Kassirer2004E";
import Kassirer2004F from "./pages/CampaignDetails/Kassirer2004F";
import Kassirer2004G from "./pages/CampaignDetails/Kassirer2004G";
import Kassirer2004H from "./pages/CampaignDetails/Kassirer2004H";
import Morey2018 from "./pages/CampaignDetails/Morey2018";
import Murray2008 from "./pages/CampaignDetails/Murray2008";
import OHara from "./pages/CampaignDetails/O'Hara";
import OgilvyPublicRelations2004 from "./pages/CampaignDetails/OgilvyPublicRelations2004";
import PMRA2004 from "./pages/CampaignDetails/PMRA2004";
import Pour2009 from "./pages/CampaignDetails/Pour2009";
import RedwoodRiver1995 from "./pages/CampaignDetails/RedwoodRiver1995";
import ResearchNorthWest2020 from "./pages/CampaignDetails/ResearchNorthWest2020";
import Riggs2010 from "./pages/CampaignDetails/Riggs2010";
import Senecal from "./pages/CampaignDetails/Senecal-Albrecht2007";
import Shaw2020 from "./pages/CampaignDetails/Shaw2020";
import Shay2011 from "./pages/CampaignDetails/Shay2011";
import StateWaterResources2004 from "./pages/CampaignDetails/StateWaterResources2004";
import Suzanne2016 from "./pages/CampaignDetails/Suzanne2016";
import Taylor2007 from "./pages/CampaignDetails/Taylor2007";
import WaterWords2021 from "./pages/CampaignDetails/WaterWords2021";
import Winquist2006 from "./pages/CampaignDetails/Winquist2006";
import Woodward2009 from "./pages/CampaignDetails/Woodward2009";
import Zolik1979 from "./pages/CampaignDetails/Zolik1979";

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
        <Route path="/Dietz2004" element={<Dietz2004 />} />
        <Route path="/Green2012" element={<Green2012 />} />
        <Route path="/Hale2010" element={<Hale2010 />} />
        <Route path="/Woodward2009" element={<Woodward2009 />} />
        <Route path="/Boulet2017" element={<Boulet2017 />} />
        <Route path="/Taylor2007" element={<Taylor2007 />} />
        <Route
          path="/ResearchNorthWest2020"
          element={<ResearchNorthWest2020 />}
        />
        <Route path="/Bennett2017" element={<Bennett2017 />} />
        <Route
          path="/CumberLandConservationDistrict2018"
          element={<CumberLandConservationDistrict2018 />}
        />
        <Route path="/WaterWords2021" element={<WaterWords2021 />} />
        <Route path="/Suzanne2016" element={<Suzanne2016 />} />
        <Route
          path="/FortinConsulting2020"
          element={<FortinConsulting2020 />}
        />
        <Route path="/CityOfShoreline2020" element={<CityOfShoreline2020 />} />
        <Route path="/Branom-Zwick2021" element={<Branom2021 />} />
        <Route path="/Senecal-Albrecht2007" element={<Senecal />} />
        <Route path="/ChesapeakeBay2005" element={<ChesapeakeBay2005 />} />
        <Route path="/CityOfDavis" element={<CityOfDavis />} />
        <Route
          path="/OgilvyPublicRelations2004"
          element={<OgilvyPublicRelations2004 />}
        />
        <Route
          path="/FauntleroyCouncil2008"
          element={<FauntleroyCouncil2008 />}
        />
        <Route path="/AlachuaCounty2009" element={<AlachuaCounty2009 />} />
        <Route path="/Shay2011" element={<Shay2011 />} />
        <Route path="/Hutton2014" element={<Hutton2014 />} />
        <Route
          path="/StateWaterResources2004"
          element={<StateWaterResources2004 />}
        />
        <Route path="/Downs2011" element={<Downs2011 />} />
        <Route path="/Frenzl2011" element={<Frenzl2011 />} />
        <Route path="/ClallamCounty2014" element={<ClallamCounty2014 />} />
        <Route path="/Franz2000" element={<Franz2000 />} />
        <Route path="/PMRA2004" element={<PMRA2004 />} />
        <Route path="/Brehm" element={<Brehm />} />
        <Route path="/O'Hara" element={<OHara />} />
        <Route path="/Cunningham2011" element={<Cunningham2011 />} />
        <Route path="/Gronder" element={<Gronder />} />
        <Route
          path="/CityOfTallahasse2011"
          element={<CityOfTallahasse2011 />}
        />
        <Route path="/Branom-Zwick2015" element={<Branom2015 />} />
        <Route path="/Branom-Zwick2019" element={<Branom2019 />} />
        <Route path="/Kassirer2004A" element={<Kassirer2004A />} />
        <Route path="/Kassirer2004B" element={<Kassirer2004B />} />
        <Route path="/Kassirer2004C" element={<Kassirer2004C />} />
        <Route path="/Kassirer2004D" element={<Kassirer2004D />} />
        <Route path="/Kassirer2004E" element={<Kassirer2004E />} />
        <Route path="/Kassirer2004F" element={<Kassirer2004F />} />
        <Route path="/Kassirer2004G" element={<Kassirer2004G />} />
        <Route path="/Kassirer2004H" element={<Kassirer2004H />} />
        <Route path="/Shaw2020" element={<Shaw2020 />} />
        <Route path="/Zolik1979" element={<Zolik1979 />} />
        <Route path="/RedwoodRiver1995" element={<RedwoodRiver1995 />} />
        <Route path="/Murray2008" element={<Murray2008 />} />
        <Route path="/Eckman2013" element={<Eckman2013 />} />
        <Route path="/Pour2009" element={<Pour2009 />} />
        <Route path="/CityOfKirkland2020" element={<CityOfKirkland2020 />} />
        <Route path="/Riggs2010" element={<Riggs2010 />} />
        <Route path="/Morey2018" element={<Morey2018 />} />
        <Route path="/Bos2015" element={<Bos2015 />} />
        <Route path="/Guzman2018" element={<Guzman2018 />} />
        <Route path="/Winquist2006" element={<Winquist2006 />} />
        <Route path="/Hughes2009" element={<Hughes2009 />} />
      </Routes>
    </Router>
  );
}

export default App;
