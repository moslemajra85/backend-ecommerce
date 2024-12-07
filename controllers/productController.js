const Product = require('../models/product');
const { validateProduct } = require('../utils/validate');
const _ = require('lodash');
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

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.body.category;

    if (!category) {
      return res.status(400).send('Category is required');
    }

    const products = await Product.find({
      category,
    });

    if (products.length === 0) {
      return res.status(404).json({
        message: 'No Product in this category!',
      });
    }

    re.status(200).send(product);
  } catch (error) {}
};

const getProductsByName = async (req, res) => {
  try {
  } catch (error) {}
};

const addProduct = async (req, res) => {
  try {
    const { error } = validateProduct(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

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
    const { error } = validateProduct(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send('Product was not found!s');
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
    });

    if (!product) {
      return res.status(404).send('Product not found!');
    }

    const result = await Product.deleteOne({
      _id: req.params.id,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
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
