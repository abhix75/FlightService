const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");
function validateCreateRequest(req,res,next)
{
    if(!req.body.name)
    {
        ErrorResponse.message = 'Something went wrong while creating the city';
        ErrorResponse.error = new AppError('City Name Not Found In the incomin request',StatusCodes.NOT_FOUND)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}