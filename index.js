require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { WebClient } = require('@slack/web-api');
const _ = require('lodash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

const web = new WebClient(process.env.SLACK_TOKEN);

app.post('/pasteleiro-do-dia', async (req, res) => {
  const { channel_id } = req.body
  const { members } = await getChannelMembers({
    token: process.env.SLACK_TOKEN,
    channel: channel_id
  })
  const pasteleiro = `<@${_.sample(members)}>`

  const data = {
    response_type: 'in_channel',
    text: `${pasteleiro} you were picked to be the Pasteleiro today. Congratz! :tada:`,
  };
  res.json(data);
});

function getChannelMembers(options) {
  return web.conversations.members(options)
}