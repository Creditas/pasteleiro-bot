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


app.post('/pasteleiro-do-dia', getWebClientMiddleware, getChannelMembersMiddleware, async (req, res) => {
  const { members } = req
  const pasteleiro = `<@${_.sample(members)}>`

  const data = {
    response_type: 'in_channel',
    text: `${pasteleiro} you were picked to be the Pasteleiro today. Congratz! :tada:`,
  };

  return res.json(data);
});

async function getChannelMembersMiddleware(req, res, next) {
  const { webClient } = req;
  const { channel_id: channel } = req.body;
  const options = {
    token: process.env.SLACK_TOKEN,
    channel
  }

  const { members } = await webClient.conversations.members(options);

  req.members = members;

  return next();
}

function getWebClientMiddleware(req, res, next) {
  const web = new WebClient(process.env.SLACK_TOKEN);

  req.webClient = web;

  return next();
}