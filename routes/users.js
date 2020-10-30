const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Kit = require('../models/Kit')
const Region = require('../models/Region')

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
router.put('/:id', [auth, [
  check('username', 'Username must be at least 3 characters').isLength({ min: 3 }),
  check('email', 'Please include a valid email').isEmail()
]], 
async(req, res) => {
  const validationErrors = validationResult(req);

  if(!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  };

  const { username, email } = req.body;
  
  // Build user object
  const userFields = {};
  if(username) userFields.username = username;
  if(email) userFields.email = email;

  try {
    // Look for user
    let user = await User.findById(req.params.id);

    if(!user) return res.status(404).json({ msg: 'User not found' });

    // Check to see if the record belongs to user
    if(user._id.toString() !== req.user.id){
      return res.status(401).json({ msg: 'Not authorized' });
    };

    user = await User.findByIdAndUpdate(req.params.id, 
      { $set: userFields },   
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

// @route       DELETE  api/users/:id
// @desc        Delete a user
// @access      private
router.delete('/:id', auth, async (req, res) => {
  try {
    // Look for user
    let user = await User.findById(req.params.id);

    if(!user) return res.status(404).json({ msg: 'User not found' });

    const userId = user._id.toString();

    // Check to see if user belongs to user
    if(userId !== req.user.id){
      return res.status(401).json({ msg: 'Not authorized' });
    };

    await User.findByIdAndRemove(req.params.id);
    await Kit.deleteMany({ user: userId });
    await Region.deleteMany({ user: userId });

    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

module.exports = router;