const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserStudyResultSchema = new Schema({
    username: String,
    password: String,
});

module.exports = mongoose.model('UserStudyResult', UserStudyResultSchema);
