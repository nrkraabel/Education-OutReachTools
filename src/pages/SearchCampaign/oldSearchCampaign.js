import React, { useState, useEffect, useRef } from "react";
import "../Text.css";
import "./SearchCampaignStyles.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { fireData } from "../../firebase";
import Fuse from "fuse.js";
import { get, child } from "firebase/database";
import Button from "@mui/material/Button";
import SearchCard from "../../components/SearchCard/SearchCard";
import { Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";

function intersect(a, b) {
  var combineReturn = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i].refIndex === b[j].refIndex) {
        combineReturn.push(a[i]);
        break;
      }
    }
  }
  return combineReturn;
}
function SearchCampaigns() {
  const [searchResults, setSearchResults] = useState(null);

  //Page effect scroll to results
  const messagesStartRef = useRef(null);

  const scrollToResults = () => {
    if (messagesStartRef.current != null) {
      messagesStartRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  //Intial data read
  const [Studies, setStudies] = useState([]);
  useEffect(() => {
    let dataRef = fireData;
    get(child(dataRef, "/")).then((snapshot) => {
      var Study = snapshot.val();
      setStudies(Study);
    });
  }, []);
  //consts for filters
  const [targetAudienceFilter, setTargetAudienceFilter] = useState("");
  const [targetPollutantFilter, setTargetPollutantFilter] = useState("");
  const [researchInstrumentsFilter, setResearchInstrumentsFilter] = useState(
    ""
  );
  const [researchQualityFilter, setResearchQualityFilter] = useState("");
  const [enviromentalJusticeFilter, setEnviromentalJusticeFilter] = useState(
    ""
  );
  const [locationFilter, setLocationFilter] = useState("");

  //Handle functions for the filters
  function handleTargetPollutantFilter(event) {
    if (event.target.value === targetPollutantFilter) {
      setTargetPollutantFilter("");
    } else {
      setTargetPollutantFilter(event.target.value);
    }
  }
  function handleTargetAudienceFilter(event) {
    if (event.target.value === targetAudienceFilter) {
      setTargetAudienceFilter("");
    } else {
      setTargetAudienceFilter(event.target.value);
    }
  }
  function handleResearchInstrumentsFilter(event) {
    if (event.target.value === researchInstrumentsFilter) {
      setResearchInstrumentsFilter("");
    } else {
      setResearchInstrumentsFilter(event.target.value);
    }
  }
  function handleResearchQualityFilter(event) {
    if (event.target.value === researchQualityFilter) {
      setResearchQualityFilter("");
    } else {
      setResearchQualityFilter(event.target.value);
    }
  }
  function handleEnviromentalJusticeFilter(event) {
    if (event.target.value === enviromentalJusticeFilter) {
      setEnviromentalJusticeFilter("");
    } else {
      setEnviromentalJusticeFilter(event.target.value);
    }
  }
  function handleLocationFilter(event) {
    setLocationFilter(event.target.value);
  }

  const [SearchOccured, setSearchOccured] = useState(false);
  //Filter Search
  const handleFilter = () => {
    setSearchOccured(true);
    //nothing selected
    if (
      targetPollutantFilter +
        targetAudienceFilter +
        researchInstrumentsFilter +
        researchQualityFilter +
        enviromentalJusticeFilter +
        locationFilter ===
      ""
    ) {
      return;
    }
    if (targetPollutantFilter != "") {
      const options = {
        includeScore: false,
        keys: [targetPollutantFilter],
        threshold: 0,
      };
    }
    // if (filterChoices.CampaignLocation != "" && keys.length === 1) {
    //   result = fuse.search("=" + filterChoices.CampaignLocation);
    // } else if (filterChoices.CampaignLocation != "") {
    //   var NewSearch = [];
    //   var locations = fuse.search("=" + filterChoices.CampaignLocation);
    //   result.forEach((element) => {
    //     locations.forEach((location) => {
    //       if (location.item.Title === element.item.Title) {
    //         NewSearch.push(element);
    //       }
    //     });
    //   });
    //   result = NewSearch;
    // }
    // setSearchResults(result);
    // if (result != null) {
    //   scrollToResults();
    // }
  };

  //Text search portion
  const [text, setText] = useState("");
  const [resultsText, setResultsText] = useState(true);
  const onChangeText = (evt) => setText(evt.target.value);
  const Search = (e) => {
    setSearchOccured(true);
    const options = {
      includeScore: false,
      keys: ["Title", "Keywords"],
      threshold: 0.3,
    };
    var fuse = new Fuse(Studies, options);
    const result = fuse.search(text);
    setSearchResults(result);
    if (result.length != 0) {
      setResultsText(true);
      scrollToResults();
    } else {
      setResultsText(false);
    }
    console.log(searchResults);
  };

  return (
    <div className="page">
      <center>
        <div className="Searchbar">
          <h2>Search Via Keywords</h2>
          <TextField
            onChange={onChangeText}
            placeholder="Search...."
            sx={{ width: "70ch" }}
            size="medium"
            value={text}
          />
          <IconButton aria-label="Search" onClick={Search}>
            <SearchIcon sx={{ fontSize: 48 }} color="primary" />
          </IconButton>
        </div>
      </center>
      <br />
      <div className="filterTitle">
        <b>FILTER BY CATAGORY:</b>
      </div>
      <div className="BlueSquare">
        <div className="TargetPollutant">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">TARGET POLLUTANT:</FormLabel>
            <RadioGroup value={targetPollutantFilter}>
              <FormControlLabel
                value="poll_LID"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="LID/Inflitration"
              />
              <FormControlLabel
                value="poll_metal"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Metals"
              />
              <FormControlLabel
                value="poll_nutrient"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Nutrients"
              />
              <FormControlLabel
                value="poll_oil"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Oils"
              />
              <FormControlLabel
                value="poll_pathogen"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Pathogens (Fecal Coliforms, Bacteria, E. Coli)"
              />
              <FormControlLabel
                value="poll_sediment"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Sediment"
              />
              <FormControlLabel
                value="poll_toxics"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Toxic Chemicals (Pesticide, 
                  Household Cleaner, etc.)"
              />
              <FormControlLabel
                value="poll_trash"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Trash"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="TargetAudience">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">TARGET AUDIENCE:</FormLabel>
            <RadioGroup value={targetAudienceFilter}>
              <FormControlLabel
                value="aud_busin"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Businesses"
              />
              <FormControlLabel
                value="aud_contract"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Contractors"
              />
              <FormControlLabel
                value="aud_develop"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Developers"
              />
              <FormControlLabel
                value="aud_eng"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Engineers"
              />
              <FormControlLabel
                value="aud_general"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="General Public"
              />
              <FormControlLabel
                value="aud_planner"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Land Use Planners"
              />
              <FormControlLabel
                value="aud_landscape"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Landscapers"
              />
              <FormControlLabel
                value="aud_mobilebus"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Mobile Businesses"
              />
              <FormControlLabel
                value="aud_propmgr"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Property Managers"
              />
              <FormControlLabel
                value="aud_resident"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Residents"
              />
              <FormControlLabel
                value="aud_kids"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="School-Age Children"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="ResearchInstruments">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">RESEARCH INSTRUMENTS:</FormLabel>
            <RadioGroup value={researchInstrumentsFilter}>
              <FormControlLabel
                value="instr_focus"
                control={<Radio onClick={handleResearchInstrumentsFilter} />}
                label="Focus Groups"
              />
              <FormControlLabel
                value="instr_interv"
                control={<Radio onClick={handleResearchInstrumentsFilter} />}
                label="Interviews"
              />
              <FormControlLabel
                value="instr_obser"
                control={<Radio onClick={handleResearchInstrumentsFilter} />}
                label="Observations"
              />
              <FormControlLabel
                value="instr_pics"
                control={<Radio onClick={handleResearchInstrumentsFilter} />}
                label="Pictures/Videos"
              />
              <FormControlLabel
                value="instr_survey"
                control={<Radio onClick={handleResearchInstrumentsFilter} />}
                label="Surveys"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">RESEARCH QUALITY RANKING:</FormLabel>
            <RadioGroup value={researchQualityFilter}>
              {/* Fix spelling in database */}
              <FormControlLabel
                value="Examplary"
                control={<Radio onClick={handleResearchQualityFilter} />}
                label="Exemplary"
              />
              <FormControlLabel
                value="Good"
                control={<Radio onClick={handleResearchQualityFilter} />}
                label="Good"
              />
              <FormControlLabel
                value="Fair"
                control={<Radio onClick={handleResearchQualityFilter} />}
                label="Fair"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="ProgramLocation">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">CAMPAIGN STATE:</FormLabel>
            <FormGroup>
              <Select
                value={locationFilter}
                fullWidth
                name="CampaignLocation"
                onChange={handleLocationFilter}
              >
                <MenuItem value={"Alabama"}>Alabama</MenuItem>
                <MenuItem value={"Alaska"}>Alaska</MenuItem>
                <MenuItem value={"Arizona"}>Arizona</MenuItem>
                <MenuItem value={"Arkansas"}>Arkansas</MenuItem>
                <MenuItem value={"California"}>California</MenuItem>
                <MenuItem value={"Colorado"}>Colorado</MenuItem>
                <MenuItem value={"Connecticut"}>Connecticut</MenuItem>
                <MenuItem value={"Delaware"}>Delaware</MenuItem>
                <MenuItem value={"Florida"}>Florida</MenuItem>
                <MenuItem value={"Georgia"}>Georgia</MenuItem>
                <MenuItem value={"Hawaii"}>Hawaii</MenuItem>
                <MenuItem value={"Idaho"}>Idaho</MenuItem>
                <MenuItem value={"Illinois"}>Illinois</MenuItem>
                <MenuItem value={"Indiana"}>Indiana</MenuItem>
                <MenuItem value={"Iowa"}>Iowa</MenuItem>
                <MenuItem value={"Kansas"}>Kansas</MenuItem>
                <MenuItem value={"Kentucky"}>Kentucky</MenuItem>
                <MenuItem value={"Louisiana"}>Louisiana</MenuItem>
                <MenuItem value={"Maine"}>Maine</MenuItem>
                <MenuItem value={"Maryland"}>Maryland</MenuItem>
                <MenuItem value={"Massachusetts"}>Massachusetts</MenuItem>
                <MenuItem value={"Michigan"}>Michigan</MenuItem>
                <MenuItem value={"Minnesota"}>Minnesota</MenuItem>
                <MenuItem value={"Mississippi"}>Mississippi</MenuItem>
                <MenuItem value={"Missouri"}>Missouri</MenuItem>
                <MenuItem value={"Montana"}>Montana</MenuItem>
                <MenuItem value={"Nebraska"}>Nebraska</MenuItem>
                <MenuItem value={"Nevada"}>Nevada</MenuItem>
                <MenuItem value={"New Hampshire"}>New Hampshire</MenuItem>
                <MenuItem value={"New Jersey"}>New Jersey</MenuItem>
                <MenuItem value={"New Mexico"}>New Mexico</MenuItem>
                <MenuItem value={"New York"}>New York</MenuItem>
                <MenuItem value={"North Carolina"}>North Carolina</MenuItem>
                <MenuItem value={"North Dakota"}>North Dakota</MenuItem>
                <MenuItem value={"Ohio"}>Ohio</MenuItem>
                <MenuItem value={"Oklahoma"}>Oklahoma</MenuItem>
                <MenuItem value={"Oregon"}>Oregon</MenuItem>
                <MenuItem value={"Pennsylvania"}>Pennsylvania</MenuItem>
                <MenuItem value={"Rhode Island"}>Rhode Island</MenuItem>
                <MenuItem value={"South Carolina"}>South Carolina</MenuItem>
                <MenuItem value={"South Dakota"}>South Dakota</MenuItem>
                <MenuItem value={"Tennessee"}>Tennessee</MenuItem>
                <MenuItem value={"Texas"}>Texas</MenuItem>
                <MenuItem value={"Utah"}>Utah</MenuItem>
                <MenuItem value={"Vermont"}>Vermont</MenuItem>
                <MenuItem value={"Virginia"}>Virginia</MenuItem>
                <MenuItem value={"Washington"}>Washington</MenuItem>
                <MenuItem value={"West Virginia"}>West Virginia</MenuItem>
                <MenuItem value={"Wisconsin"}>Wisconsin</MenuItem>
                <MenuItem value={"Wyoming"}>Wyoming</MenuItem>
              </Select>
            </FormGroup>
          </FormControl>
          <div className="AddressEnvironmental">
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">
                Addresses Environmental Justice Concerns
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="envjust"
                      onClick={handleEnviromentalJusticeFilter}
                      name="EnvJustice"
                    />
                  }
                  label="Addresses Concerns"
                />
              </FormGroup>
            </FormControl>
          </div>
          <center className="FilterButton">
            <Button
              variant="contained"
              size="medium"
              onClick={handleFilter}
              endIcon={<SearchIcon />}
            >
              Search By Filters
            </Button>
          </center>
        </div>
      </div>
      {searchResults == null && SearchOccured && (
        <center>
          <h3>No Results.</h3>
        </center>
      )}
      {searchResults != null && searchResults[0] != null && (
        <div ref={messagesStartRef}>
          <div className="Results">
            {searchResults &&
              searchResults.map((result) => (
                <div className="ResultInteriorBox">
                  <SearchCard study={result.item} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchCampaigns;
