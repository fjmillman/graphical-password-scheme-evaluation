const Result = require("../models/Result");
const connect = require("../db.js");

const result = (req, res, next) => {
    connect();

    const newResult = new Result({
        guesses: req.body.guesses
    });

    newResult
        .save()
        .then(doc => {
            res.json(doc);
        })
        .catch(e => next(e));
};

module.exports = result;
