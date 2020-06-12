const pasteleiroController = require('./controllers/pasteleirosController');

const {
  getWebClientMiddleware,
  getChannelMembersMiddleware
} = require("./middlewares");

module.exports = app => {
  app.use(getWebClientMiddleware);

  app.post('/pasteleiro-do-dia', getChannelMembersMiddleware, pasteleiroController.createPasteleiro);
}