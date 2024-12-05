const bcrypt = require('bcrypt');

const hashPassword = (oldPassword) => {
  const salt = bcrypt.genSaltSync(10);
  hashed = bcrypt.hashSync(oldPassword, salt);
  return hashed;
};
console.log(hashPassword('123456'));
const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: hashPassword('123456'),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: hashPassword('123456'),
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: hashPassword('123456'),
  },
];

module.exports = users;
