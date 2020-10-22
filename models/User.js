const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  kits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kit'
  }],
  regions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region'
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema)