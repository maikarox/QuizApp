const validateAdmin = (req, res, next) => {
    if (!res.locals.user.admin) return res.json({success: false, message: 'User is not admin.'});
    next();
}

module.exports = {
    validateAdmin,
};