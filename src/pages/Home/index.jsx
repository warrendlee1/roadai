// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Components
import Header from "../../components/Header";

const Home = (props) => {
  const { content } = props;
  return (
    <div>
      <Header title={content["header-title"]} link={"/faq"} />
      <Link to="/report">{content["primary-button"]}</Link>
      <p>{content["footer-text"]}</p>
    </div>
  );
};

export default Home;
