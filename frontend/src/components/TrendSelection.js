import React from "react";

const TrendSelection = (props) => {
  return (
    <>
      <h4 style={{ color: "white", marginBottom: 0 }}>Trend:</h4>
      <select
        value={props.trend}
        onChange={(event) => props.handleChange(event)}
      >
        <option value="Trend 1">
          New Cases in countries with Poverty Rate vs. Time
        </option>
        <option value="Trend 2">
          Total County Cases in Range of Elevation
        </option>
        <option value="Trend 3">
          Population Density on Covid Cases vs. Time
        </option>
        <option value="Trend 4">
          Cases on Median Age and Smoker Percentage
        </option>
        <option value="Trend 5">Temperature vs. Number of Cases</option>
      </select>
    </>
  );
};

export default TrendSelection;
