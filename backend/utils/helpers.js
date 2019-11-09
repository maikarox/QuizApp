const User = require('./../models/User');
const validateAdmin = async (req, res, next) => {
    await User.findById(req.body._id).then(user => {
        if(!user) {
            return res.status(404).send({
                success: false,
                message: "User not found" + req.params.id
            });          
        } else{
            if (!user.admin) return res.status(403).json({success: false, message: 'User is not admin.'});
            next();
        }
        
    });  
}
const findIfUser = async (req, res, next) => {
    await User.findById(req.body._id).then(user => {
        if(!user) {
            return res.status(404).send({
                success: false,
                message: "User not found" + req.params.id
            });           
        } else{
            if (!user) return res.status(403).json({success: false, message: 'User is not register'});
            next();
        }
        
    });  
}
module.exports = {
    validateAdmin,
    findIfUser
};