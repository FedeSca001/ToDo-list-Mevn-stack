const mongoose = require('mongoose');
const toDoScheme = mongoose.Schema({
        name: {
            type: String,
        },
        priority:{
            type: Number
        },
        date: {
            type: Date
        },
        status: {
            type: Boolean
        }
});

module.exports = mongoose.model("toDoScheme", toDoScheme);


