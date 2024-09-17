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

const mysql = require("mysql2");

const OnlineShopDB = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Error logging for connection issues
OnlineShopDB.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.code); // Detailed error logging
    return;
  }
  if (connection) connection.release(); // Release connection back to the pool
  console.log("Connected to MySQL pool!");
});

module.exports = OnlineShopDB;
