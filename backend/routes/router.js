const { Router } = require('express');
const router = Router();
const userRouter = require('./users');
const questionsRouter = require('./questions');

router.use('/users', (req, res, next) => {
    next();
},userRouter);

router.use('/quiz', (req, res, next) => {
    next();
},questionsRouter);

module.exports = router;