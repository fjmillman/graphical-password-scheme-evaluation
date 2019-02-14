const UserStudyResult = require('../models/UserStudyResult');

const userStudyResult = (req, res, next) => {
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
