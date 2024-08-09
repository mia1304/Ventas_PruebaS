// app.js
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const dbURI = 'mongodb://localhost:27017/ventas-ps';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Definición de rutas y middleware

module.exports = { app };
