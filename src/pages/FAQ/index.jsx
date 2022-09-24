// Libraries
import React from "react";
import { Link } from "react-router-dom";

const FAQ = (props) => {
  const { content } = props;

  return (
    <div>
      <p>{content["header-title"]}</p>
      <p>{content["body-content"]}</p>
      <Link to="/">Done</Link>
    </div>
  );
};

export default FAQ;
