const getPasteleirableMembers = ({conversationMembersIds, conversationBusinessPeopleIds}) => {
  const pasteleirableMembers = conversationMembersIds.filter(member => {
    return !conversationBusinessPeopleIds.includes(member);
  });

  return pasteleirableMembers;
}

module.exports = {
  getPasteleirableMembers,
}