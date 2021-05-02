//https://geekflare.com/mongodb-and-nodejs/
var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/durgadb3";

MongoClient.connect(url,
    function(err, db) {
        /*
    if (err) throw err;
    console.log("Database connected!");
    var dbo = db.db("durgadb3");
    dbo.collection("students").insertOne({"name":"Abhishek","marks":100}, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    
        db.close();
    });
    */
    ////insertmany
    if (err) throwerr;
    console.log("Database connected!");
    var dbo=db.db("durgadb3");
    dbo.collection("students").insertMany([{"name":"dp","marks":95},
    {"name":"dp2","marks":80}], function(err, res) {
    if (err) throwerr;
    console.log("Documents inserted");
    db.close();
    });
    
    ////view all the records
    /*
    if (err) throw err;
    console.log("Database connected!");
    var dbo = db.db("durgadb3");
    var results = dbo.collection("students").find({});
    results.forEach(row => {
        console.log("row is")
        console.log(row);
    });
    */
});