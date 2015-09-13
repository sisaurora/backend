var	User	= require('../models/user.js'),
	apiversion 	= require('../conf/apiversion.js'),
	rest = require('epilogue');

vs = apiversion.vs;

exports = module.exports = {};
// Cria os recursos REST
exports.ures = rest.resource({
  model: User.User,
  endpoints: ['/api/'+ vs +'/users', '/api/'+ vs +'/users/:id']
});
