const mongoose = require("mongoose");

const parentSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    useAs:{
        type: String,
        required: true
    },
    booked: [{
        type: String
    }]
}, {timestamps: true})

const Parent = mongoose.model("parent", parentSchema)

module.exports = Parent;