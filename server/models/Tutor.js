const mongoose = require("mongoose");

const tutorSchema = mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    useAs:{
        type: String
    },
    fullnames:{
        type: String
    },
    dateOfBirth:{
        type: String
    },
    placeOfBirth:{
        type: String
    },
    subject:{
        type: String
    },
    location:{
        type: String
    },
    sex:{
        type: String
    },
    description:{
        type: String
    },
    daysAvailable: [{
        type: String
    }],
    timeAvailable: [{
        type: String
    }],
    diplomas:{
        type: String
    },
    schoolsTaught:{
        type: String
    },
    yearsExperience:{
        type: Number
    },
    pricePerHour:{
        type: Number
    },
    platform:{
        type: String
    },
    picture:{
        type: String
    }
}, {timestamps: true})

const Tutor = mongoose.model("tutors", tutorSchema)

module.exports = Tutor;