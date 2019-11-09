const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definition Answers Schema
let AnswerSchema = new Schema({
    response: {
        formType: String
    },
    isCorrect: {
        formType: Boolean,
        default: false
    }
});

//module.exports = AnswerSchema;
module.exports = mongoose.model('Answer', AnswerSchema);