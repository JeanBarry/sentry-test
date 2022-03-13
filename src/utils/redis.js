const { createClient } = require('redis');

const { REDIS_URL } = process.env;
let client;

const redisApi = async () => {
  const createRedisInstance = async () => {
    const clientInstance = createClient({
      url: REDIS_URL,
    });

    await clientInstance.connect();

    clientInstance.on('error', (err) => {
      console.log(err); // eslint-disable-line
      // TODO: catch error with sentry
    });
    return clientInstance;
  };

  if (!client) {
    client = await createRedisInstance();
  }

  const insertKey = async (key, value) => {
    await client.set(key, value);
  };

  const insertToSet = async (setName, value) => client.sAdd(setName, value);

  const getKey = async (key) => client.get(key);

  const getSet = async (setName) => client.sMembers(setName);

  const terminateInstance = async () => {
    await client.quit();
    client = null;
  };

  const flushInstance = async () => {
    try {
      await client.FLUSHALL();
    } catch (err) {
      console.log(err); // eslint-disable-line
      // TODO: catch error with sentry
    }
  };

  return {
    insertKey,
    insertToSet,
    getKey,
    getSet,
    terminateInstance,
    flushInstance,
  };
};

module.exports = redisApi;
