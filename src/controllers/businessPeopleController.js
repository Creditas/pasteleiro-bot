const { BusinessPerson } = require('../models');

async function create(req, res) {
  const { 
    team_id: teamId,
    channel_id: channelId,
    text
  } = req.body;

  const regex = /([A-Z])\w+/g;
  const [userId] = regex.exec(text);

  const options = { userId, teamId, channelId };
  await BusinessPerson.findOrCreate({where: options, options});

  return res.send(`<@${userId}> was granted to be business person in this group! :male-office-worker: :female-office-worker:`);
}

module.exports = {
  create
}