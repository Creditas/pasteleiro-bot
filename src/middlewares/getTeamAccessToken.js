const { Team } = require('../models');

module.exports = async (req, res, next) => {
  const { team_id: externalId } = req.body

  const team = await Team.findOne({ where: {externalId} });
  req.accessToken = team.accessToken;

  return next();
}