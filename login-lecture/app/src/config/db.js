const mysql = require('mysql');

const db = mysql.createConnection({
    host: '',
    user:'admin',
    password:'123123',
    database: "login-lecture",
});

db.connect();

module.exports = db ;