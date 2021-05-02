var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser: true, useUnifiedTopology: true});
//var db = mongoose.connection;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/subjectnew', function (req, res) {
    dbConn.then(function(db) {
        var dbo = db.db("durgadb1");
        delete req.body._id; // for safety reasons
        
        dbo.collection('subjects').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/viewsubjects',  function(req, res) {
    dbConn.then(function(db) {
        var dbo = db.db("durgadb1");
        dbo.collection('subjects').find({}).toArray().then(function(subjects) {
            res.status(200).json(subjects).pretty;
        });
    });
});
app.get('/subjectname',  function(req, res) {
    dbConn.then(function(db) {
        var dbo = db.db("durgadb1");
        //console.log(req.query.name)
        dbo.collection('subjects').find({name:req.query.name}).toArray().then(function(subjects) {
            if(subjects)
            {
            res.status(200).json(subjects).pretty;
            }
            else{res.send("SUBJECT NOT FOUND")}
        });
    });
});

console.log("listening on port 3000")
app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );