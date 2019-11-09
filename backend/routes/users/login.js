// User login
module.exports = async (req, res, next) => {
    const Cryptr = require('cryptr');
    const cryptr = new Cryptr('secrectPass');
    let User = require('../../models/User');
    const { email, password } = req.body;
    await User.findOne({'email': email}, (err, user) =>{
        if(err) return next(err);
        if(user === null){
            return res.status(404).json({success: false, message: 'The email is not from a registered user.'});
        } else {
            const decryptedPass = cryptr.decrypt(user.password);
            if(decryptedPass !== password) return res.status(401).json({success: false, message: 'Incorrect password.'});
            res.status(200).json({success: true, message: 'Log in successfully.', data:  user });
        }
    });
}