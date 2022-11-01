// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Files
import Header from "../../components/Header";
import "./index.css";
import MicIcon from "../../assets/Icons/MicIcon";

// Functions
import { POST } from "../../client/http-functions";

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

  const submit = async () => {
    if (isValidSubmission) {
      // location data
      navigator.geolocation.getCurrentPosition(
        // success
        (pos) => {
          const crd = pos.coords;
          console.log(crd);
          POST({
            obstructions: selectedLabels,
            location: {
              latitude: crd.latitude,
              longitude: crd.longitude,
              accuracy: crd.accuracy,
            },
          });
        },
        // error
        () => console.error("GEOLOCATION not supported"),
        // options
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
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
        <Link
          className="report-primary-button"
          style={{ textDecoration: "none", border: "none", color: "white" }}
          to="/confirmation"
          onClick={submit}
        >
          {content["submit-button"]}
        </Link>
      </div>
    </div>
  );
};

export default Report;
