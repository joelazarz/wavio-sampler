const mongoose = require('mongoose');

const KitSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
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
  date: {
    type: Date,
    default: Date.now
  }
});

KitSchema.virtual('regions', {
  ref: 'region',
  localField: '_id',
  foreignField: 'kit'
});

KitSchema.set('toObject', { virtuals: true });
KitSchema.set('toJSON', { virtuals: true });

const Kit = mongoose.model('kit', KitSchema);

module.exports = Kit;