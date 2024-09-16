require("dotenv").config();
// const mysql = require("mysql");

// const OnlineShopDB = mysql.createConnection(
//     {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//   }
// );

const mysql = require("mysql2");

const OnlineShopDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

OnlineShopDB.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

// Example query
OnlineShopDB.query("SELECT * FROM users", (err, results) => {
  if (err) throw err;
  console.log("Users:", results);
});

module.exports = OnlineShopDB;
