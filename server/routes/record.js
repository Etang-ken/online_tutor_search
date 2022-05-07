const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");


const ObjectId = require("mongodb").ObjectId;


//gets list of all records
recordRoutes.route("/record").get(function (req, res){
    let db_connect = dbo.getDb("users_site");
    db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result){
        if (err) throw err;
        res.json(result);
    });
});


//get single record by id
recordRoutes.route("/record/:id").get(function (req, res){
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
    .collection("users")
    .findOne(myquery, function (err, result){
        if (err) throw err;
        res.json(result);
    });
});


//add/create new record
recordRoutes.route("/record/add").post(function(req, response){
    let db_connect = dbo.getDb();
    let myobj = { 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        useAs: req.body.useAs
    };
    db_connect
    .collection("users")
    .insertOne(myobj, function (err, res){
        if (err) throw err;
        response.json(res);
    });
});



//update a record
recordRoutes.route("/update/:id").post(function(req, response){
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let newvalues = { 
        $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        },
    };
    db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res){
        if (err) throw err;
        console.log("1 document updates");
        response.json(res);
    });
});



//delete a record
recordRoutes.route("/:id").delete ((req, response) => {
    let db_connect = dbo.getDb("users_site");
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
    .collection("users")
    .deleteOne(myquery, function (err, obj){
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});


module.exports = recordRoutes;