// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Files
import InfoIcon from "../../assets/Icons/InfoIcon";
import "./index.css";

const Header = (props) => {
  const { title, link } = props;
  return (
    <div className="header-root">
      <p className="header-title">{title}</p>
      {link ? (
        <Link to={link}>
          <InfoIcon />
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
