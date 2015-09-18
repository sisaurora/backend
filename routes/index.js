var models  = require('../models');
var express = require('express');
var router  = express.Router();
var jwt = require('jsonwebtoken'),
    _  = require('lodash'),
    conf  = require('../lib/conf');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//
var User = require('../models');

router.get('/', function(req, res) {
	res.json('Tudo numa boa');
});

//

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), conf.secret, { expiresInMinutes: 60*5 });
}
//

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/auth', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return res.status(401).send('Usuario ou Senha incorretos' );
    }

//user has authenticated correctly thus we create a JWT token 
res.status(201).send({
    id_token: createToken(user)
  });

  })(req, res, next);
});

module.exports = router;



// Use local strategy to create user account
passport.use(new LocalStrategy(
  function(username, password, done) {
    models.User.findOne({ where: { username: username }, scope: false }).then(function(user) {
      if (!user) {
        done(null, false, { message: 'Unknown user' });
      } else if (password != user.password) {
        done(null, false, { message: 'Invalid password'});
      } else {
        done(null, user);
      }
    }).error(function(err){
      done(err);
    });
  }
));
