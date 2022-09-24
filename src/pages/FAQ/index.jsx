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
          {content["body-content"].map((value, index) => {
            return (
              <div key={index}>
                <p className="faq-question">{value.question}</p>
                <p>{value.answer}</p>
              </div>
            );
          })}
        </div>
        <Link className="faq-button" to="/">
          Done
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
