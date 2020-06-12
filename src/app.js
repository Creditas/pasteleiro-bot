require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');

const {
  getWebClientMiddleware,
  getChannelMembersMiddleware
} = require("./middlewares");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(getWebClientMiddleware);

const server = app.listen(3000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});


app.post('/pasteleiro-do-dia', getChannelMembersMiddleware, async (req, res) => {
  const { members } = req
  const pasteleiro = `<@${_.sample(members)}>`

  const data = {
    response_type: 'in_channel',
    text: `${pasteleiro} you were picked to be the Pasteleiro today. Congratz! :tada:`,
  };

  return res.json(data);
});