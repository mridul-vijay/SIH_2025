const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const hashOtp = async (otp) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(otp, salt);
};

const compareOtp = async (plainOtp, hashedOtp) => {
  return bcrypt.compare(plainOtp, hashedOtp);
};

module.exports = {
  hashOtp,
  compareOtp,
};
