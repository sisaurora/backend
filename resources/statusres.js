var	Status		= require('../models/status.js'),
	apiversion 	= require('../conf/apiversion.js'),
	rest = require('epilogue');

vs = apiversion.vs;

exports = module.exports = {};
// Cria os recursos REST
exports.statusres = rest.resource({
  model: Status.Status,
  endpoints: ['/api/'+ vs +'/status', '/api/'+ vs +'/status/:id']
});
