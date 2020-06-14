const _ = require('lodash');

const { BusinessPerson } = require('../models');
const { getConversationBusinessPeopleIds } = require('../services/searchService')

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

async function list(req, res) {
  const { 
    team_id: teamId,
    channel_id: channelId,
  } = req.body;

  const businessPeopleIds = await getConversationBusinessPeopleIds({teamId, channelId});
  const businessPeopleUsers = _.isEmpty(businessPeopleIds) ? 'None' : businessPeopleIds
    .reduce((accumulator, userId) => accumulator + ` <@${userId}>`, '');
  
  const data = {
    text: `Business People: ${businessPeopleUsers}`
  }

  res.json(data);
}

async function remove(req, res) {
  const {
    team_id: teamId,
    channel_id: channelId,
    text
  } = req.body;

  const regex = /([A-Z])\w+/g;
  const [userId] = regex.exec(text);

  const options = { userId, teamId, channelId };
  await BusinessPerson.destroy({where: options, options});

  return res.send(`<@${userId}> was revoked to be business person in this group!`);
}

module.exports = {
  create,
  list,
  remove
}