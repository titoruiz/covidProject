import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";
import TrendSelection from "./components/TrendSelection";
import "./App.css";

//determine what the backend url is:
const BACKEND_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";

const MainPage = () => {
  //state for the selected Trend and chart Data
  const [trend, setTrend] = useState("Trend 1");
  const [chartData, setChartData] = useState([]);

  const handleChange = (event) => {
    setTrend(event.target.value);
    console.log(`current selected trend is: ${event.target.value}`);
  };

  useEffect(() => {
    if (trend === "Trend 1") {
      axios.get(`${BACKEND_URL}/api/one/asdf`).then((response) => {
        console.log("here");
        console.log(response.data);

        setChartData(
          response.data.map((element, index) => {
            return { x: index, y: element["numcases"] };
          })
        );
      });
    } else if (trend === "Trend 2") {
      axios.get(`${BACKEND_URL}/api/two/asdf`).then((response) => {
        setChartData(response.data);
      });
    } else if (trend === "Trend 3") {
      axios.get(`${BACKEND_URL}/api/three/asdf`).then((response) => {
        setChartData(response.data);
      });
    } else if (trend === "Trend 4") {
      axios.get(`${BACKEND_URL}/api/four/asdf`).then((response) => {
        setChartData(response.data);
      });
    } else if (trend === "Trend 5") {
      axios.get(`${BACKEND_URL}/api/five/adsf`).then((response) => {
        setChartData(response.data);
      });
    }
  }, [trend]);

  return (
    <>
      <div className="App-header">
        <h1>CovidProject</h1>
      </div>
      <div className="CenterScreen">
        <TrendSelection display={trend} handleChange={handleChange} />
        <XYPlot
          width={window.innerWidth * 0.8}
          height={window.innerHeight * 0.8}
        >
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
          <LineSeries className="first-series" data={chartData} />
        </XYPlot>
      </div>
    </>
  );
};

export default MainPage;
