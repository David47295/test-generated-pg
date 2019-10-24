const express = require('express');
const app = express();
const { Pool, Client } = require('pg');

app.use(express.static(__dirname + '/build'));

// Pools will look to your environment variables for credentials
// Make sure you set them as outlined in https://node-postgres.com/features/connecting
// const pool = new Pool();

module.exports.app = app;