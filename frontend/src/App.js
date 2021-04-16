import React, { useEffect } from "react";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import Schema from "./Schema";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  //change the document title from "React App"
  useEffect(() => {
    document.title = "CovidProject";
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/schema">
          <Schema />
        </Route>

        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route path="/app">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
