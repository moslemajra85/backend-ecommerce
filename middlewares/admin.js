// we assume that this middleware is goona be executed after
// our authorization middleware function
// code 403: forbidden
// code 401: unauthorized
const admin = function (req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).send('Access Denied!');
  }

  next();
};

module.exports = admin;
