//https://geekflare.com/mongodb-and-nodejs/
var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/durgadb1";

MongoClient.connect(url,
    function(err, db) {

    ////view all the records
    if (err) throw err;
    console.log("Database connected!");
    var dbo = db.db("durgadb1");
    var results = dbo.collection("subjects").find({id:411});
    results.forEach(row => {
        console.log(row);
    });
    db.close() 
});