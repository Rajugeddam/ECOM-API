// routes for use doctor and patient
const express = require('express');
const router = express.Router();

router.use('/doctor', require('./doctor'));
router.use('/patient', require('./patient'));

module.exports = router