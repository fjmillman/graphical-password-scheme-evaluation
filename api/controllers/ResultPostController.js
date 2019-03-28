const Result = require('../models/Result');
const connect = require('../db.js');

const ResultPostController = (req, res, next) => {
  connect();

  Result.findOneAndReplace(
    {
      _id: req.body.id,
    },
    {
      scheme1: req.body.scheme1,
      scheme2: req.body.scheme2,
      age: req.body.age,
      gender: req.body.gender,
    }
  )
    .then(() => res.json('Successfully submitted'))
    .catch(err => next(err));
};

module.exports = ResultPostController;
