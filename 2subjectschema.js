var mongoose = require('mongoose');// Setup schema
var subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id:{
        type:String
    }
});
// Export subject model
var Subject = module.exports = mongoose.model('subject', subjectSchema);
module.exports.get = function (callback, limit) {
    Subject.find(callback).limit(limit);
}