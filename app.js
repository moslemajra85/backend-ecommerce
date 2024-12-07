require('dotenv').config();
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode...`
      .blue.inverse
  );
});
