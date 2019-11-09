const { Router } = require('express');
const router = Router();
const {findIfUser, validateAdmin} = require('../../utils/helpers');

router.get('/', findIfUser, require('./getPublished'));
router.get('/id/:id', findIfUser, require('./getOne'));

router.get('/all', validateAdmin, require('./getAll'));
router.post('/add', validateAdmin, require('./add'));
router.put('/update/:id', validateAdmin, require('./update'));
module.exports = router;