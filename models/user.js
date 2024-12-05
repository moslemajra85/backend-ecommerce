const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// add a method to generate a jwt
userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.SECRET
  );

  return token;
};
const User = mongoose.model('User', userSchema);

module.exports = User;
