/*
* AuroraCore Api
* Author: Diego Carvalho Santos
* Licence: MIT
* Init Date: 12/09/15
* Finish Date: x/09/15
* 	Be Happy and Enjoy XD
*/

var Sequelize = require('sequelize'),
	express = require('express'),
	bodyParser = require('body-parser'),
	app = express();
	rest = require('epilogue'),
	http = require('http'),
	db = require('./conf/db.js');

var port = process.env.PORT || 3000;

var Status = require('./models/status').Status;
var User = require('./models/user.js').User;
var Notification = require('./models/notification.js').Notification;

// Inicia os Usos do Express, cors incluido

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

// Inicia a api rest
rest.initialize({
  app: app,
  sequelize: db.db
});

var ures = require ('./resources/ures.js');
var statusres = require ('./resources/statusres.js');
var notifres = require ('./resources/notifres.js');

//
//
/*
*
*/
Status.belongsTo(User);
Notification.belongsTo(User);
//
//

// Cria a DB e inicia o servidor
db.db
  .sync({ force: true })
  .then(function() {
	app.listen(port);
	console.log('magic happening at http://%s:%s', 'localhost', port);
  });

app.get('/', function(req, res){
	res.json('Welcome to Aurora API, be sure that you are allowed to use it!');
});

app.get('/*/*', function(req, res){
	res.json('Some routes are hidden!');
});

app.get('*', function(req, res){
	res.json('no data found');
});
