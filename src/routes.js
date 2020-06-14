const applicationController = require('./controllers/applicationController');
const businessPeopleController = require('./controllers/businessPeopleController');
const pasteleiroController = require('./controllers/pasteleirosController');

const {
  getTeamAccessToken,
  getWebClientMiddleware,
  getChannelMembersMiddleware
} = require("./middlewares");

module.exports = app => {
  app.use(getWebClientMiddleware);

  app.get('/', applicationController.index);
  app.get('/authorized', applicationController.auth);
  app.post('/grant-business-man', businessPeopleController.create);
  app.post('/pasteleiro-do-dia', getTeamAccessToken, getChannelMembersMiddleware, pasteleiroController.create);
}