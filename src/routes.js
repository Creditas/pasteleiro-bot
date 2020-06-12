const applicationController = require('./controllers/applicationController');
const pasteleiroController = require('./controllers/pasteleirosController');

const {
  getWebClientMiddleware,
  getChannelMembersMiddleware
} = require("./middlewares");

module.exports = app => {
  app.use(getWebClientMiddleware);

  app.get('/', applicationController.index);
  app.post('/pasteleiro-do-dia', getChannelMembersMiddleware, pasteleiroController.createPasteleiro);
}