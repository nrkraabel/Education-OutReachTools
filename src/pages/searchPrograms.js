import React, { useState, useEffect } from "react";
import "./Text.css";
import "./searchProgramStyles.css";
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
import { fireData } from "../firebase";
import Fuse from "fuse.js";
import { get, child } from "firebase/database";

function SearchPrograms() {
  //Deals with search results
  const [searchResults, setSearchResults] = useState(null);
  const options = {
    includeScore: false,
    keys: ["Authors", "Title", "Year"],
  };
  const [Studies, setStudies] = useState([]);
  useEffect(() => {
    let dataRef = fireData;
    get(child(dataRef, "/")).then((snapshot) => {
      var Study = snapshot.val();
      setStudies(Study);
    });
  }, []);

  console.log(Studies.FilePath);
  console.log(Studies);
  const fuse = new Fuse(Studies, options);
  const [filterChoices, setFilterChoices] = useState({
    //target Audience Filters
    GeneralPublic: false,
    SchoolAgeChildren: false,
    Businesses: false,
    Engineers: false,
    Contractors: false,
    Developers: false,
    Planners: false,
    Residents: false,
    Landscapers: false,
    PropertyManagers: false,
    DevelopmentReviewStaff: false,
    //Target Pollutant Filters
    Pathogens: false,
    Nutrients: false,
    Metals: false,
    Oils: false,
    Sediment: false,
    Trash: false,
    ToxicChemicals: false,
    LID: false,
    Infiltration: false,
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
    NotRanked: false,
    //Program Location filter
    ProgramLocation: "",
  });

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
    const result = fuse.search(text);
    setSearchResults(result);
    console.log(result);
  };
  return (
    <div className="page">
      <center>
        <div className="Searchbar">
          <TextField
            onChange={onChangeText}
            placeholder="Search Program...."
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
        <div className="TargetAudience">
          <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
            <FormLabel component="legend">TARGET AUDIENCE:</FormLabel>
            <FormGroup>
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
                    checked={filterChoices.SchoolAgeChildren}
                    onChange={handleChange}
                    name="SchoolAgeChildren"
                  />
                }
                label="School-Age Children"
              />
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
                    checked={filterChoices.Planners}
                    onChange={handleChange}
                    name="Planners"
                  />
                }
                label="Planners"
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
                    checked={filterChoices.DevelopmentReviewStaff}
                    onChange={handleChange}
                    name="DevelopmentReviewStaff"
                  />
                }
                label="Development Review Staff"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="TargetPollutant">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">TARGET POLLUTANT:</FormLabel>
            <FormGroup>
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
                    checked={filterChoices.Trash}
                    onChange={handleChange}
                    name="Trash"
                  />
                }
                label="Trash"
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
                    checked={filterChoices.LID}
                    onChange={handleChange}
                    name="LID"
                  />
                }
                label="LID"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.Infiltration}
                    onChange={handleChange}
                    name="Infiltration"
                  />
                }
                label="Infiltration"
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
                    checked={filterChoices.Surveys}
                    onChange={handleChange}
                    name="Surveys"
                  />
                }
                label="Surveys"
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
                    checked={filterChoices.PicturesVideos}
                    onChange={handleChange}
                    name="PicturesVideos"
                  />
                }
                label="Pictures/Videos"
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
                label="Examplary"
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterChoices.NotRanked}
                    onChange={handleChange}
                    name="NotRanked"
                  />
                }
                label="N/A (not yet ranked)"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="ProgramLocation">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">PROGRAM STATE:</FormLabel>
            <FormGroup>
              <Select
                value={filterChoices.ProgramLocation}
                fullWidth
                name="ProgramLocation"
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
        </div>
      </div>
      {searchResults == null && Studies.length > 0 && (
        <div className="Results">
          <div className="ResultInteriorBox">
            <h4>{Studies[0].Title}</h4>
            <a href={Studies[0].FilePath} target="_blank">
              Click for PDF
            </a>
          </div>
          <div className="ResultInteriorBox">
            <h4>{Studies[1].Title}</h4>
            <a href={Studies[1].FilePath} target="_blank">
              Click for PDF
            </a>
          </div>
          <div className="ResultInteriorBox">
            <h4>{Studies[2].Title}</h4>
            <a href={Studies[2].FilePath} target="_blank">
              Click for PDF
            </a>
          </div>
          <div className="ResultInteriorBox">
            <h4>{Studies[3].Title}</h4>
            <a href={Studies[3].FilePath} target="_blank">
              Click for PDF
            </a>
          </div>
          <div className="ResultInteriorBox">
            <h4>{Studies[4].Title}</h4>
            <a href={Studies[4].FilePath} target="_blank">
              Click for PDF
            </a>
          </div>
        </div>
      )}
      {searchResults != null && searchResults[0] != null && (
        <div className="Results">
          <div className="ResultInteriorBox">
            <h4>{searchResults[0].item.Title}</h4>
          </div>
          <div className="ResultInteriorBox">
            <h4>{searchResults[1].item.Title}</h4>
          </div>
          <div className="ResultInteriorBox">
            <h4>{searchResults[2].item.Title}</h4>
          </div>
          <div className="ResultInteriorBox">
            <h4>{searchResults[3].item.Title}</h4>
          </div>
          <div className="ResultInteriorBox">
            <h4>{searchResults[4].item.Title}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPrograms;
