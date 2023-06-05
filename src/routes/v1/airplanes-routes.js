const express = require('express');

const {AirplaneController}=require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');
const router = express.Router();

//    /api/v1/airplanes POST
router.post('/',AirplaneMiddleware.validateCreateRequest,AirplaneController.createAirplane);
//    /api/v1/airplane GET
router.get('/',AirplaneController.getAirplanes);
//    /api/v1/airplane/:id 
router.get('/:id',AirplaneController.getAirplane);
//    /api/v1/airplane/:id DELETE
router.delete('/:id',AirplaneController.destroyAirplane);
module.exports =router;