const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send('Access denied no token provided');
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

// const auth = (req, res, next) => {
//   // Get the token from the Authorization header
//   const token = req.headers['authorization']; // Token comes directly in the header

//   // Check if the token exists
//   if (!token) {
//     return res.status(401).json({ message: 'Access token is missing' });
//   }

//   // Verify the token
//   jwt.verify(token, process.env.SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }

//     // Attach user info to the request object
//     req.user = user;
//     next();
//   });
// };

module.exports = auth;
