import React from "react";

//selection of options for each trend based on which trend is selected
//this component should render a div containing dropdown menus
//which are appropriate for the selected trend
const TrendOptionsSelection = (props) => {
  //trend 1: seasonal cases with poverty rate
  if (props.trend === "Trend 1") {
    return (
      <div className="Trend-Option">
        <select
          name="season"
          value={props.display.season || ""}
          onChange={(event) => props.handleChange(event)}
        >
          <option name="season" value="Spring">
            Spring
          </option>
          <option name="season" value="Fall">
            Fall
          </option>
          <option name="season " value="Summer">
            Summer
          </option>
          <option name="season" value="Winter">
            Winter
          </option>
        </select>
        <input
          name="povertyRate"
          type="number"
          value={props.display.povertyRate || ""}
          min="0"
          max="30"
          onChange={(event) => props.handleChange(event)}
        />
      </div>
    );
  }
  //trend 2:
  else if (props.trend === "Trend 2") {
    return (
      <div className="Trend-Option">
        <input
          name="lowerBound2"
          type="number"
          value={props.display.lowerBound2 || ""}
          min="0.00"
          max="0.49"
          step="0.01"
          onChange={(event) => props.handleChange(event)}
        />
        <input
          name="upperBound2"
          type="number"
          value={props.display.upperBound2 || ""}
          min="0.50"
          max="0.99"
          step="0.01"
          onChange={(event) => props.handleChange(event)}
        />
      </div>
    );
  }
  //trend 3:
  else if (props.trend === "Trend 3") {
    return (
      <div className="Trend-Option">
        <input
          name="lowerBound3"
          type="number"
          value={props.display.lowerBound3 || ""}
          min="0.00"
          max="0.49"
          step="0.01"
          onChange={(event) => props.handleChange(event)}
        />
        <input
          name="upperBound3"
          type="number"
          value={props.display.upperBound3 || ""}
          min="0.50"
          max="0.99"
          step="0.01"
          onChange={(event) => props.handleChange(event)}
        />
      </div>
    );
  }
  //trend 4:
  else if (props.trend === "Trend 4") {
    return (
      <div className="Trend-Option">
        <input
          name="smokerPercentage"
          type="number"
          value={props.display.smokerPercentage || ""}
          min="5"
          max="80"
          step="1"
          onChange={(event) => props.handleChange(event)}
        />
        <input
          name="medianAge"
          type="number"
          value={props.display.medianAge || ""}
          min="25"
          max="70"
          step="1"
          onChange={(event) => props.handleChange(event)}
        />
      </div>
    );
  }

  //otherwise return trend 5
  //trend 5:
  return (
    <div className="Trend-Option">
      <select value={props.trend}>
        <option value="tr"></option>
      </select>
    </div>
  );
};

export default TrendOptionsSelection;
