const {StatusCodes}=require("http-status-codes")
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');
const {Op}=require('sequelize');



const flightRepository = new FlightRepository();

async function createFlight(data)
{
    try {
        const flight = await flightRepository.create(data);
        return flight;

    } catch (error) {
    
        {
    
            if(error.name == 'SequelizeValidationError')
            {
                console.log(error);
                let explanation =[];
                error.errors.forEach((err)=>{
                    explanation.push(err.message);
                    explanation.push(err.value);

                });
                console.log(explanation);
    
                throw new AppError(explanation,StatusCodes.BAD_REQUEST);
            }
            
            throw new AppError("cannot create new Flight object",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
async function getAllFlights(query) {
   
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00";

    //trips=MUM-DEL
    if(query.trips) {

       [departureAirportId, arrivalAirportId] = query.trips.split("-"); 
       customFilter.departureAirportId = departureAirportId;
       customFilter.arrivalAirportId = arrivalAirportId;
       // TODO: add a check that they are not same
    }
    if(query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]
        }
    }
    if(query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if(query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
        }
    }
    if(query.sort) {
        const params = query.sort.split(',');
        const sortFilters = params.map((param) => param.split('_'));
        sortFilter = sortFilters
    }
   console.log(customFilter, sortFilter);
    try {
        const flight= await flightRepository.getAllFlights(customFilter, sortFilter);
        return flight;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getFlight(id)
{
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCodes==StatusCodes.NOT_FOUND)
        {
            throw new AppError("THE Flight THAT YOU HAVE REQUESTED IS NOT PRESENT",error.statusCodes)
        }
       throw new AppError("Not Able to get  the Flight objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function updateSeats(data) {
    try {
        const response = await flightRepository.updateRemainingSeats(data.flightId, data.seats, data.dec);
        return response;
    } catch(error) {
        console.log(error);
        throw new AppError('Cannot update data of the flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports=
{
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
}
