const _ = require('lodash');

const {
  getWebClientMiddleware,
  getChannelMembersMiddleware
} = require("./middlewares");

module.exports = app => {
  app.use(getWebClientMiddleware);

  app.post('/pasteleiro-do-dia', getChannelMembersMiddleware, async (req, res) => {
    const { members } = req
    const pasteleiro = `<@${_.sample(members)}>`

    const data = {
      response_type: 'in_channel',
      text: `${pasteleiro} you were picked to be the Pasteleiro today. Congratz! :tada:`,
    };

    return res.json(data);
  });
}