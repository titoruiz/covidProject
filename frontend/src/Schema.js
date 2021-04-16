import React from "react";
import schemaImage from "./schemaimg.png";
import { Link } from "react-router-dom";
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
        <img src={schemaImage} />
      </td>
    </div>
  );
};

export default Schema;