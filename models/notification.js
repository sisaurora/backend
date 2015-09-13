exports = module.exports = {};
var	db = require('../conf/db.js'),
	Sequelize = require('sequelize');

exports.Notification = db.db.define('notification', {
  message: Sequelize.STRING,
  privacy: Sequelize.STRING,
  type: Sequelize.INTEGER
//  userId: Sequelize.INTEGER
});
