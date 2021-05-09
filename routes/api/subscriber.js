const router = require('express').Router();
const { check } = require('express-validator');
const validationCheck = require('../../middlewares/validationCheck');
const isAuthenticated = require('../../middlewares/auth');
const isAdmin = require('../../middlewares/admin');
const subscriberController = require('../../controllers/subscriber');

// @route   POST api/subscriber
// @desc    Add User to the Mail List
// @access  Public
router.post(
  '/',
  [
    [
      check('name', 'Name is Required').trim().not().isEmpty(),
      check('email', 'Enter a valid Email').trim().isEmail(),
    ],
    validationCheck,
  ],
  subscriberController.registerUser
);

// @route   POST api/subscriber/notify-all
// @desc    Send Email to all the Subscribers
// @access  Private
router.post(
  '/notify-all',
  [
    isAuthenticated,
    isAdmin,
    [
      check('emailSubject', 'Email Subject is Required!')
        .trim()
        .not()
        .isEmpty(),
      check('emailBody', 'Email Body is Required!').trim().not().isEmpty(),
    ],
    validationCheck,
  ],
  subscriberController.notifyAll
);

module.exports = router;
