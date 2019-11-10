const { Router } = require('express');
const router = Router();
const {findIfUser, validateAdmin} = require('../../utils/helpers');

router.get('/', findIfUser, require('./getPublished'));
router.post('/', findIfUser, require('./getPublished'));

router.get('/all', validateAdmin, require('./getAll'));
router.post('/all', validateAdmin, require('./getAll'));
router.post('/add', validateAdmin, require('./add'));
router.put('/update', validateAdmin, require('./update'));
router.get(':id', findIfUser, require('./getOne'));
router.post(':id', findIfUser, require('./getOne'));
module.exports = router;