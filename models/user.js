exports = module.exports = {};
var	db = require('../conf/db.js'),
	Sequelize = require('sequelize');

exports.User = db.db.define('users', {
  username: Sequelize.STRING,
  fname: Sequelize.STRING,
  lname: Sequelize.STRING,
  email: Sequelize.STRING,
  picture: Sequelize.STRING,
  fname: Sequelize.STRING,
  active: Sequelize.BOOLEAN,
  online: Sequelize.INTEGER

});
