// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Files
import InfoIcon from "../../assets/InfoIcon";

const Report = (props) => {
  const { content } = props;
  return (
    <div>
      <p>{content["header-title"]}</p>
      <div>
        {content["label-options"].map((label) => (
          <button key={label}>{label}</button>
        ))}
      </div>
      <Link to="/">{content["cancel-button"]}</Link>
      <Link to="/confirmation">{content["submit-button"]}</Link>
    </div>
  );
};

export default Report;
