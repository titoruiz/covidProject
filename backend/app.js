"use-strict";
const cors = require("cors");
const express = require("express");
const secrets = require("./secrets");
const oracledb = require("oracledb");
const connectToDB = require("./connectToDB");

//ctrl+C won't work unless we have this. not sure why
process.on("SIGINT", () => process.exit(1));

//create instance of express and define the port
const app = express();
const PORT = 5000;

//enable cross-origin requests
app.use(cors());

//lets log what requests we are getting
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.originalUrl}`);
  next();
});

//specify output format
//and set the location for the oracle client on the current computer
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.initOracleClient({
  libDir: secrets.oracleClientDir,
});

//get the connection to oracle
connectToDB(secrets.user, secrets.password).then((connection) => {
  //express routes

  //serve the static files here from the webpage if in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
  }

  //api endpoints to retrieve information from the database
  app.get("/api/one/:season/:povertyRate", (req, res) => {
    connection
      .execute(
        'SELECT dates AS "day", SUM(newcases) AS "numcases" FROM tito.countrycoviddata GROUP BY dates ORDER BY dates'
      )
      .then((result) => {
        //filter out the days that have "null" amount of numcases
        res.send(result.rows.filter((element) => element["numcases"] !== null));
      });
  });

  app.get("/api/two/:lowerBound/:upperBound", (req, res) => {
    connection
      .execute(
        `select TITO.countycovidcases.daterecorded as "day" , sum(TITO.countycovidcases.cases) as "numcases"
      from (SELECT fips_county,
         PERCENT_RANK() 
          OVER (PARTITION BY state_fk ORDER BY elevation DESC) 
            "Percentile Rank"
         FROM TITO.county), TITO.countycovidcases
      where "Percentile Rank" < ${req.params.upperBound}
          and "Percentile Rank" > ${req.params.lowerBound}
          and fips_county = TITO.countycovidcases.fips_fkey
      group by TITO.countycovidcases.daterecorded
      order by TITO.countycovidcases.daterecorded`
      )
      .then((result) => {
        res.send(result.rows);
      });
  });

  app.get("/api/three/:lowerBound/:upperBound", (req, res) => {
    connection
      .execute(
        `
    select TITO.countrycoviddata.dates as "day" , sum(TITO.countrycoviddata.newCases) as "numcases"
  from (SELECT ISO,
   PERCENT_RANK()
    OVER (ORDER BY popdensity DESC) 
      "Percentile Rank"
   FROM TITO.country), TITO.countrycoviddata
  where "Percentile Rank" < ${req.params.upperBound}
    and "Percentile Rank" > ${req.params.lowerBound}
    and ISO = countrycoviddata.iso_key
  group by countrycoviddata.dates
  order by countrycoviddata.dates
    `
      )
      .then((result) => {
        res.send(result.rows.filter((element) => element["numcases"] !== null));
      });
  });

  //this will return two results array will look like this:
  // [arr_for_graph_1, arr_for_graph_2]
  app.get("/api/four/:smokerPercentage/:medianAge", (req, res) => {
    let ans = [];

    connection
      .execute(
        `
    SELECT SUM(countrycoviddata.newCases) as "Total COVID-19 Cases", 
    countrycoviddata.dates as "Dates"
    FROM TITO.countryhealthstats, TITO.countrycoviddata, TITO.country
    WHERE countryhealthstats.iso = country.iso AND country.iso = countrycoviddata.iso_key
    AND NOT countryhealthstats.maleSmokers > ${req.params.smokerPercentage}
    AND NOT countryhealthstats.medianAge > ${req.params.medianAge}
    group by countrycoviddata.dates
    order by countrycoviddata.dates
    `
      )
      .then((result) => {
        ans.push(result.rows.filter((element) => element["numcases"] !== null));

        connection
          .execute(
            `
        SELECT SUM(countrycoviddata.newCases) as "Total COVID-19 Cases", 
        countrycoviddata.dates as "Dates"
        FROM TITO.countryhealthstats, TITO.countrycoviddata, TITO.country
        WHERE countryhealthstats.iso = country.iso
        AND country.iso = countrycoviddata.iso_key
        AND countryhealthstats.maleSmokers > ${req.params.smokerPercentage}
        AND countryhealthstats.medianAge > ${req.params.medianAge}
        group by countrycoviddata.dates
        order by countrycoviddata.dates
        `
          )
          .then((result2) => {
            ans.push(
              result2.rows.filter((element) => element["numcases"] !== null)
            );
          });
      });
  });

  app.get("/api/five/:id", (req, res) => {
    connection
      .execute(
        `
        SELECT PERCENT_RANK() OVER (ORDER BY averageTemp) AS percenttemp, PERCENT_RANK() OVER (ORDER BY totalcases) AS percentcases
        FROM(
            SELECT tito.countycovidcases.daterecorded AS dates, AVG(meantemp) AS averagetemp, SUM(tito.countycovidcases.cases) AS totalcases
            FROM (
                TITO.countyweather 
                    JOIN (SELECT FIPS_COUNTY, COUNTY FROM TITO.county) ON fips_fk = fips_county
                    JOIN TITO.countycovidcases ON (fips_fk = fips_fkey AND TITO.countyweather.daterecorded = TITO.countycovidcases.daterecorded))
                GROUP BY tito.countycovidcases.daterecorded
                ORDER BY tito.countycovidcases.daterecorded
        )
        ORDER BY dates
      `
      )
      .then((result) => {
        // [{dateRecorded: date, avgTemp: 123, totalCases: 123}, {dateRecorded: date, avgTemp: 123, totalCases: 123}]
        //
        // array [{date: someDate, numcases: 123123}]
        /*
        let y = new Promise((resolve, reject) => {
          resolve(
            result.rows.map((element, index) => {
              if (index == 0) return { newCases: element.totalCases };
              return {
                newCases: result.rows[index] - result.rows[index - 1],
              };
            })
          );
        });
        */

        res.send([
          result.rows.map((element, index) => {
            return { x: index, y: element["PERCENTTEMP"] };
          }),
          result.rows.map((element, index) => {
            return { x: index, y: element["PERCENTCASES"] };
          }),
        ]);
      });
  });

  //start the express server
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Backend is UP and running on Port: ${PORT}`);
  });
});
