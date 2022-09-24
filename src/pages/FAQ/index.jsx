// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../../components/Header";

const FAQ = (props) => {
  const { content } = props;

  return (
    <div>
      <Header title={content["header-title"]} />
      <p>{content["body-content"]}</p>
      <Link to="/">Done</Link>
    </div>
  );
};

export default FAQ;
