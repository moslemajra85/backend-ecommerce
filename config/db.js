const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Successfully connected to MongoDB...'.yellow.inverse);
  } catch (error) {
    console.log('We could not connect to MongoDB...'.red.inverse, error);
  }
};

module.exports = connectDB;
