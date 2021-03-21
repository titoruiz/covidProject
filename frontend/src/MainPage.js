import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";
import "./App.css";

const MainPage = () => {
  return (
    <>
      <div className="App-header">
        <h1>CovidProject</h1>
      </div>
      <div className="CenterScreen">
        <XYPlot width={600} height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <ChartLabel
            text="X Axis"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.9}
            yPercent={1.01}
          />

          <ChartLabel
            text="Y Axis"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: "rotate(-90)",
              textAnchor: "end",
            }}
          />
          <LineSeries
            className="first-series"
            data={[
              { x: 1, y: 3 },
              { x: 2, y: 5 },
              { x: 3, y: 15 },
              { x: 4, y: 12 },
            ]}
          />
        </XYPlot>
      </div>
    </>
  );
};

export default MainPage;
