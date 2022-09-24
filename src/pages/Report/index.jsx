// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Files
import Header from "../../components/Header";
import "./index.css";
import MicIcon from "../../assets/Icons/MicIcon";

const Report = (props) => {
  const { content } = props;
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [isValidSubmission, setIsValidSubmission] = useState(false);

  const handleSelect = (item) => {
    if (selectedLabels.includes(item)) {
      setSelectedLabels(
        selectedLabels.filter(function (e) {
          return e !== item;
        })
      );
      setIsValidSubmission(false);
    } else {
      setSelectedLabels([...selectedLabels, item]);
      setIsValidSubmission(true);
    }
  };

  const checkValidSubmission = () => {
    if (isValidSubmission === false) {
      alert("Incomplete Form");
    }
  };

  return (
    <div className="report-root">
      <Header title={content["header-title"]} />
      <div className="report-body">
        {content["label-options"].map((label) => (
          <button
            className={
              selectedLabels.includes(label)
                ? "report-label report-label-active"
                : "report-label"
            }
            onClick={() => handleSelect(label)}
            key={label}
          >
            <p style={{ margin: "0px" }}>{label}</p>
            {label.toLowerCase() === "other" ? (
              <div className="report-icon-container">
                <MicIcon
                  className={
                    selectedLabels.includes(label)
                      ? "report-icon report-icon-active"
                      : "report-icon"
                  }
                />
              </div>
            ) : null}
          </button>
        ))}
      </div>
      <div className="report-footer">
        <Link className="report-secondary-button" to="/">
          {content["cancel-button"]}
        </Link>
        <button
          className="report-primary-button"
          onClick={checkValidSubmission}
        >
          <Link
            style={{ textDecoration: "none", border: "none", color: "white" }}
            to={isValidSubmission ? "/confirmation" : "#"}
          >
            {content["submit-button"]}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Report;
