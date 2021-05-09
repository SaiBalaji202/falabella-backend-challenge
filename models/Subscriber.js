const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
});

const Subscriber = mongoose.model('subscriber', SubscriberSchema);
module.exports = Subscriber;
