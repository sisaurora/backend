var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/new', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/delete', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/', function(req, res) {
  models.User.findAll({})
  .then(function(listar) {
    res.send(listar);
  });
});

router.get('/:user_id', function(req, res) {
  models.User.findOne({
    where: {
      id: req.params.user_id
    }
  }).then(function(listar) {
    res.send(listar);
  });
});

/*
*
*/

// Rotas de status

router.get('/:user_id/status/', function (req, res) {
  models.Status.findAll({})
  .then(function(listar) {
    res.send(listar);
  });
});

router.get('/:user_id/status/:status_id', function (req, res) {
  models.Status.findOne({
    where: {
      id: req.params.status_id
    }
  }).then(function(listar) {
    res.send(listar);
  });
});

router.post('/:user_id/status/new', function (req, res) {
  models.Status.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/status/:status_id/delete', function (req, res) {
  models.Status.destroy({
    where: {
      id: req.params.status_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

/*
*
*/

// Rotas de status

router.get('/:user_id/notifications/', function (req, res) {
  models.Notification.findAll({})
  .then(function(listar) {
    res.send(listar);
  });
});

router.get('/:user_id/notifications/:notification_id', function (req, res) {
  models.Notification.findOne({
    where: {
      id: req.params.status_id
    }
  }).then(function(listar) {
    res.send(listar);
  });
});

router.post('/:user_id/notification/new', function (req, res) {
  models.Notification.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/notification/:notification_id/delete', function (req, res) {
  models.Notification.destroy({
    where: {
      id: req.params.status_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
