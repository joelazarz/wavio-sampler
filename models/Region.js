const mongoose = require('mongoose');

const RegionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  kit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kit'
  },
  start: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  end: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Region', RegionSchema)