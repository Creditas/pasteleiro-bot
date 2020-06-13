module.exports = async (req, res, next) => {
  const { accessToken: token, webClient } = req;
  const { channel_id: channel } = req.body;
  const options = { token, channel }

  const { members } = await webClient.conversations.members(options);

  req.members = members;

  return next();
}