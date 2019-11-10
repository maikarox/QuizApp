module.exports = async(req, res, next) => {
    let User = require('../../models/User');
  
    await User
      .find()
      .select({ name: 1, email: 1, admin: 1 })
      .then((user)=>{
        return res.status(200).json({ success: true, data: user});
      }).catch((err)=> {
        return next(err);
      });
    
  }