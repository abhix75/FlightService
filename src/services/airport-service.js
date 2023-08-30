const {StatusCodes}=require("http-status-codes")
const { AirportRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');



const airportRepository = new AirportRepository();

async function createAirport(data)
{
    try {
        const airport = await airportRepository.create(data);
        return airport;

    } catch (error) {
    
        {
            console.log(error);
            if(error.name == 'SequelizeValidationError')
            {
               
                let explanation =[];
                error.errors.forEach((err)=>{
                    explanation.push(err.message);
                    explanation.push(err.value);

                });
                console.log(explanation);
    
                throw new AppError(explanation,StatusCodes.BAD_REQUEST);
            }
            
            throw new AppError("cannot create new Airport object",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
async function getAirports()
{
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (error) {
       throw new AppError("Not Able to get All the Airport objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function getAirport(id)
{
    try {
        const airport = await airportRepository.get(id);
        return  airport;
    } catch (error) {
        if(error.statusCodes==StatusCodes.NOT_FOUND)
        {
            throw new AppError("THE Airport YTHAT YOU HAVE REQUESTED IS NOT PRESENT",error.statusCodes)
        }
       throw new AppError("Not Able to get  the Airport objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function destroyAirport(id)
{
    try {
        const  response= await  airportRepository.destroy(id);
        return  response;
    } catch (error) {
        if(error.statusCodes==StatusCodes.NOT_FOUND)
        {
            throw new AppError("THE Airport THAT YOU HAVE REQUESTED To DElete IS NOT PRESENT",error.statusCodes)
        }
       throw new AppError("Not Able to get  the Airport objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

module.exports=
{
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}
