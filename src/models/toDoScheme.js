const mongoose = require('mongoose');
const toDoScheme = mongoose.Schema({
        title: {
            type: String,
        },
        text: {
            type: String
        },
        priority:{
            type: Number
        },
        date: {
            type: Date
        },
        status: {
            type: Boolean
        },
        user: {
            type: Object
        }
});

module.exports = mongoose.model("toDoScheme", toDoScheme);


