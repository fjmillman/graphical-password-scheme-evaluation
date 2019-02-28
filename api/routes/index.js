const express = require("express");
const body = require("body-parser");
const ResultController = require("../controllers/ResultController");

try {
    const server = express();

    server.use(body.json());
    server.post("/api/result", ResultController);

    module.exports = server;
} catch (err) {
    console.error("API error: ", err);
}
