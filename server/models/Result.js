const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResultSchema = new Schema({
    guesses: Array,
});

module.exports = mongoose.model("Result", ResultSchema);
