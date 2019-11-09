module.exports = async(req, res, next) => {
    let Question = require('../../models/Question');
    const pageSize = 20
  
    await Question
      .find()
      .select({ questionBody: 1, answers: 1 })
      .then((questions)=>{
        return res.status(200).json({ success: true, data: questions});
      }).catch((err)=> {
        return next(err);
      });
    
  }