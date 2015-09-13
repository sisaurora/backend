exports = module.exports = {};
var	db = require('../conf/db.js'),
	Sequelize = require('sequelize');

exports.Status = db.db.define('status', {
  message: Sequelize.STRING,
  privacy: Sequelize.STRING,
  copyright: Sequelize.BOOLEAN
//  userId: Sequelize.INTEGER
});
