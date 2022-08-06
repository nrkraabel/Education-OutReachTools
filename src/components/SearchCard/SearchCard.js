import React from "react";
import "./SearchCard.css";
import { Link } from "react-router-dom";

export default function SearchCard({ study }) {
  return (
    <div className="cardDiv">
      <h4 className="lineClamped">{study.Title}</h4>
      <Link to="/campaign-details-example" target="_blank" rel="noreferrer">
        Click for more details
      </Link>
    </div>
  );
}
