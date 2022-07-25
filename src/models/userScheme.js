const mongoose = require("mongoose");
const userScheme = mongoose.Schema({
        name: {
                type: String,
        },
        lastName: {
                type: String,
        },
        password: {
                type: String,
        },
});

module.exports = mongoose.model("userScheme", userScheme);
