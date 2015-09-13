"use strict";

module.exports = function(sequelize, DataTypes) {
  var Status = sequelize.define("Status", {
    message: DataTypes.STRING,
    privacy: DataTypes.STRING,
    copyright: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Status.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Status;
};
