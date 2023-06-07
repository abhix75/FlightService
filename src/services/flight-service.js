const {StatusCodes}=require("http-status-codes")
const { FlightRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');



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
                //console.log(error);
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


module.exports=
{
    createFlight,
}
