import React from "react";

export default function SearchCard({ study }) {
  return (
    <div className="cardDiv">
      <h4>{study.Title}</h4>
      <a href={study.Link} target="_blank" rel="noreferrer">
        Click for PDF
      </a>
    </div>
  );
}
