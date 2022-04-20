import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
//import { firebaseApp } from "../firebase";

function SearchBar() {
  const [searchResults, setSearchResults] = useState(null);
  const [Data, setPrograms] = useState([]);
  // useEffect(() => {
  //   let dataRef = firebaseApp.database().ref();
  //   dataRef
  //     .child("1aETM15XL2pq4KFmAc3ExuooFC5dPXMx9__BpNt4eSuU")
  //     .child("Data")
  //     .on("value", (snapshot) => {
  //       var Program = snapshot.val();
  //       setPrograms(Program);
  //     });
  // }, []);

  // const options = {
  //   includeScore: false,
  //   keys: ["utility", "city", "state_abbrv"],
  // };

  // const fuse = new Fuse(Programs, options);

  const [text, setText] = useState("");

  // const onSubmit = (evt) => {
  //   evt.preventDefault();
  //   if (text === "") {
  //     alert("Please enter something!");
  //   } else {
  //     const result = fuse.search(text);
  //     setSearchResults(result);
  //   }
  // };

  const onChange = (evt) => setText(evt.target.value);

  return (
    <div>
      <form className="formSearch">
        <input
          type="search"
          name="text"
          placeholder="search database..."
          value={text}
          onChange={onChange}
          className="buttonSearch"
        />
      </form>
    </div>
  );
}

export default SearchBar;
