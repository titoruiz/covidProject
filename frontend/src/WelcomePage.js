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
      <div id="AboutSection">
        <h2 className="AboutTitle">About This Project:</h2>
        <p>
          Our team wanted to create a web app that would benefit users Our team
          wanted to create a web app that would benefit usersOur team wanted to
          create a web app that would benefit usersOur team wanted to create a
          web app that would benefit usersOur team wanted to create a web app
          that would benefit usersOur team wanted to create a web app that would
          benefit usersOur team wanted to create a web app that would benefit
          usersOur team wanted to create a web app that would benefit usersOur
          team wanted to create a web app that would benefit usersOur team
          wanted to create a web app that would benefit usersOur team wanted to
          create a web app that would benefit usersOur team wanted to create a
          web app that would benefit usersOur team wanted to create a web app
          that would benefit usersOur team wanted to create a web app that would
          benefit users
        </p>
        <h2 className="DatasetsTitle">Datasets Utilized:</h2>
        <p>
          usersOur team wanted to create a web app that would benefit usersOur
          team wanted to create a web app that would benefit usersOur team
          wanted to create a web app that would benefit usersOur team wanted to
          create a web app that would benefit usersOur team wanted to create a
          web app that would benefit usersOur team wanted to create a web app
        </p>
        <h2 className="LinksTitle">Links to public Datasets:</h2>
        <a href="https://covidtracking.com/data/api">
          Covid Tracking Project by The Atlantic
        </a>
        <a href="https://openweathermap.org/api">Open Weather Map</a>
        <a href="https://www.acaps.org/covid-19-government-measures-dataset">
          COVID-19 Government Measures Dataset
        </a>
        <a href="https://www.worldpop.org/sdi/introapi">
          World Population Dataset
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
