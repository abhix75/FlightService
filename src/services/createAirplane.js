const { StatusCodes } = require("http-status-codes");
const AppError = require('../utils/error/app-error');
const { airplaneRepository } = require("./airplane-service");


async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;

    } catch (error) {

        {

            if (error.name == 'SequelizeValidationError') { 
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                    explanation.push(err.value);

                });
                console.log(explanation);

                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }

            throw new AppError("cannot create new Airplane object", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
