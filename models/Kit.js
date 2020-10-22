const mongoose = require('mongoose');

const KitSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  sample: {
    type: String,
    required: true
  },
  regions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region'
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Kit', KitSchema)