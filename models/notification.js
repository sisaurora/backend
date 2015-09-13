"use strict";

module.exports = function(sequelize, DataTypes) {
  var Notification = sequelize.define("Notification", {
    message: DataTypes.STRING,
    privacy: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Notification.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Notification;
};
