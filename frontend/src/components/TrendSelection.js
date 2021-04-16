import React from "react";

const TrendSelection = (props) => {
  return (
    <select value={props.trend} onChange={(event) => props.handleChange(event)}>
      <option value="Trend 1">
        New Cases in countries with Poverty Rate vs. Time
      </option>
      <option value="Trend 2">Total County Cases in Range of Elevation</option>
      <option value="Trend 3">
        Population Density on Covid Cases vs. Time
      </option>
      <option value="Trend 4">Trend 4</option>
      <option value="Trend 5">Trend 5</option>
    </select>
  );
};

export default TrendSelection;
