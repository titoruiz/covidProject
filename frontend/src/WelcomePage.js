import React from "react";
import NavBar from "./components/NavBar";

const WelcomePage = () => {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p className="Title">Covid-Project</p>
      </header>
      <div id="AboutSection">
        <h2 className="AboutTitle">About This Project:</h2>
        <p>
          The main purpose of this project is to identify trends with regards to season, temperature, elevation,
          and COVID restriction measures. Most of our queries involve comparing data and seeing if there is a 
          a difference in COVID cases or deaths between the queries. Being able to identify these trends and associations 
          can inform us about the factors that allow this virus to spread. Knowing these factors will allow people to 
          make informed decisions in regards to their health.
        </p>
        <h2 className="DatasetsTitle">Datasets Utilized:</h2>
        <p>
          Most of our data was collected from several dataset which had the corresponding information
          needed for the trends we wanted to use. 
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
        <a href="https://www.worldpop.org/sdi/introapi">
          County COVID Dataset
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
