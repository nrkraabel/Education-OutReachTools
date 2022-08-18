import React from "react";
import "./SearchCard.css";
import { Link } from "react-router-dom";

export default function SearchCard({ study }) {
  return (
    <div className="cardDiv">
      <h4 className="lineClamped">{study.Title}</h4>
      <Link
        to={"/" + study.InternalRef}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Opens a new tab with detailed information about the selected campaign"
      >
        Click for more details
      </Link>
    </div>
  );
}
