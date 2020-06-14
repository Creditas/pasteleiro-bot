const _ = require('lodash');

const { getPasteleirableMembers } = require('../services/sortService');
const { getConversationBusinessPeopleIds } = require('../services/searchService');

async function create(req, res) {
  const { team_id: teamId, channel_id: channelId } = req.body;

  const { members: conversationMembersIds } = req;
  const conversationBusinessPeopleIds = await getConversationBusinessPeopleIds({teamId, channelId});
  const params = {conversationMembersIds, conversationBusinessPeopleIds};
  
  const pasteleirableMembers = getPasteleirableMembers(params);
  let data = {}

  if (_.isEmpty(pasteleirableMembers)) {
    data.text = 'There are no suficient pasteleirable members to sort!';
  } else {
    data.response_type = 'in_channel';
    data.text = `<@${_.sample(pasteleirableMembers)}> you were picked to be the Pasteleiro today. Congratz! :tada:`;
  }

  return res.json(data);
}

module.exports = {
  create
}