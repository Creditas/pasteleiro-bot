const _ = require('lodash');

async function create(req, res) {
  const { members } = req
  const pasteleiro = `<@${_.sample(members)}>`

  const data = {
    response_type: 'in_channel',
    text: `${pasteleiro} you were picked to be the Pasteleiro today. Congratz! :tada:`,
  };

  return res.json(data);
}

module.exports = {
  create
}