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
        },
    	toJSON: function () {
	      var values = this.get();
	      delete values.password,
	      delete values.createdAt,
	      delete values.updatedAt,
	      delete values.id,
	      delete values.picture,
	      delete values.online,
	      delete values.email
	      return values;
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
