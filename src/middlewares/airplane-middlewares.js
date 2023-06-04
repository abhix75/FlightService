const{ StatusCodes }= require('http-status-codes');
const{ErrorResponse }=require('../utils/common')
function validateCreateRequest(req,res,next)
{
    if(!req.body.modelNumber)
    {
        ErrorResponse.message='Something went Wrong while creating the airplane';
        ErrorResponse.error={explanation:'Model Number Not Found in the incoming request'};
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    next();
}

module.exports={
    validateCreateRequest
}