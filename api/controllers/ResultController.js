const Result = require("../models/Result");
const connect = require("../db.js");

const ResultController = (req, res, next) => {
    connect();

    const newResult = new Result({
        registrations: req.body.registrations,
        logins: req.body.logins,
        guesses: req.body.guesses
    });

    newResult
        .save()
        .then(doc => {
            res.json(doc);
        })
        .catch(e => next(e));
};

module.exports = ResultController;
