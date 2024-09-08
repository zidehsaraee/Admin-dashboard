const mysql = require("mysql");

const OnlineShopDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "online_shop",
});

module.exports = OnlineShopDB;
