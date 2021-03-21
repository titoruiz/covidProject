import React from "react";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
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
