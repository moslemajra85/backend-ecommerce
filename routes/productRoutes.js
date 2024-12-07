const express = require('express');
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  getProductsByCategory,
  deleteProduct,
} = require('../controllers/productController');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', auth, addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', auth, admin, deleteProduct);

module.exports = router;
