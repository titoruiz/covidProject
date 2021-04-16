import React from "react";
import schemaImage from "./schemaimg.png";
import NavBar from "./components/NavBar";
import "./App.css";

const Schema = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <p className="Title">Schema Page</p>
      </header>
      <td class="CenterScreenImage">
        <img alt="The Schema" src={schemaImage} />
      </td>
    </div>
  );
};

export default Schema;
