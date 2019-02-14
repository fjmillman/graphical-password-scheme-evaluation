const UserStudyResult = require('../models/UserStudyResult');
const connect = require('../db.js');

const userStudyResult = (req, res, next) => {
    connect();

    const newUserStudyResult = new UserStudyResult({
        username: req.body.username,
        password: req.body.password
    });

    newUserStudyResult
        .save()
        .then(doc => {
            res.json(doc)
        })
        .catch(e => next(e))
};

module.exports = userStudyResult;
