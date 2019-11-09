// Player Sign Up
module.exports = (req, res, next) => {
    const Cryptr = require('cryptr');
    let User = require('../../models/User');
    // If there is not body params returns 400
    if(!req.body) {
        return res.status(400).send({
            success: false,
            message: "Fields content cannot be empty"
        });
    }

    const { name, email, password } = req.body;

    const cryptr = new Cryptr('secrectPass');
    const encryptedPass = cryptr.encrypt(password);
    User.create({name: name, email: email, password: encryptedPass, admin: false }, (err, user) => {
        if(err){
            return next(err);
        }else{
            return res.status(201).json({ success: true, data: user});
        }
    });
}