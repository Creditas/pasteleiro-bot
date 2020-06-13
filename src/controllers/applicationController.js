const { Team } = require('../models');

function index(req, res) {
  return res.render('home');
}

async function auth(req, res) {
  const { webClient } = req;
  const { code } = req.query;
  const options = {
    code,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  }
  const {
    team,
    access_token
  } = await webClient.oauth.v2.access(options);

  await Team.upsert({
    externalId: team.id,
    name: team.name,
    accessToken: access_token
  });

  return res.render('thanks');
}

module.exports = {
  index,
  auth
}