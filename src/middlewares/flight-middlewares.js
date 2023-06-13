const{ StatusCodes }= require('http-status-codes');
const{ErrorResponse }=require('../utils/common');
const AppError = require('../utils/error/app-error');
const DateTimeCompare = require('../utils/helper/date-time-helper');
function validateCreateRequest(req,res,next)
{
    if(!req.body.flightNumber)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['flightNumber not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.airplaneId)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['airplaneId code  not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.departureAirportId)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['departureAirportId not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.arrivalAirportId)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['arrivalAirportId not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.arrivalTime)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['arrivalTime not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.departureTime)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['departureTime not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.price)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['price not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    if(!req.body.totalSeats)
    {
        ErrorResponse.message='Something went Wrong while creating the airport';
        ErrorResponse.error = new AppError(['totalSeats not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);

        return res
               .status(StatusCodes.BAD_REQUEST)
               .json(ErrorResponse);

    }
    next();
}
function validateDateTime(req, res, next) {
    const flightArrivalTime = req.body.arrivalTime;
    const flightDepartureTime = req.body.departureTime;
    if (
      new Date(flightArrivalTime) == "Invalid Date" ||
      new Date(flightDepartureTime) == "Invalid Date"
    ) {
      ErrorResponse.message = "Failed to create a Flight";
      ErrorResponse.error = new AppError(
        ["Please enter the Departure Time OR Arrival Time format correctly"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!DateTimeCompare.compareTime(flightArrivalTime, flightDepartureTime)) {
      ErrorResponse.message = "Failed to create a Flight";
      ErrorResponse.error = new AppError(
        ["The Departure Time must be less than the Arrival Time"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
  
    next();
  }
function validateupdtaeseats(req,res,next)
  {
      if(!req.body.seats)
      {
          ErrorResponse.message = 'Something went wrong while creating the Flight';
          ErrorResponse.error = new AppError('seats Not Found In the incomin request',StatusCodes.NOT_FOUND)
          return res
                  .status(StatusCodes.BAD_REQUEST)
                  .json(ErrorResponse);
      }
      next();
  }
module.exports={
    validateCreateRequest,
    validateDateTime,
    validateupdtaeseats
}