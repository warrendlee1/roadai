// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Files
import Header from "../../components/Header";
import "./index.css";

const Report = (props) => {
  const { content } = props;
  return (
    <div className="report-root">
      <Header title={content["header-title"]} />
      <div className="report-body">
        {content["label-options"].map((label) => (
          <button className="report-label" key={label}>
            {label}
          </button>
        ))}
      </div>
      <div className="report-footer">
        <Link className="report-secondary-button" to="/">
          {content["cancel-button"]}
        </Link>
        <Link className="report-primary-button" to="/confirmation">
          {content["submit-button"]}
        </Link>
      </div>
    </div>
  );
};

export default Report;
