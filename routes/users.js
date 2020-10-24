const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route       POST  api/users
// @desc        Register a user
// @access      public
router.post('/', [
  check('username', 'Username must be at least 3 characters').isLength({ min: 3 }),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], 
async (req, res) => {
  // handle errors from checks 
  const validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  };

  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if(user){
      return res.status(400).json({ msg: 'User already exists' });
    };

    user = new User({
      username,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '30d' }, (err, token) => {
      if(err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.send(500).send('Server Error');
  }
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