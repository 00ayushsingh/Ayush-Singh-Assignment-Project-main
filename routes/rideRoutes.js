const express = require('express');
const { listRides, getRideDetails } = require('../controllers/rideController');
const router = express.Router();

router.get('/rides', listRides);
router.get('/rides/:id', getRideDetails);

module.exports = router;
