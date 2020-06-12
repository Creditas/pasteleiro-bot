module.exports = async (req, res, next) => {
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