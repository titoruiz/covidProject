import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">Covid-Project</p>
        <Link to="/app" className="App-link">
          Take Me To The App!
        </Link>
      </header>
    </div>
  );
};

export default WelcomePage;
