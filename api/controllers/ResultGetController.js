const Result = require('../models/Result');
const connect = require('../db.js');

const ResultGetController = async (req, res, next) => {
  connect();

  try {
    const results = await Result.find({});
    const newResult = new Result();

    newResult
      .save()
      .then(result => {
        res.json({
          id: result.id,
          length: results.length,
        });
      })
      .catch(err => next(err));
  } catch (err) {
    next(err);
  }
};

module.exports = ResultGetController;
