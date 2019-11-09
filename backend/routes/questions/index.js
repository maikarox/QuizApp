const { Router } = require('express');
const router = Router();
const {findIfUser, validateAdmin} = require('../../utils/helpers');

router.get('/', findIfUser, require('./getPublished'));

router.get('/all', validateAdmin, require('./getAll'));
router.post('/add', validateAdmin, require('./add'));
router.put('/update/:id', validateAdmin, require('./update'));
router.get(':id', findIfUser, require('./getOne'));
module.exports = router;