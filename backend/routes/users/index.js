const { Router } = require('express');
const router = Router();
const {validateAdmin} = require('../../utils/helpers');

router.post('/', validateAdmin, require('./getAll'));
router.post('/register', require('./create'));
router.post('/login', require('./login'));
router.put('/update', validateAdmin, require('./update'));
router.put('/delete', validateAdmin, require('./delete'));
router.get(':id', validateAdmin, require('./getUser'));
router.post(':id', validateAdmin, require('./getUser'));

module.exports = router;