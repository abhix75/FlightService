const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplanes-routes');
const cityRoutes =require('./city-routes');
const airportRoutes = require('./airports-routes')
const router = express.Router();

router.use('/airplane',airplaneRoutes);
router.use('/airport',airportRoutes);
router.use('/city',cityRoutes);

router.get('/info', InfoController.info);

module.exports = router;