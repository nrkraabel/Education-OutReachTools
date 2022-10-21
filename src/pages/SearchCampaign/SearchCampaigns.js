import React, { useState, useEffect } from "react";
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
import { AiOutlineFileSearch } from "react-icons/ai";
import SearchCard from "../../components/SearchCard/SearchCard";
import { Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import { BallTriangle } from "react-loader-spinner";

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
  //Intial data read
  const [Studies, setStudies] = useState([]);

  useEffect(() => {
    let dataRef = fireData;
    get(child(dataRef, "/")).then((snapshot) => {
      var Study = snapshot.val();
      setStudies(Study);
    });
  }, []);

  //filters variables
  const [targetAudienceFilter, setTargetAudienceFilter] = useState("");
  const [targetPollutantFilter, setTargetPollutantFilter] = useState("");
  const [researchQualityFilter, setResearchQualityFilter] = useState("");
  const [enviromentalJusticeFilter, setEnviromentalJusticeFilter] = useState(
    ""
  );
  const [locationFilter, setLocationFilter] = useState("");
  //Used in search as the fitler have a delay otherwise
  let tempAudFilter = "";
  let tempPolFilter = "";
  let tempResFilter = "";
  let tempEnvFilter = "";
  let tempLocFilter = "";

  //filter lists
  const [targetAudienceList, setTargetAudienceList] = useState("");
  const [targetPollutantList, setTargetPollutantList] = useState("");
  const [researchQualityList, setResearchQualityList] = useState("");
  const [enviromentalJusticeList, setEnviromentalJusticeList] = useState("");
  const [locationList, setLocationList] = useState("");

  //Handle functions for the filters
  function handleTargetPollutantFilter(event) {
    if (event.target.value === targetPollutantFilter) {
      setTargetPollutantFilter("");
      tempPolFilter = "";
      handleFilterChange(6);
    } else {
      setTargetPollutantFilter(event.target.value);
      tempPolFilter = event.target.value;
      handleFilterChange(1);
    }
  }
  function handleTargetAudienceFilter(event) {
    if (event.target.value === targetAudienceFilter) {
      setTargetAudienceFilter("");
      tempAudFilter = "";
      handleFilterChange(7);
    } else {
      setTargetAudienceFilter(event.target.value);
      tempAudFilter = event.target.value;
      handleFilterChange(2);
    }
  }
  function handleResearchQualityFilter(event) {
    if (event.target.value === researchQualityFilter) {
      setResearchQualityFilter("");
      tempResFilter = "";
      handleFilterChange(8);
    } else {
      setResearchQualityFilter(event.target.value);
      tempResFilter = event.target.value;
      handleFilterChange(3);
    }
  }
  function handleLocationFilter(event) {
    if (event.target.value === "None") {
      setLocationFilter("");
      tempLocFilter = "";
      handleFilterChange(9);
    } else {
      setLocationFilter(event.target.value);
      tempLocFilter = event.target.value;
      handleFilterChange(4);
    }
  }
  function handleEnviromentalJusticeFilter(event) {
    if (event.target.value === enviromentalJusticeFilter) {
      setEnviromentalJusticeFilter("");
      tempEnvFilter = "";
      handleFilterChange(10);
    } else {
      setEnviromentalJusticeFilter(event.target.value);
      tempEnvFilter = event.target.value;
      handleFilterChange(5);
    }
  }

  const [SearchOccured, setSearchOccured] = useState(false);

  const [loading, setLoading] = useState(false);
  //Filter Search

  function handleFilterChange(filterNum) {
    //Creates an indexed search including all studies
    const options1 = {
      includeScore: false,
      keys: ["Title", "Keywords", "Authors"],
      threshold: 10,
    };
    var fuse1 = new Fuse(Studies, options1);
    let completeSearch = fuse1.search("ae");
    if (targetPollutantFilter === "") {
      setTargetPollutantList(completeSearch);
    }
    if (targetAudienceFilter === "") {
      setTargetAudienceList(completeSearch);
    }
    if (researchQualityFilter === "") {
      setResearchQualityList(completeSearch);
    }
    if (locationFilter === "") {
      setLocationList(completeSearch);
    }
    if (enviromentalJusticeFilter === "") {
      setEnviromentalJusticeList(completeSearch);
    }

    if (filterNum === 1) {
      const options = {
        includeScore: false,
        keys: [tempPolFilter],
        threshold: 0.1,
      };
      var fuse = new Fuse(Studies, options);
      let result = fuse.search("1");
      setTargetPollutantList(result);

      setTargetAudienceList((state) => {
        var combinedResult = intersect(result, state);
        setResearchQualityList((state2) => {
          combinedResult = intersect(combinedResult, state2);
          setLocationList((state3) => {
            combinedResult = intersect(combinedResult, state3);
            setEnviromentalJusticeList((state4) => {
              combinedResult = intersect(combinedResult, state4);
              setSearchResults(combinedResult);
              return state4;
            });
            return state3;
          });
          return state2;
        });
        return state;
      });
    }
    if (filterNum === 2) {
      const options = {
        includeScore: false,
        keys: [tempAudFilter],
        threshold: 0.1,
      };
      var fuse = new Fuse(Studies, options);
      const result = fuse.search("1");
      setTargetAudienceList(result);

      setTargetPollutantList((state) => {
        var combinedResult = intersect(result, state);
        setResearchQualityList((state2) => {
          combinedResult = intersect(combinedResult, state2);
          setLocationList((state3) => {
            combinedResult = intersect(combinedResult, state3);
            setEnviromentalJusticeList((state4) => {
              combinedResult = intersect(combinedResult, state4);
              setSearchResults(combinedResult);
              return state4;
            });
            return state3;
          });
          return state2;
        });
        return state;
      });
    }
    if (filterNum === 3) {
      const options = {
        includeScore: false,
        keys: [tempResFilter],
        threshold: 0.1,
      };
      var fuse = new Fuse(Studies, options);
      const result = fuse.search("1");
      setResearchQualityList(result);

      setTargetAudienceList((state) => {
        var combinedResult = intersect(result, state);
        setTargetPollutantList((state2) => {
          combinedResult = intersect(combinedResult, state2);
          setLocationList((state3) => {
            combinedResult = intersect(combinedResult, state3);
            setEnviromentalJusticeList((state4) => {
              combinedResult = intersect(combinedResult, state4);
              setSearchResults(combinedResult);
              return state4;
            });
            return state3;
          });
          return state2;
        });
        return state;
      });
    }
    if (filterNum === 4) {
      const options = {
        includeScore: false,
        keys: ["Where"],
        threshold: 0.3,
      };
      var fuse = new Fuse(Studies, options);
      const result = fuse.search(tempLocFilter);
      setLocationList(result);

      setTargetAudienceList((state) => {
        var combinedResult = intersect(result, state);
        setResearchQualityList((state2) => {
          combinedResult = intersect(combinedResult, state2);
          setTargetPollutantList((state3) => {
            combinedResult = intersect(combinedResult, state3);
            setEnviromentalJusticeList((state4) => {
              combinedResult = intersect(combinedResult, state4);
              setSearchResults(combinedResult);
              return state4;
            });
            return state3;
          });
          return state2;
        });
        return state;
      });
    }
    if (filterNum === 5) {
      const options = {
        includeScore: false,
        keys: [tempEnvFilter],
        threshold: 0.1,
      };
      var fuse = new Fuse(Studies, options);
      const result = fuse.search("1");

      setEnviromentalJusticeList(result);

      setTargetAudienceList((state) => {
        var combinedResult = intersect(result, state);
        setResearchQualityList((state2) => {
          combinedResult = intersect(combinedResult, state2);
          setLocationList((state3) => {
            combinedResult = intersect(combinedResult, state3);
            setTargetPollutantList((state4) => {
              combinedResult = intersect(combinedResult, state4);
              setSearchResults(combinedResult);
              return state4;
            });
            return state3;
          });
          return state2;
        });
        return state;
      });
    }
    if (filterNum === 6) {
      setTargetAudienceList((state2) => {
        setResearchQualityList((state3) => {
          var combinedResult = intersect(state2, state3);
          setLocationList((state4) => {
            combinedResult = intersect(combinedResult, state4);
            setEnviromentalJusticeList((state5) => {
              combinedResult = intersect(combinedResult, state5);
              setSearchResults(combinedResult);
              return state5;
            });
            return state4;
          });
          return state3;
        });
        return state2;
      });
    }
    if (filterNum === 7) {
      setTargetPollutantList((state) => {
        setResearchQualityList((state3) => {
          var combinedResult = intersect(state, state3);
          setLocationList((state4) => {
            combinedResult = intersect(combinedResult, state4);
            setEnviromentalJusticeList((state5) => {
              combinedResult = intersect(combinedResult, state5);
              setSearchResults(combinedResult);
              return state5;
            });
            return state4;
          });
          return state3;
        });
        return state;
      });
    }
    if (filterNum === 8) {
      setTargetPollutantList((state) => {
        setTargetAudienceList((state2) => {
          var combinedResult = intersect(state, state2);
          setLocationList((state4) => {
            combinedResult = intersect(combinedResult, state4);
            setEnviromentalJusticeList((state5) => {
              combinedResult = intersect(combinedResult, state5);
              setSearchResults(combinedResult);
              return state5;
            });
            return state4;
          });
          return state2;
        });
        return state;
      });
    }

    if (filterNum === 9) {
      setTargetPollutantList((state) => {
        setTargetAudienceList((state2) => {
          var combinedResult = intersect(state, state2);
          setResearchQualityList((state3) => {
            combinedResult = intersect(combinedResult, state3);
            setEnviromentalJusticeList((state5) => {
              combinedResult = intersect(combinedResult, state5);
              setSearchResults(combinedResult);
              return state5;
            });
            return state3;
          });
          return state2;
        });
        return state;
      });
    }
    if (filterNum === 10) {
      setTargetPollutantList((state) => {
        setTargetAudienceList((state2) => {
          var combinedResult = intersect(state, state2);
          setResearchQualityList((state3) => {
            combinedResult = intersect(combinedResult, state3);
            setLocationList((state4) => {
              combinedResult = intersect(combinedResult, state4);
              setSearchResults(combinedResult);
              return state4;
            });
            return state3;
          });
          return state2;
        });
        return state;
      });
    }
    setSearchOccured(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

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
    if (text === "") {
      setSearchOccured(false);
      return;
    }
    const result = fuse.search(text);
    setSearchResults(result);
    if (result.length != 0) {
      setResultsText(true);
    } else {
      setResultsText(false);
    }
  };

  return (
    <div className="page">
      <div className="sidbarResults">
        <div className="sideBar">
          <div className="Searchbar">
            <h3>Keyword Search</h3>
            <TextField
              onChange={onChangeText}
              onKeyDown={Search}
              placeholder="Search...."
              sx={{ width: "28ch" }}
              size="small"
              value={text}
              aria-label="Keyword search does not work combine with other search"
            />
            <IconButton aria-label="Search" onClick={Search}>
              <SearchIcon sx={{ fontSize: 30 }} color="primary" />
            </IconButton>
          </div>
          <FormControl sx={{ m: 2 }} variant="standard">
            <FormLabel component="legend">
              <b>TARGET POLLUTANT:</b>
            </FormLabel>
            <RadioGroup value={targetPollutantFilter}>
              <FormControlLabel
                value="poll_LID"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="LID/Inflitration"
                aria-label="Filter by targeted pollutant LID/Inflitration"
              />
              <FormControlLabel
                value="poll_metal"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Metals"
                aria-label="Filter by targeted pollutant Metals"
              />
              <FormControlLabel
                value="poll_nutrient"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Nutrients"
                aria-label="Filter by targeted pollutant Nutrients"
              />
              <FormControlLabel
                value="poll_oil"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Oils"
                aria-label="Filter by targeted pollutant Oils"
              />
              <FormControlLabel
                value="poll_pathogen"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Pathogens (Fecal Coliforms, Bacteria, E. Coli)"
                aria-label="Filter by targeted pollutant Pathogens"
              />
              <FormControlLabel
                value="poll_sediment"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Sediment"
                aria-label="Filter by targeted pollutant Sediment"
              />
              <FormControlLabel
                value="poll_toxics"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Toxic Chemicals (Pesticide, 
                  Household Cleaner, etc.)"
                aria-label="Filter by targeted pollutant Toxic chemicals"
              />
              <FormControlLabel
                value="poll_trash"
                control={<Radio onClick={handleTargetPollutantFilter} />}
                label="Trash"
                aria-label="Filter by targeted pollutant Trash"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 2 }} variant="standard">
            <FormLabel component="legend">
              <b>TARGET AUDIENCE:</b>
            </FormLabel>
            <RadioGroup value={targetAudienceFilter}>
              <FormControlLabel
                value="aud_busin"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Businesses"
                aria-label="Filter by targeted audience Businesses"
              />
              <FormControlLabel
                value="aud_contract"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Contractors"
                aria-label="Filter by targeted audience Contractors"
              />
              <FormControlLabel
                value="aud_develop"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Developers"
                aria-label="Filter by targeted audience Developers"
              />
              <FormControlLabel
                value="aud_eng"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Engineers"
                aria-label="Filter by targeted audience Engineers"
              />
              <FormControlLabel
                value="aud_general"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="General Public"
                aria-label="Filter by targeted audience General Public"
              />
              <FormControlLabel
                value="aud_planner"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Land Use Planners"
                aria-label="Filter by targeted audience Land Use Planners"
              />
              <FormControlLabel
                value="aud_landscape"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Landscapers"
                aria-label="Filter by targeted audience Landscapers"
              />
              <FormControlLabel
                value="aud_mobilebus"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Mobile Businesses"
                aria-label="Filter by targeted audience Mobile Businesses"
              />
              <FormControlLabel
                value="aud_propmgr"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Property Managers"
                aria-label="Filter by targeted audience Property Managers"
              />
              <FormControlLabel
                value="aud_resident"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="Residents"
                aria-label="Filter by targeted audience Residents"
              />
              <FormControlLabel
                value="aud_kids"
                control={<Radio onClick={handleTargetAudienceFilter} />}
                label="School-Age Children"
                aria-label="Filter by targeted audience School-Age Children"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 2 }} variant="standard">
            <FormLabel component="legend">
              <b>RESEARCH QUALITY RANKING:</b>
            </FormLabel>
            <RadioGroup value={researchQualityFilter}>
              <FormControlLabel
                value="Exemplary"
                control={<Radio onClick={handleResearchQualityFilter} />}
                label="Exemplary"
                aria-label="Filter by research quality Exemplary"
              />
              <FormControlLabel
                value="Good"
                control={<Radio onClick={handleResearchQualityFilter} />}
                label="Good"
                aria-label="Filter by research quality Good"
              />
              <FormControlLabel
                value="Fair"
                control={<Radio onClick={handleResearchQualityFilter} />}
                label="Fair"
                aria-label="Filter by research quality Fair"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ m: 2 }} variant="standard">
            <FormLabel component="legend">
              <b>CAMPAIGN STATE:</b>
            </FormLabel>
            <FormGroup>
              <Select
                value={locationFilter}
                fullWidth
                name="CampaignLocation"
                onChange={handleLocationFilter}
                aria-label="Filter by state"
              >
                <MenuItem value={"None"}>All</MenuItem>
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
          <FormControl sx={{ m: 2 }} variant="standard">
            <FormLabel component="legend">
              <b>Addresses Environmental Justice Concerns</b>
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value="envjust"
                    onClick={handleEnviromentalJusticeFilter}
                    name="EnvJustice"
                    aria-label="Filter by Addresses Environmental Justice Concerns"
                  />
                }
                label="Addresses Concerns"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="ResultsBox">
          <div className="CampaignsHeader">
            <h2>Campaigns &nbsp;</h2>
            <h2 className="iconHeader">
              <AiOutlineFileSearch />
            </h2>
          </div>
          {loading && (
            <div className="loader">
              <BallTriangle color="#00BFFF" height={80} width={100} />
            </div>
          )}
          {searchResults != null &&
            searchResults.length == 0 &&
            SearchOccured &&
            !loading && (
              <center>
                <h3>No Results.</h3>
              </center>
            )}
          {searchResults != null && searchResults[0] != null && !loading && (
            <div>
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
          {searchResults == null && !SearchOccured && !loading && (
            <div>
              <div className="Results">
                {Studies &&
                  Studies.map((result) => (
                    <div className="ResultInteriorBox">
                      <SearchCard study={result} />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchCampaigns;
