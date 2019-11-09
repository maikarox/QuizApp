// Update User
module.exports = async (req, res, next) => {
    let User = require('../../models/User');
    // If there is no content return 400
    if(!req.body) {
        return res.status(400).send({
            success: false,
            message: "User fields cannot be empty."
        });
    }
    // Find user and update it
    await User.findById(req.body._id).then(user => {
        if(!user) {
            return res.status(404).send({
                success: false,
                message: "User not found" + req.params.id
            });            
        } else{
            res.status(200).json({success: true, message: 'User Found', data: { user }});
        }
        
    }).catch(err => {
        // If user not found
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                success: false,
                message: "Use could not found with id " + req.params.noteId
            });                
        }
        // server error
        return res.status(500).send({
            success: false,
            message: "Error retrieving user" + req.params.noteId
        });
    })
};