const bcrypt = require('bcrypt');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/User');

// @route   GET api/users/me
// @desc    GET Authenticated User using JWT Key
// @access  Private
const getAuthUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  return res.json(user);
});

// @route   POST api/auth
// @desc    Login User
// @access  Public
const authUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // Check if not user
  if (!user) {
    return res.status(401).json({
      errors: [{ msg: 'Invalid Credentials' }],
    });
  }

  // Validate Password
  const isMatch = await bcrypt.compare(password, user.password);

  // If not valid Password
  if (!isMatch) {
    return res.status(401).json({
      errors: [{ msg: 'Invalid Credentials' }],
    });
  }

  // Generate JWT
  const token = user.generateAuthToken();
  return res.json({ token });
});

module.exports = { getAuthUser, authUser };
