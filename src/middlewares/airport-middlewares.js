const{ StatusCodes }= require('http-status-codes');
const{ErrorResponse }=require('../utils/common');
const AppError = require('../utils/error/app-error');
function validateCreateRequest(req,res,next)
{
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