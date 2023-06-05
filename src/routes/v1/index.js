const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplanes-routes');
const cityRoutes =require('./city-routes');

const router = express.Router();

router.use('/airplane',airplaneRoutes);

router.use('/city',cityRoutes);

router.get('/info', InfoController.info);

module.exports = router;