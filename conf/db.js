exports = module.exports = {};
var Sequelize = require('sequelize');

exports.db = new Sequelize('demo', 'root', 'mysqlrootpassword');
