const { WebClient } = require('@slack/web-api');

module.exports = (req, res, next) => {
  const { accessToken } = req;

  const web = new WebClient(accessToken);

  req.webClient = web;

  return next();
}