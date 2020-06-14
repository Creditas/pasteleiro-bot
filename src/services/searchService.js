const { BusinessPerson } = require('../models');

async function getConversationBusinessPeopleIds(options) {
  const businessPeople = await BusinessPerson.findAll({
    attributes: ['userId'],
    where: options
  })

  return businessPeople.map(bp => bp.userId);
}

module.exports = {
  getConversationBusinessPeopleIds
}