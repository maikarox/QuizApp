const { Router } = require('express');
const router = Router();
const {validateAdmin} = require('../../utils/helpers');

router.post('/register', require('./create'));
router.post('/login', require('./login'));

//router.use(validateAdmin);
router.get(':id', validateAdmin, require('./getUser'));
router.put('/update/:id', validateAdmin, require('./update'));

module.exports = router;