const Product = require('../models/product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    res.send(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductsByCategory = async (req, res) => {
  try {
  } catch (error) {}
};

const getProductsByName = async (req, res) => {
  try {
  } catch (error) {}
};

const addProduct = async (req, res) => {
  try {
    const product = new Product({
      user: req.body.user,
      name: req.body.name,
      image: req.body.image,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.category,
      rating: req.body.rating,
      numReview: req.body.numReview,
      price: req.body.price,
      countInStock: req.body.countInStock,
    });

    const result = await product.save();

    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateProduct = async (req, res) => {
  try {
  } catch (error) {}
};
const deleteProduct = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getProducts,
  getProduct,
  getProductsByCategory,
  getProductsByName,
  addProduct,
  updateProduct,
  deleteProduct,
};
