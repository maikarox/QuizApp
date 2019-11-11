// Delete User
module.exports = async (req, res, next) => {
    let User = require('../../models/User');
    // If there is no content return 400
    if(!req.body) {
        return res.status(400).send({
            success: false,
            message: "An id must be specified."
        });
    }
    // Find user and delete it
    await Question.deleteOne({ _id: req.body.id}).then(user => {
        res.status(200).json({success: true, message: 'Question deleted', data:  user });    
    }).catch(err => {
        // server error
        return res.status(500).send({
            success: false,
            message: "Error retrieving user" + req.body.id
        });
    })
}