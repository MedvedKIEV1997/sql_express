require('dotenv').config();
const mysql = require('mysql2');

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const db = mysql.createConnection(config);

module.exports = db.promise();
