const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
    require("now-env");
}

const connect = () => {
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.error(err));
};

module.exports = connect;
