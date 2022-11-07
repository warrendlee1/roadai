// Libraries
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Files
import Header from "../../components/Header";
import Loading from "../Loading";
import "./index.css";
import MicIcon from "../../assets/Icons/MicIcon";

// Functions
import { POST } from "../../client/http-functions";

const Report = (props) => {
  const { content } = props;
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [isValidSubmission, setIsValidSubmission] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

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

  const postLocation = async () => {
    setShowLoading(true);
    return new Promise(() => {
      navigator.geolocation.getCurrentPosition(
        // success
        async (pos) => {
          const coordinates = pos.coords;
          await POST({
            obstructions: selectedLabels,
            location: {
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              accuracy: coordinates.accuracy,
            },
          });
          setShowLoading(false);
          navigate("/confirmation");
        },
        // error
        () => console.error("GEOLOCATION not supported"),
        // options
        {
          enableHighAccuracy: true,
          timeout: 60000,
          maximumAge: 0,
        }
      );
    });
  };

  const submit = () => {
    if (isValidSubmission) {
      postLocation();
    } else {
      alert("Incomplete Form");
    }
  };

  return showLoading ? (
    <Loading />
  ) : (
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
          // to="/confirmation"
          onClick={submit}
        >
          {content["submit-button"]}
        </Link>
      </div>
    </div>
  );
};

export default Report;
