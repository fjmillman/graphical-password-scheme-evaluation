const Result = require('../models/Result');
const connect = require('../db.js');

const ResultGetController = async (req, res, next) => {
  connect();

  try {
    const results = await Result.find({});
    res.json(results.length);
  } catch (err) {
    next(err);
  }
};

module.exports = ResultGetController;
