const express = require('express');
const router = express.Router();
const { signup, login, getUserDetails } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/user-details', getUserDetails);

module.exports = router;