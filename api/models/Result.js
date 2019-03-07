const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResultSchema = new Schema({
    scheme1: Object,
    scheme2: Object,
    age: Number,
    gender: String
});

module.exports = mongoose.model("Result", ResultSchema);
