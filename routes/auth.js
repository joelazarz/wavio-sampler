const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route       GET  api/auth
// @desc        Get logged in user
// @access      private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route       POST  api/auth
// @desc        Login/Auth user & get token
// @access      public
router.post('/', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
],
async (req, res) => {
  // handle errors from checks 
  const validationErrors = validationResult(req);

  if(!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  };

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if(!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    };

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    };

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
    res.status(500).send('Server Error');
  };
});

module.exports = router;