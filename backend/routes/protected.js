const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProtectedData } = require('../controllers/protected');

router.get('/protected-data', auth, getProtectedData);

module.exports = router;