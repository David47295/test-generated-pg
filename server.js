const express = require('express');
const app = express();
const { Pool, Client } = require('pg');

app.use(express.static(__dirname + '/build'));

let connectionString;

//the environmental variable
if (process.env.connectionstring) {
    console.log(process.env.connectionstring)
    connectionString = process.env.connectionstring;
}

let client = new Client(connectionString);

client.connect(function(err) {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        client.query(
            "SELECT NOW()",
            function(err, result) {
                if (err) {
                    console.log(err);
                }
            }
        );
    }
});

module.exports.app = app;