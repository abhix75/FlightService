const express = require('express');

const {AirportController}=require('../../controllers');
const { AirportMiddleware } = require('../../middlewares');
const router = express.Router();

//    /api/v1/airport POST
router.post('/',AirportMiddleware.validateCreateRequest,AirportController.createAirport);
//    /api/v1/airport GET
router.get('/',AirportController.getAirports);
//    /api/v1/airport/:id 
router.get('/:id',AirportController.getAirport);
//    /api/v1/airport/:id DELETE
router.delete('/:id',AirportController.destroyAirport);
module.exports =router;