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
        <h2 className="DatasetsTitle">Collaborators</h2>
        <p>Greg Bouraoui</p>
        <p>Mahan Mahtabfar</p>
        <p>Nathan Fox</p>
        <p>Tito Ruiz</p><br/>
        <h2 className="AboutTitle">About This Project:</h2>
        <p>
        Our team put together a database application that utilizes COVID-19 information 
        to analyze trends of the disease over time and get a better grasp of how it’s being 
        spread. With this information mainly based at the country, state, and county levels, 
        the users will be able to sort through our organized data to observe the different 
        trends over time based on different conditions. These trends that are going to be shown
        are meant to provide insight on specific information we have selected that we believe to 
        have the biggest impact on the spreading and contraction of the virus due to their factors. 
        The main focus was to leave the users who visit our site better informed on the spreading 
        and development of the coronavirus; applying their interpretations to their own situations 
        in order to live a healthier and safer life during these hard times.
        </p>
        <h2 className="DatasetsTitle">Datasets Utilized:</h2>
        <p>
          Most of our data was collected from several dataset which had the corresponding information
          needed for each trend. The data was normalized so it wasn't redundant and was able to fit 
          into the schemas made for them in Oracle. 
        </p>
        <h2 className="LinksTitle">Links to public Datasets:</h2>
        <a href="https://www.acaps.org/covid-19-government-measures-dataset">
          COVID-19 Government Measures Dataset
        </a>
        <a href="https://ourworldindata.org/">
          Country COVID Dataset
        </a>
        <a href="https://covidtracking.com/data/api">
          State COVID Dataset
        </a>
        <a href="https://www.worldpop.org/sdi/introapi">
          County COVID Dataset
        </a>
      </div>
    </div>
  );
};

export default WelcomePage;
