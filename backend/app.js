const express = require("express");
const oracledb = require("oracledb");
const connectToDB = require("./connectToDB");
const secrets = require("./secrets");

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
  app.get("/", (req, res) => {
    connection.execute(`SELECT * FROM Country`).then((result) => {
      console.log(result.rows);
      res.send("Hello, World!");
    });
  });

  //start the express server
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Backend is UP and running on Port: ${PORT}`);
  });
});
