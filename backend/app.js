const express = require("express");
const oracledb = require("oracledb");
const secrets = require("./secrets");
const connectToDB = require("./connectToDB");

//create instance of express and define the port
const app = express();
const PORT = 3000;

//ctrl+C won't work unless we have this. not sure why
process.on("SIGINT", () => process.exit(1));

//specify output format for the database
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
    console.log(req.params.id);
    res.send("in endpoint one");
  });

  app.get("/api/two/:id", (req, res) => {
    console.log(req.params.id);
    res.send("in endpoint two");
  });

  app.get("/api/three/:id", (req, res) => {
    consol.log(req.params.id);
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
