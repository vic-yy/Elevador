const express = require('express');
const elevatorRoutes = require('./routes/elevatorRoutes')
const app = express();

app.use(elevatorRoutes);
app.use(express.json());

module.exports = app;