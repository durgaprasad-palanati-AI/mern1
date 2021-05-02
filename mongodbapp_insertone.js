//https://geekflare.com/mongodb-and-nodejs/
var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/durgadb3";

MongoClient.connect(url,
    function(err, db) {
        
    if (err) throw err;
    console.log("Database connected!");
    var dbo = db.db("durgadb3");
    dbo.collection("students").insertOne({"name":"dp5","marks":50}, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    
        db.close();
    });

});