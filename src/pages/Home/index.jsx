// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../../components/Header";

// Files
import "./index.css";

const Home = (props) => {
  const { content } = props;
  return (
    <div className="home-root">
      <Header title={content["header-title"]} link={"/faq"} />
      <div className="home-body">
        <Link className="home-primary-button" to="/report">
          {content["primary-button"]}
        </Link>
      </div>
      <div className="home-footer">
        <p className="home-footer-text ">{content["footer-text"]}</p>
      </div>
    </div>
  );
};

export default Home;
