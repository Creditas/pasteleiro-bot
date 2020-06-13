const applicationController = require('./controllers/applicationController');
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
  app.post('/pasteleiro-do-dia', getTeamAccessToken, getChannelMembersMiddleware, pasteleiroController.createPasteleiro);
}