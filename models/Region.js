const mongoose = require('mongoose');

const RegionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  kit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'kit'
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Region = mongoose.model('region', RegionSchema);

module.exports = Region;