import React from "react";
import { Link } from "react-router-dom";

const Confirmation = (props) => {
  const { content } = props;
  return (
    <div>
      <p>{content["primary-message"]}</p>
      <p>{content["secondary-message"]}</p>
      <Link to="/">{content["submit-button"]}</Link>
    </div>
  );
};

export default Confirmation;
