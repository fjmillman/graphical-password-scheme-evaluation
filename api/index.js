const express = require("express");
const body = require("body-parser");
const ResultController = require("./controllers/ResultController");

const server = express();
server.use(body.json());
server.use(body.urlencoded({extended: false}));
server.post("/api/result", ResultController);
server.listen(3000, () => console.log("Server is listening..."));

module.exports = server;
