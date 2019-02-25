const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResultSchema = new Schema({
    registrations: Array,
    logins: Array,
    guesses: Array
});

module.exports = mongoose.model("Result", ResultSchema);
