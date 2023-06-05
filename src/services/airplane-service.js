const {StatusCodes}=require("http-status-codes")
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/error/app-error');



const airplaneRepository = new AirplaneRepository();

async function createAirplane(data)
{
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;

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
            
            throw new AppError("cannot create new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
async function getAirplanes()
{
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
       throw new AppError("Not Able to get All the Airplane objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function getAirplane(id)
{
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCodes==StatusCodes.NOT_FOUND)
        {
            throw new AppError("THE AEROPLANE YTHAT YOU HAVE REQUESTED IS NOT PRESENT",error.statusCodes)
        }
       throw new AppError("Not Able to get  the Airplane objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

module.exports=
{
    createAirplane,
    getAirplanes,
    getAirplane
}
