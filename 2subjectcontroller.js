// Import contact model
Subject = require('./2subjectschema');
// Handle index actions
exports.index = function (req, res) {
    Subject.get(function (err, subjects) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            payload:req.body,
            status: "success",
            message: "Subjects retrieved successfully",
            data: subjects
        });
    });
};
// Handle create contact actions
exports.new = async function (req, res) {
    try
    { console.log(req.params.name,req.params.id)
    let insertedSubject = await Subject.create({"name":req.params.name,"id":req.params.id})
    
    //or
     //let insertedSubject = await Subject.create({"name":"AI","id":433})
         res.json({message:"success inserted",data:insertedSubject})
     
     }catch(err)
     {
     console.log(err)
     res.json({message:"internal error"})
     }
};
// Handle view contact info

exports.view = function (req, res) {
    
    Subject.find({name:req.params.name},function (err, subject) {//name:req.params.name
        //console.log(subject)
         if (err)
            res.send(err);
        res.json({
            payload:req.params.name,
            message: 'subject details loading..',
            data: subject
        });
    });
};
// Handle update contact info
exports.update =async function (req, res) {
   try
   { 
    let subject= await  Subject.find({name:req.params.name})
   if(!subject)
   {
       res.json({message:"no subject found with given:"+req.params.name})
   }
   else{
    let updatedSubject = await Subject.findOneAndUpdate({name:req.params.name},
        {$set: {id: req.body.id}})
        res.json({payload:req.body,message:"success update",data:updatedSubject})
   }

    }catch(err)
    {
    console.log(err)
    res.json({message:"internal error"})
    }
};
// Handle delete contact
exports.delete = function (req, res) {
    Subject.findOneAndRemove({
        name: req.params.name
    }, function (err, subject) {

        if (err)

            res.send(err);
        
         else  { 
             if(subject)
             {
                 res.json({
                     subject:req.params.name,
                        status: "success",
                        message: 'subject deleted'
                     })
                    }
            else{
                res.json({
                    status: "false",
                    message: 'subject not found to delete'
                 })
            }
        ;}
    });
};