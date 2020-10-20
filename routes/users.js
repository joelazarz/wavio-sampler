const express = require('express');
const router = express.Router();

// @route       POST  api/users
// @desc        Register a user
// @access      public
router.post('/', (req, res) => {
  res.send('Register a user');
});

// @route       PUT  api/users/:id
// @desc        Edit a user
// @access      public
router.put('/:id', (req, res) => {
  res.send('Edit a user');
});

// @route       DELETE  api/users/:id
// @desc        Delete a user
// @access      public
router.delete('/:id', (req, res) => {
  res.send('Delete a user');
});

module.exports = router;