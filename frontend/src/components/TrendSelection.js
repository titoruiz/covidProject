import React from "react";

const TrendSelection = (props) => {
  return (
    <select value={props.trend} onChange={(event) => props.handleChange(event)}>
      <option value="Trend 1">Trend 1</option>
      <option value="Trend 2">Trend 2</option>
      <option value="Trend 3">Trend 3</option>
      <option value="Trend 4">Trend 4</option>
      <option value="Trend 5">Trend 5</option>
    </select>
  );
};

export default TrendSelection;
