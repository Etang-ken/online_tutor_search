const { MongoClient } = require("mongodb");
const Db = process.env.connection;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function(callback) {
        client.connect(function(err, db) {
            if (db){
                _db = db.db("user_site");
                console.log("Successfully connected to MongoDb.");      
             }
             return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};