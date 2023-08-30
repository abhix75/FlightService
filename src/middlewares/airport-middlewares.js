const{ StatusCodes }= require('http-status-codes');
const{ErrorResponse }=require('../utils/common');
const AppError = require('../utils/error/app-error');
const { error } = require('../utils/common/error-response');
function validateCreateRequest(req,res,next)
{
    console.log("name of airport",req.body.name)
    console.log("code of airport",req.body.code)
    console.log("cityId of airport",req.body.cityId)
    console.log("address of airport",req.body.address)

    if(!req.body.name)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['name not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.code)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['Airport code  not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        // console.log(req.body.code)
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.cityId)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['cityId not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    
    next();
}

module.exports={
    validateCreateRequest
}