// Delete Question
module.exports = async (req, res, next) => {
    let Question = require('../../models/Question');
    // If there is no content return 400
    if(!req.body) {
        return res.status(400).send({
            success: false,
            message: "An id must be specified."
        });
    }
    // Find question and delete it
    await Question.deleteOne({ _id: req.body.id}).then(question => {
        res.status(200).json({success: true, message: 'Question deleted', data:  question });    
    }).catch(err => {
        // server error
        return res.status(500).send({
            success: false,
            message: "Error retrieving question" + req.body.id
        });
    })
}