"use strict";

const express = require("express");

// Constants
const PORT = 4444;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  req.query.name
    ? res.send(`Hello ${req.query.name}`)
    : res.send(`Hello World`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
