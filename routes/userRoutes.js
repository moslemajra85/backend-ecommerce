const express = require('express');
const auth = require('../middlewares/auth');
const {
  register,
  login,
  getCurrentUser,
} = require('../controllers/userController');

const router = express.Router();

router.post('/', register);
router.post('/login', login);
router.get('/me', auth, getCurrentUser);

module.exports = router;
