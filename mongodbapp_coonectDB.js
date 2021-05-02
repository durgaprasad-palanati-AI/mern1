//https://geekflare.com/mongodb-and-nodejs/
var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/durgadb3";

MongoClient.connect(url,
    function(err, db) {

    ////view all the records
    if (err) throw err;
    console.log("Database connected!");
    var dbo = db.db("durgadb3");

    db.close() 
});