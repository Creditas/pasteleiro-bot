'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessPerson = sequelize.define('BusinessPerson', {
    userId: DataTypes.STRING,
    teamId: DataTypes.STRING,
    channelId: DataTypes.STRING
  }, {});
  BusinessPerson.associate = function(models) {
    // associations can be defined here
  };
  return BusinessPerson;
};