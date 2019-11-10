// Update User
module.exports = async (req, res, next) => {
    let Question = require('../../models/Question');
    // If there is no content return 400
    if(!req.body) {
        return res.status(400).send({
            success: false,
            message: "Questions fields cannot be empty."
        });
    }
    // Find user and update it
    await Question.findByIdAndUpdate(req.body.id,
         { 
            questionBody: req.body.questionBody, 
            published: req.body.published,
            answers: JSON.parse(req.body.answers) 
        }, { new: true }).then(question => {
        if(!question) {
            return res.status(404).send({
                success: false,
                message: "Question not found" + req.params.id
            });            
        } else{
            res.status(200).json({success: true, message: 'Question updated', data:  question });
        }
        
    }).catch(err => {
        // If user not found
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                success: false,
                message: "Question could not found with id " + req.params.noteId
            });                
        }
        // server error
        return res.status(500).send({
            success: false,
            message: "Error retrieving question" + req.params.noteId
        });
    })
}