// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../../components/Header";

// Files
import "./index.css";

const FAQ = (props) => {
  const { content } = props;

  return (
    <div className="faq-root">
      <Header title={content["header-title"]} />
      <div className="faq-content">
        <div className="faq-body">
          <p>{content["body-content"]}</p>
        </div>
        <Link className="faq-button" to="/">
          Done
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
