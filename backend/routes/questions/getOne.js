// Read Question
module.exports = (req, res, next) => {
    let Question = require('../../models/Question');
    Question.findById(req.params.id, (err, question) =>{
        if(err) return next(err);
        if(question === null) {
            return res.status(404).json({success: false, message: 'The question wasn\'t found.'});
        } else {
            res.status(200).json({success: true, data: question });
        }
    }).populate('answers');
}