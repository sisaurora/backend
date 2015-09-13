var	Notification		= require('../models/notification.js'),
	apiversion 	= require('../conf/apiversion.js'),
	rest = require('epilogue');

vs = apiversion.vs;

exports = module.exports = {};
// Cria os recursos REST
exports.notificationres = rest.resource({
  model: Notification.Notification,
  endpoints: ['/api/'+ vs +'/notification', '/api/'+ vs +'/notification/:id']
});
