// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Files
import "./index.css";
import CarIcon from "../../assets/Icons/CarIcon";

const Confirmation = (props) => {
  const { content } = props;
  return (
    <div className="confirmation-root">
      <div className="confirmation-content">
        <div className="confirmation-body">
          <CarIcon />
          <p className="confirmation-title">{content["primary-message"]}</p>
          <p className="confirmation-subtitle">
            {content["secondary-message"]}
          </p>
        </div>
        <div className="confirmation-footer">
          <Link className="confirmation-button" to="/">
            {content["submit-button"]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
