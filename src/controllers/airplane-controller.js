const { StatusCodes }= require('http-status-codes');

const { AirplaneService } = require('../services/index');
const airplane = require('../models/airplane');




async function createAirplane(req,res)
{
    try {

        //console.log(req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        return res
                 .status(StatusCodes.CREATED)
                 .json({
                    sucess:true,
                    message: 'Successfully created an airplane ',
                    data: airplane,
                    error: {}
                 })
    }
     catch (error)
     {
       return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
           sucess:false,
           message: 'something went wrong while creating airplane ',
           data: {},
           error: error
        })

     }
}

module.exports=
{
    createAirplane
}