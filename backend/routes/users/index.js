const { Router } = require('express');
const router = Router();
const {validateAdmin} = require('../../utils/helpers');

router.post('/register', require('./create'));
router.post('/login', require('./login'));
// If Admin
router.get(':id', validateAdmin, require('./getUser'));
router.post(':id', validateAdmin, require('./getUser'));
router.put('/update/:id', validateAdmin, require('./update'));

module.exports = router;