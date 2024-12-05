const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', getProducts);
router.post('/', auth, addProduct);

module.exports = router;
