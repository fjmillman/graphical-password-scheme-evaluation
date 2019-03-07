const Result = require("../models/Result");
const connect = require("../db.js");

const ResultGetController = (req, res, next) => {
    connect();

    Result.find(function (error, results) {
        if (error) return console.error(error);
        res.json(results.length);
    });
};

module.exports = ResultGetController;
