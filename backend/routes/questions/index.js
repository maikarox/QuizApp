const { Router } = require('express');
const router = Router();

router.get('/', require('./getPublished'));
router.get('/id/:id', require('./getOne'));

// If admin
router.get('/all', require('./getAll'));
router.post('/add', require('./add'));
router.put('/update/:id', require('./update'));
module.exports = router;