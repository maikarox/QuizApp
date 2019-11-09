const { Router } = require('express');
const router = Router();

router.get('/', require('./getAll'));
router.get('/id/:id', require('./getOne'));

// If admin
router.post('/add', require('./add'));
router.put('/update/:id', require('./update'));
module.exports = router;