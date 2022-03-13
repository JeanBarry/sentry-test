const redisApi = require('../../utils/redis');
const { validateInput } = require('./validator');
const { SET_NAMES } = require('./constants');

const dataProcessing = () => {
  const getHomeData = async () => {
    const redisInstance = await redisApi();
    return redisInstance.getSet(SET_NAMES.home);
  };

  const insertHomeData = async (data) => {
    const validatedInput = validateInput(data);
    if (!validatedInput.valid) {
      // TODO: catch error with sentry
      return {
        status: 'error',
        message: 'Data is invalid, try with a country, email or prime number.',
        statusCode: 400,
      };
    }

    const redisInstance = await redisApi();
    await redisInstance.insertToSet(SET_NAMES.home, validatedInput.input);

    return {
      status: 'success',
      message: 'Data inserted successfully',
      statusCode: 201,
    };
  };

  return {
    getHomeData,
    insertHomeData,
  };
};

module.exports = dataProcessing;
