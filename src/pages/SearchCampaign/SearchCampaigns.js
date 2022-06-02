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

function SearchCampaigns() {
  //Deals with search results
  const [searchResults, setSearchResults] = useState(null);

  const messagesStartRef = useRef(null)

  const scrollToResults = () => {
    messagesStartRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const [Studies, setStudies] = useState([]);
  useEffect(() => {
    let dataRef = fireData;
    get(child(dataRef, "/")).then((snapshot) => {
      var Study = snapshot.val();
      setStudies(Study);
    });
  }, []);
  const [filterChoices, setFilterChoices] = useState({
    //target Audience Filters
    GeneralPublic: false,
    SchoolAgeChildren: false,
    Businesses: false,
    Engineers: false,
    Contractors: false,
    Developers: false,
    LandUsePlanners: false,
    Residents: false,
    Landscapers: false,
    PropertyManagers: false,
    MobileBusinesses: false,
    //Target Pollutant Filters
    Pathogens: false,
    Nutrients: false,
    Metals: false,
    Oils: false,
    Sediment: false,
    Trash: false,
    ToxicChemicals: false,
    LIDInflitration: false,
    //Research Instruments filters:
    Surveys: false,
    Observations: false,
    Interviews: false,
    FocusGroups: false,
    PicturesVideos: false,
    Other: false,
    //Research Quality Ranking filters:
    Examplary: false,
    Good: false,
    Fair: false,
    //NotRanked: false,
    //Program Location filter
    CampaignLocation: "",
    //Enviromental Justice
    EnvJustice: false,
  });

  const handleFilter = () => {
    var keys = [];
    var location = [];
    //Target Audience
    if (filterChoices.GeneralPublic) {
      keys.push("aud_general");
    }
    if (filterChoices.SchoolAgeChildren) {
      keys.push("aud_kids");
    }
    if (filterChoices.Businesses) {
      keys.push("aud_busin");
    }
    if (filterChoices.Engineers) {
      keys.push("aud_eng");
    }
    if (filterChoices.Contractors) {
      keys.push("aud_contract");
    }
    if (filterChoices.Developers) {
      keys.push("aud_develop");
    }
    if (filterChoices.LandUsePlanners) {
      keys.push("aud_planner");
    }
    if (filterChoices.Residents) {
      keys.push("aud_resident");
    }
    if (filterChoices.Landscapers) {
      keys.push("aud_landscape");
    }
    if (filterChoices.PropertyManagers) {
      keys.push("aud_propmgr");
    }
    if (filterChoices.MobileBusinesses) {
      keys.push("aud_mobilebus");
    }
    //Pollutant
    if (filterChoices.Pathogens) {
      keys.push("poll_pathogen");
    }
    if (filterChoices.Nutrients) {
      keys.push("poll_nutrient");
    }
    if (filterChoices.Metals) {
      keys.push("poll_metal");
    }
    if (filterChoices.Oils) {
      keys.push("poll_oil");
    }
    if (filterChoices.Sediment) {
      keys.push("poll_sediment");
    }
    if (filterChoices.Trash) {
      keys.push("poll_trash");
    }
    if (filterChoices.ToxicChemicals) {
      keys.push("poll_toxics");
    }
    if (filterChoices.LIDInflitration) {
      keys.push("poll_LID");
      keys.push("poll_Infil");
    }
    //instrustments
    if (filterChoices.Surveys) {
      keys.push("instr_survey");
    }
    if (filterChoices.Observations) {
      keys.push("instr_obser");
    }
    if (filterChoices.Interviews) {
      keys.push("instr_interv");
    }
    if (filterChoices.FocusGroups) {
      keys.push("instr_focus");
    }
    if (filterChoices.PicturesVideos) {
      keys.push("instr_pics");
    }
    //location
    if (filterChoices.CampaignLocation != "") {
      keys.push("Where");
    }
    //Enviromental Justice
    if (filterChoices.EnvJustice) {
      keys.push("envjust");
    }
    //Rating
    if (filterChoices.Examplary) {
      keys.push("Examplary");
    }
    if (filterChoices.Good) {
      keys.push("Good");
    }
    if (filterChoices.Fair) {
      keys.push("Fair");
    }
    var options = {
      includeScore: false,
      keys: keys,
    };
    var fuse = new Fuse(Studies, options);

    var result = fuse.search("=1");
    if (filterChoices.CampaignLocation != "" && keys.length === 1) {
      result = fuse.search("=" + filterChoices.CampaignLocation);
    } else if (filterChoices.CampaignLocation != "") {
      var NewSearch = [];
      var locations = fuse.search("=" + filterChoices.CampaignLocation);
      result.forEach((element) => {
        locations.forEach((location) => {
          if (location.item.Title === element.item.Title) {
            NewSearch.push(element);
          }
        });
      });
      result = NewSearch;
    }
    setSearchResults(result);
    scrollToResults();
  };

  const handleChange = (event) => {
    setFilterChoices({
      ...filterChoices,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChangeLocation = (event) => {
    setFilterChoices({
      ...filterChoices,
      [event.target.name]: event.target.value,
    });
  };
  const [text, setText] = useState("");
  const onChangeText = (evt) => setText(evt.target.value);
  const Search = (e) => {
    const options = {
      includeScore: false,
      keys: ["Authors", "Title", "Keywords"],
    };
    var fuse = new Fuse(Studies, options);
    const result = fuse.search(text);
    setSearchResults(result);
    scrollToResults();
  };
  return (
    <div className="page">
      <center>
        <div className="Searchbar">
          <TextField
            onChange={onChangeText}
            placeholder="Search...."
            sx={{ width: "45ch" }}
            size="small"
            value={text}
          />
          <IconButton aria-label="Search" onClick={Search}>
            <SearchIcon sx={{ fontSize: 28 }} color="primary" />
          </IconButton>
        </div>
      </center>
      <div className="filterTitle">
        <b>FILTER BY:</b>
      </div>
      <div className="BlueSquare">
        <div className="TargetPollutant">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">TARGET POLLUTANT:</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.LIDInflitration}
                    onChange={handleChange}
                    name="LIDInflitration"
                  />
                }
                label="LID/Inflitration"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Metals}
                    onChange={handleChange}
                    name="Metals"
                  />
                }
                label="Metals"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Nutrients}
                    onChange={handleChange}
                    name="Nutrients"
                  />
                }
                label="Nutrients"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Oils}
                    onChange={handleChange}
                    name="Oils"
                  />
                }
                label="Oils"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Pathogens}
                    onChange={handleChange}
                    name="Pathogens"
                  />
                }
                label="Pathogens (Fecal Coliforms, Bacteria, E. Coli)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Sediment}
                    onChange={handleChange}
                    name="Sediment"
                  />
                }
                label="Sediment"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.ToxicChemicals}
                    onChange={handleChange}
                    name="ToxicChemicals"
                  />
                }
                label="Toxic Chemicals (Pesticide, 
                  Household Cleaner, etc.)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Trash}
                    onChange={handleChange}
                    name="Trash"
                  />
                }
                label="Trash"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="TargetAudience">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">TARGET AUDIENCE:</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Businesses}
                    onChange={handleChange}
                    name="Businesses"
                  />
                }
                label="Businesses"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Contractors}
                    onChange={handleChange}
                    name="Contractors"
                  />
                }
                label="Contractors"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Developers}
                    onChange={handleChange}
                    name="Developers"
                  />
                }
                label="Developers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Engineers}
                    onChange={handleChange}
                    name="Engineers"
                  />
                }
                label="Engineers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.GeneralPublic}
                    onChange={handleChange}
                    name="GeneralPublic"
                  />
                }
                label="General Public"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.LandUsePlanners}
                    onChange={handleChange}
                    name="LandUsePlanners"
                  />
                }
                label="Land Use Planners"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Landscapers}
                    onChange={handleChange}
                    name="Landscapers"
                  />
                }
                label="Landscapers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.MobileBusinesses}
                    onChange={handleChange}
                    name="MobileBusinesses"
                  />
                }
                label="Mobile Businesses"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.PropertyManagers}
                    onChange={handleChange}
                    name="PropertyManagers"
                  />
                }
                label="Property Managers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Residents}
                    onChange={handleChange}
                    name="Residents"
                  />
                }
                label="Residents"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.SchoolAgeChildren}
                    onChange={handleChange}
                    name="SchoolAgeChildren"
                  />
                }
                label="School-Age Children"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="ResearchInstruments">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">RESEARCH INSTRUMENTS:</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.FocusGroups}
                    onChange={handleChange}
                    name="FocusGroups"
                  />
                }
                label="Focus Groups"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Interviews}
                    onChange={handleChange}
                    name="Interviews"
                  />
                }
                label="Interviews"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Observations}
                    onChange={handleChange}
                    name="Observations"
                  />
                }
                label="Observations"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.PicturesVideos}
                    onChange={handleChange}
                    name="PicturesVideos"
                  />
                }
                label="Pictures/Videos"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Surveys}
                    onChange={handleChange}
                    name="Surveys"
                  />
                }
                label="Surveys"
              />
            </FormGroup>
          </FormControl>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">RESEARCH QUALITY RANKING:</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Exemplary}
                    onChange={handleChange}
                    name="Examplary"
                  />
                }
                label="Exemplary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Good}
                    onChange={handleChange}
                    name="Good"
                  />
                }
                label="Good"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Fair}
                    onChange={handleChange}
                    name="Fair"
                  />
                }
                label="Fair"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="ProgramLocation">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">CAMPAIGN STATE:</FormLabel>
            <FormGroup>
              <Select
                value={filterChoices.CampaignLocation}
                fullWidth
                name="CampaignLocation"
                onChange={handleChangeLocation}
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
                      checked={filterChoices.EnvJustice}
                      onChange={handleChange}
                      name="EnvJustice"
                    />
                  }
                  label="Addresses Concerns"
                />
              </FormGroup>
            </FormControl>
          </div>
          <center className="FilterButton">
            <Button variant="contained" size="medium" onClick={handleFilter}>
              Apply Filters
            </Button>
          </center>
        </div>
      </div>
      {searchResults != null && searchResults[0] != null && (
        <div ref={messagesStartRef}>
          <div className="Results">
            {searchResults && searchResults.map(result =>
              <div className="ResultInteriorBox">
                <SearchCard study={result.item}/>
              </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchCampaigns;
