const sgMail = require('@sendgrid/mail');
const config = require('config');

const catchAsync = require('../utils/catchAsync');
const { generateWelcomeMail } = require('../utils/email');
const Subscriber = require('../models/Subscriber');

// @route   POST api/subscriber
// @desc    Add User to the Mail List
// @access  Public
const addUserToMailList = catchAsync(async (req, res) => {
  const { name, email } = req.body;

  // Return 400, if user exists
  let user = await Subscriber.findOne({ email });
  if (user) {
    return res.status(400).json({
      errors: [{ msg: 'Already Subscribed!' }],
    });
  }

  sgMail.setApiKey(config.get('sendGridApiKey'));

  const msg = generateWelcomeMail(email, name);

  await sgMail.send(msg);

  // Generate User Obj and Save
  user = new Subscriber({
    name,
    email,
  });
  await user.save();

  return res.json(user);
});

// @route   POST api/subscriber/notify-all
// @desc    Send Email to all the Subscribers
// @access  Private
const notifyAll = catchAsync(async (req, res) => {
  const subscribers = await Subscriber.find().select('email -_id');
  const to = subscribers.map((subscriber) => subscriber.email);

  if (!to.length) {
    return res.status(400).json({
      errors: [{ msg: 'You have 0 Subscribers!' }],
    });
  }

  sgMail.setApiKey(config.get('sendGridApiKey'));

  const { emailSubject: subject, emailBody: body } = req.body;

  const msg = {
    to,
    from: req.user.email,
    html: body,
    subject,
  };

  await sgMail.send(msg);
  return res.send('Email Sent!');
});

module.exports = {
  registerUser: addUserToMailList,
  notifyAll: notifyAll,
};
