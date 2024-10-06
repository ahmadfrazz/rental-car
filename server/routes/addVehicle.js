const express = require('express');
const Car = require('../models/Vehicles');
const router = express.Router();
const dotenv = require('dotenv');
const { uploadMultipleImages } = require('../utils/uploadImage');
const verifyToken = require('../middleware/verifyToken');

dotenv.config();

router.post('/vehicle', verifyToken, (req, res) => {

  const { carModel, price, phone, city, copies, images } = req.body;

  uploadMultipleImages(images).then( async (urls) => {
    try {
        const newCar = new Car({
        carModel,
        price,
        phone,
        city,
        copies,
        images: urls,
        });

        await newCar.save();

        res.status(200).json({
        success: true,
        message: 'Car details added successfully!',
        data: newCar,
        });
    } catch (err) {
        console.error('Error adding car:', error);
        res.status(500).json({ message: `Err: ${err.message}`, success: false });
    }
  }).catch(err => {
    res.status(500).json({ message: `Error: ${err.message}`, success: false });
  })
});

module.exports = router;
