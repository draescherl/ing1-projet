const mysql = require('mysql');
const creds = require('./creds.json');

/**
 * To correct the error that is thrown at the start :
 * Log in to MySQL as root and type :
 * ALTER USER <username>@<host> IDENTIFIED WITH mysql_native_password BY <password>
 */
const connection = mysql.createConnection({
  host: creds.host,
  user: creds.username,
  password: creds.password,
  database: creds.db
});

connection.connect(function (err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;