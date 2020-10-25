const mysql = require('mysql2');
const dbConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'loginnodejs',
  port: 3306,
  // dialect: 'MySqlNode'
}).promise();

module.exports = dbConnection;