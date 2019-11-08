const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thereIsOneCorrectAnswer = (answers)=>{
    const correctAnswer = answers.find((resp) => {
        return resp.isCorrect === true
    });
    return (correctAnswer);
}

// Definition of Questions Schema
let Question = new Schema({
    questionBody: {
        type: String,
        required: true
    },
    answers: {
        type: [{
            response: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true
            }
        }],
        minlength: 2,
        required(){}
    }
},{
    collection: 'questions'
});

Question.path('answers').validate(thereIsOneCorrectAnswer, 'There must be at least one correct answer');

module.exports = mongoose.model('Question', Question);