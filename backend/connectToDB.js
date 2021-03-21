const oracledb = require("oracledb");

const connectToDb = async (user, pass) => {
  let connection;
  console.log("connecting to oracleDB");

  try {
    connection = await oracledb.getConnection({
      user: user,
      password: pass,
      connectionString: "oracle.cise.ufl.edu:1521/orcl",
    });
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) return connection;

    console.error("Unable to connect to Oracle");
    process.exit(1);
  }
};

module.exports = connectToDb;
