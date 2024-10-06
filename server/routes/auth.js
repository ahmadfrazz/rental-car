const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Email does not match', success: false });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: 'Password does not match', success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.status(200).json({ success: true, accessToken: token })
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
