const { Router } = require('express');
const router = Router();
const validateAdmin = require('../../utils/helpers');

router.post('/register', require('./create'));
router.post('/login', require('./login'));
//router.use(validateAdmin);
router.put('/update/:id', require('./update'));

module.exports = router;