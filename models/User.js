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
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.virtual('kits', {
  ref: 'kit',
  localField: '_id',
  foreignField: 'user'
});

UserSchema.virtual('regions', {
  ref: 'region',
  localField: '_id',
  foreignField: 'user'
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('user', UserSchema);

module.exports = User;