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
  app.post('/grant-business-person', businessPeopleController.create);
  app.post('/list-business-people', businessPeopleController.list);
  app.post('/revoke-business-person', businessPeopleController.remove);
  app.post('/pasteleiro', getTeamAccessToken, getChannelMembersMiddleware, pasteleiroController.create);
}