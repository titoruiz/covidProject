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
        <select value={props.trend}>
          <option value="tr"></option>
        </select>
      </div>
    );
  }
  //trend 3:
  else if (props.trend === "Trend 3") {
    return (
      <div className="Trend-Option">
        <select value={props.trend}>
          <option value="tr"></option>
        </select>
      </div>
    );
  }
  //trend 4:
  else if (props.trend === "Trend 4") {
    return (
      <div className="Trend-Option">
        <select value={props.trend}>
          <option value="tr"></option>
        </select>
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
