const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Region = require('../models/Region');

// @route       POST  api/regions
// @desc        Create region
// @access      private
router.post('/',[auth, [
  check('name', 'Please add a name'),
  check('start', 'Region start is required'),
  check('end', 'Region end is required')
]], 
async (req, res) => {
  const validationErrors = validationResult(req);

  if(!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  };

  const { name, kit, start, end } = req.body;

  try {
    const newRegion = new Region({
    name,
    kit,
    start,
    end,
    user: req.user.id
    });

    const region = await newRegion.save();

    res.json(region);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

// @route       DELETE  api/regions/:id
// @desc        Delete region
// @access      private
router.delete('/:id', auth, async (req, res) => {
  try {
    // Look for Region
    let region = await Region.findById(req.params.id);

    if(!region) return res.status(404).json({ msg: 'Region not found' });

    // Check to see if region belongs to user
    if(region.user.toString() !== req.user.id){
      return res.status(401).json({ msg: 'Not authorized' });
    };

    await Region.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Region removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

module.exports = router;