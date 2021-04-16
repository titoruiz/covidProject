import React from "react";
import { DiscreteColorLegend } from "react-vis";

const TrendLegend = (props) => {
  if (props.trend === "Trend 1") {
    return (
      <DiscreteColorLegend
        items={[{ title: "Seasonal Covid Cases", color: "violet" }]}
      />
    );
  } else if (props.trend === "Trend 2") {
    return (
      <DiscreteColorLegend
        items={[
          {
            title: "Cases for countries with Given Elevation",
            color: "violet",
          },
        ]}
      />
    );
  } else if (props.trend === "Trend 3") {
    return (
      <DiscreteColorLegend
        items={[
          {
            title: "Cases for countries with Given Population Density",
            color: "violet",
          },
        ]}
      />
    );
  } else if (props.trend === "Trend 4") {
    return (
      <DiscreteColorLegend
        items={[
          {
            title: "Cases for countries above given threshold",
            color: "violet",
          },
          { title: "Cases for countries below given threshold", color: "red" },
        ]}
      />
    );
  } else if (props.trend === "Trend 5") {
    return (
      <DiscreteColorLegend
        items={[
          {
            title: "temperature percentage",
            color: "violet",
          },
          {
            title: "total cases percentage",
            color: "red",
          },
        ]}
      />
    );
  }
};

export default TrendLegend;
