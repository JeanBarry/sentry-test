const dataService = require('./dataProcessing')();

const post = async ({ text }) => dataService.insertHomeData(text);
const getHomeData = async () => dataService.getHomeData();
const apiServiceHandler = {
  post,
  getHomeData,
};

module.exports = apiServiceHandler;
