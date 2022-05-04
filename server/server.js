const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

const authRoute = require('./routes/authRoutes')

const urlencodedParser = bodyParser.urlencoded({ extended: false});
app.use(bodyParser.json(), urlencodedParser);

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(authRoute)

const dbURI = 'mongodb://127.0.0.1:27017/regs'
mongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology:true })
    .then((res) => {
        // only listen for requests once database data has loaded
        app.listen(process.env.PORT || 5000, () => console.log("Server is up on port " + (process.env.PORT || 5000)))
    })
    .catch(err => console.log(err))

// const dbo = require("./db/conn");

// app.listen(port, () => {

//     dbo.connectToServer( function (err){

//         if (err) console.error(err);

//     });

//     console.log(`Server is running on port: ${port}`);
// })
