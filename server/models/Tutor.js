const mongoose = require("mongoose");

const tutorSchema = mongoose.Schema({
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
    }
}, {timestamps: true})

const Tutor = mongoose.model("tutor", tutorSchema)

module.exports = Tutor;