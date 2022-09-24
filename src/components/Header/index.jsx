// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Files
import InfoIcon from "../../assets/InfoIcon";
import "./index.css";

const Header = (props) => {
  const { title, link } = props;
  return (
    <div className="header-root">
      <p>{title}</p>
      <Link to={link}>
        <InfoIcon />
      </Link>
    </div>
  );
};

export default Header;
