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
    //dbo.collection("students").remove({name:"dp3"});
    dbo.collection("students").deleteMany({});
    var results = dbo.collection("students").find();
    if(!results.count==0){
        console.log('No record found');
    }
    results.forEach(row => {
        console.log(row);
    });
    db.close() 
});