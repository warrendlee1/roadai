// Libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Loading from "./pages/Loading";
import Confirmation from "./pages/Confirmation";

// Files
import content from "./client/content";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home content={content.Home} />} />
        <Route path="/faq" element={<FAQ content={content.FAQ} />} />
        <Route path="/report" element={<Report content={content.Report} />} />
        <Route
          path="/loading"
          element={<Loading content={content.Loading} />}
        />
        <Route
          path="/confirmation"
          element={<Confirmation content={content.Confirmation} />}
        />
      </Routes>
    </div>
  );
};

export default App;
