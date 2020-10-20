const express = require('express');
const router = express.Router();

// @route       POST  api/regions
// @desc        Create region
// @access      private
router.post('/', (req, res) => {
  res.send('Create region');
});

// @route       DELETE  api/regions/:id
// @desc        Delete region
// @access      private
router.delete('/:id', (req, res) => {
  res.send('Delete region');
});

module.exports = router;