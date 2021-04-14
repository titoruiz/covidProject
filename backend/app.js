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

  //serve the static files here from the webpage
  app.get("/", (req, res) => {
    connection.execute(`SELECT * FROM Country`).then((result) => {
      console.log(result.rows);
      res.send("Hello, World!");
    });
  });

  //api endpoints to retrieve information from the database
  app.get("/api/one/:id", (req, res) => {
    connection
      .execute(
        'SELECT dates AS "day", SUM(newcases) AS "numcases" FROM tito.countrycoviddata GROUP BY dates ORDER BY dates'
      )
      .then((result) => {
        //filter out the days that have "null" amount of numcases
        res.send(result.rows.filter((element) => element["numcases"] !== null));
      });
  });

  app.get("/api/two/:id", (req, res) => {
    console.log(req.params.id);
    res.send("in endpoint two");
  });

  app.get("/api/three/:id", (req, res) => {
    console.log(req.params.id);
    res.send("in endpoint three");
  });

  app.get("/api/four/:id", (req, res) => {
    console.log(req.params.id);
    res.send("in endpoint four");
  });

  app.get("/api/five/:id", (req, res) => {
    console.log(req.params.id);
    res.send("in endpoint five");
  });

  //start the express server
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Backend is UP and running on Port: ${PORT}`);
  });
});
