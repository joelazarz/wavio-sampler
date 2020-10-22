const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route       POST  api/users
// @desc        Register a user
// @access      public
router.post('/', [
  check('username', 'Username must be at least 3 characters').isLength({ min: 3 }),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], 
(req, res) => {
  res.send(req.body);
});

// @route       PUT  api/users/:id
// @desc        Edit a user
// @access      private
router.put('/:id', (req, res) => {
  res.send('Edit a user');
});

// @route       DELETE  api/users/:id
// @desc        Delete a user
// @access      private
router.delete('/:id', (req, res) => {
  res.send('Delete a user');
});

module.exports = router;