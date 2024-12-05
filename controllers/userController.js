const User = require('../models/user');
const { validateUser, validateLogin } = require('../utils/validate');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { error } = validateUser(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // check if the user exists
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).send('User already exists!');
    }

    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    await user.save();

    // we want to user the get logged in the moment they register
    const token = user.generateToken();
    res
      .header('x-auth-token', token)
      .status(201)
      .send(_.pick(user, ['_id', 'name', 'email']));
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { error } = validateLogin(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // check if the user exists
    let user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(400).send('Invalid email or password');
    }

    const validePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validePassword) {
      return res.status(400).send('Invalid email or password');
    }

    const token = user.generateToken();
    res.send({ token, user });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    console.log(req.user);
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  register,
  login,
  getCurrentUser,
};
