const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const auth = require('../middleware/auth');

// Amazon s3 config
const s3 = new AWS.S3();
AWS.config.update(
  {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    subregion: 'us-east-2',
  });

// Multer config
// memory storage keeps file data in a buffer
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10000000 },
});

router.post('/', auth, upload.single('audio'), (req, res) => {

  try {
    let fileKey;
    fileKey = req.file.originalname.replace(/[\W_]/g, "");

    s3.upload({
      Bucket: 'waviosampler',
      Key: fileKey,
      Body: req.file.buffer,
      ACL: 'public-read'
    }, (err, data) => {
      if (err) return res.status(400).send(err);
      res.json(data.Location);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };

});

module.exports = router;

