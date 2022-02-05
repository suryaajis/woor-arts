const bcrypt = require('bcrypt')

const hashPassword = (pass) => {
  return bcrypt.hashSync(pass, 10)
}

const comparePassword = (pass, hashPass) => {
  return bcrypt.compare(pass, hashPass)
}

module.exports = {
  hashPassword,
  comparePassword
}