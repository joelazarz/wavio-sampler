const express = require('express');
const router = express.Router();

// @route       POST  api/kits
// @desc        Create kit
// @access      private
router.post('/', (req, res) => {
  res.send('Create kit');
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