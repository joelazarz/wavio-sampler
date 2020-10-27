const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Kit = require('../models/Kit');
const Region = require('../models/Region');

// @route       POST  api/kits
// @desc        Create kit
// @access      private
router.post('/', [auth, [
  check('name', 'Please add name').notEmpty(),
  check('sample', 'Please upload sample').notEmpty()
]], 
async (req, res) => {
  const validationErrors = validationResult(req);

  if(!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  };

  const { name, sample } = req.body;

  try {
    const newKit = new Kit({
    name,
    sample,
    user: req.user.id
    });

    const kit = await newKit.save();

    res.json(kit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

// @route       PUT  api/kits/:id
// @desc        Edit kit
// @access      private
router.put('/:id', auth, async (req, res) => {
  const { name, sample } = req.body;

  // Build kit object
  const kitFields = {};
  if(name) kitFields.name = name;
  if(sample) kitFields.sample = sample;

  try {
    // Look for kit
    let kit = await Kit.findById(req.params.id);

    if(!kit) return res.status(404).json({ msg: 'Kit not found' });

    // Check to see if kit belongs to user
    if(kit.user.toString() !== req.user.id){
      return res.status(401).json({ msg: 'Not authorized' });
    };

    kit = await Kit.findByIdAndUpdate(req.params.id, 
      { $set: kitFields },   
      { new: true }
    );

    res.json(kit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

// @route       DELETE  api/kits/:id
// @desc        Delete kit
// @access      private
router.delete('/:id', auth, async (req, res) => {
  try {
    // Look for kit
    let kit = await Kit.findById(req.params.id);

    if(!kit) return res.status(404).json({ msg: 'Kit not found' });

    // Check to see if kit belongs to user
    if(kit.user.toString() !== req.user.id){
      return res.status(401).json({ msg: 'Not authorized' });
    };

    await Kit.findByIdAndRemove(req.params.id);
    await Region.deleteMany({ kit: req.params.id })

    res.json({ msg: 'Kit removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

// @route       GET  api/kits
// @desc        Get all kits
// @access      private
router.get('/', auth, async (req, res) => {
  try {
    const kits = await Kit.find();
    res.json(kits);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

// @route       GET  api/kits/:id
// @desc        Get selected kit
// @access      private
router.get('/:id', auth, async (req, res) => {
  try {
    const kit = await Kit.findById(req.params.id)
    .populate({path: 'regions'})
    .exec();

    res.json(kit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

module.exports = router;