const Result = require('../models/Result');
const connect = require('../db.js');

const ResultPostController = (req, res, next) => {
  connect();

  const newResult = new Result({
    scheme1: req.body.scheme1,
    scheme2: req.body.scheme2,
    age: req.body.age,
    gender: req.body.gender,
  });

  newResult
    .save()
    .then(doc => {
      res.json(doc);
    })
    .catch(err => next(err));
};

module.exports = ResultPostController;
