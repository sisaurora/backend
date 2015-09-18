"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    picture: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    online: DataTypes.BOOLEAN,
    bio: DataTypes.TEXT
  }, {
    instanceMethods: {
        retrieveByNamePassword: function (username, onSuccess, onError) {
            User.find({where: {username: username}}, {raw: true})
            .then(onSuccess).catch(onError);
        }
    },
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Status)
        User.hasMany(models.Notification)
      }
    }
  });

  return User;
};
