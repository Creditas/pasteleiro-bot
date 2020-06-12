const { WebClient } = require('@slack/web-api');

module.exports = (req, res, next) => {
  const web = new WebClient(process.env.SLACK_TOKEN);
  req.webClient = web;
  return next();
}