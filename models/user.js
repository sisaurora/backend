"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    picture: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    online: DataTypes.BOOLEAN,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Status)
        User.hasMany(models.Notification)
      }
    }
  });

  return User;
};
