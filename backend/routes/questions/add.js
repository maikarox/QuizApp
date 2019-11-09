// Create Question
module.exports = async (req, res, next) => {
    let Question = require('../../models/Question');
   
    // If there is not body params returns 400
    if(!req.body) {
        return res.status(400).send({
            success: false,
            message: "Fields content cannot be empty"
        });
    }
    const { questionBody, answers } = req.body;

    //response isCorrect
    const answersList = JSON.parse(answers);
    Question.create({questionBody: questionBody, published: published, answers: answersList }, (err, question) => {
        if(err){
            return next(err);
        }else{
            return res.status(201).json({ success: true, data: question});
        }
    });
}