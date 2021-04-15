import React, { useState, useEffect } from "react";
import axios from "axios";
import { XYPlot, XAxis, YAxis, ChartLabel, LineSeries } from "react-vis";
import TrendSelection from "./components/TrendSelection";
import TrendOptionsSelection from "./components/TrendOptionsSelection";
import NavBar from "./components/NavBar";
import "./App.css";

//determine what the backend url is:
const BACKEND_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";

const MainPage = () => {
  //state for the selected Trend, Trend Options, and Chart Data,
  const [trend, setTrend] = useState("Trend 1");
  const [chartData, setChartData] = useState([]);
  const [trendOptions, setTrendOptions] = useState({
    season: "Spring",
    povertyRate: 3,
  });

  const handleTrendChange = (event) => {
    //hand trend selection here:
    //event.target.value is the value in the dropdown menu
    //we can just set as "Trend 1" etc. based on what is selected here in if-else
    //make sure to set the trendOptions to appropriate default values for the trend
    setTrend(event.target.value);

    console.log(`current selected trend is: ${event.target.value}`);
  };

  const handleOptionsChange = (event) => {
    setTrendOptions({
      ...trendOptions,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (trend === "Trend 1") {
      axios
        .get(
          `${BACKEND_URL}/api/one/${trendOptions.season}/${trendOptions.povertyRate}`
        )
        .then((response) => {
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
      axios.get(`${BACKEND_URL}/api/three/adf`).then((response) => {
        setChartData(response.data);
      });
    } else if (trend === "Trend 4") {
      axios.get(`${BACKEND_URL}/api/four/adf`).then((response) => {
        setChartData(response.data);
      });
    } else if (trend === "Trend 5") {
      axios.get(`${BACKEND_URL}/api/five/adsf`).then((response) => {
        setChartData(response.data);
      });
    }
  }, [trend, trendOptions]);

  return (
    <>
      <NavBar></NavBar>
      <div className="CenterScreen">
        <TrendSelection display={trend} handleChange={handleTrendChange} />
        <TrendOptionsSelection
          display={trendOptions}
          trend={trend}
          handleChange={handleOptionsChange}
        />
        <XYPlot
          width={window.innerWidth * 0.8}
          height={window.innerHeight * 0.8}
        >
          <XAxis />
          <YAxis />
          <ChartLabel
            text="Time (days)"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.9}
            yPercent={0.99}
          />

          <ChartLabel
            text="New Cases"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.02}
            yPercent={0.06}
            style={{
              transform: "rotate(-90)",
              textAnchor: "end",
            }}
          />
          <LineSeries
            style={{ stroke: "violet", strokeWidth: 3 }}
            data={chartData}
          />
        </XYPlot>
      </div>
    </>
  );
};

export default MainPage;
