const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Kit = require('../models/Kit');

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

// @route       GET  api/kits
// @desc        Get all kits
// @access      private
router.get('/', (req, res) => {
  res.send('Get all kits');
});

// @route       GET  api/kits/:id
// @desc        Get selected kit
// @access      private
router.get('/:id', (req, res) => {
  res.send('Get selected kit');
});

// @route       PUT  api/kits/:id
// @desc        Edit kit
// @access      private
router.put('/:id', (req, res) => {
  res.send('Edit kit');
});

// @route       DELETE  api/kits/:id
// @desc        Delete kit
// @access      private
router.delete('/:id', (req, res) => {
  res.send('Delete kit');
});

module.exports = router;