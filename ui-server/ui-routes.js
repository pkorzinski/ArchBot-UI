var Message = require('../db/models/message');
var Team = require('../db/models/team');
var path = require('path');
var q = require('q');
var bcrypt = require('bcrypt');

// Promisified database access methods
// var findMessage = q.nbind(Message.findOne, Message);
// var createMessage = q.nbind(Message.create, Message);
var findAllMessages = q.nbind(Message.find, Message);
var findTeam = q.nbind(Team.findOne, Team);

module.exports = function(app) {

  app.get('/api/messages/:team/:username', function(req, res) {
    findAllMessages({
      user: req.params.username,
      team: req.params.team
    })
      .then(function(messages) {
        res.json(messages);
      })
      .fail(function(err) {
        res.status(500).send(err);
      });
  });

  app.get('/api/messages/:teamCode', function(req, res) {
    console.log('TEAMCODE GET', req.params.teamCode);
    findAllMessages({ team: req.params.teamCode })
      .then(function(messages) {
        console.log('INSIDE THEN', messages);
        res.json(messages);
      })
      .fail(function(err) {
        res.status(500).send(err);
      });
  });

  app.post('/api/login/', function(req, res) {
    var tc = req.body.teamCode;
    var pass = req.body.password;
    console.log('body received', tc, pass);
      findTeam({ team: tc })
        .then(function(found) {
          console.log('FOUND: ', found);
          if (!found) {
            res.status(403).send({ auth: false });
          } else {
            if (found.password === pass) {
              var obj = {auth: true};
              res.send(JSON.stringify(obj));
            } else {
              res.status(403).send({ auth: false });
            }
          }
        });
  });

  app.get('/api/messages/', function(req, res) {
    console.log('Retrieving all messages from database.');
    findAllMessages({})
      .then(function(messages) {
        res.status(200).json(messages);
      })
      .fail(function(err) {
        res.status(500).send(err);
      });
  });

  app.post('/api/messages/', function(req, res) {
    // Need to convert timestamp as slack sends a non-standard format ts.
    var timeStamp;
    var newMessage;
    for (var i = 0; i < req.body.length; i++) {
      timeStamp = req.body[i].ts.split('.');
       newMessage = new Message({
        key: req.body[i].ts,
        user: req.body[i].username || 'anonymous',
        text: req.body[i].text || '',
        channel: req.body[i].channel || '',
        timestamp: new Date(timeStamp[0] * 1000),
        team: req.body[i].team
      });
      newMessage.save(function(err, data) {
        if(err) {
          console.error(err);
        } else {
          console.log(data);
        }
      });
    }
    res.end();
  });

  // Route for authentication of team to allow access to a team's messages.
  app.post('/api/teams/', function(req, res) {
    var teamCode = req.body.team;
    console.log('/API/TEAMS', req.body);
    findTeam({ team: teamCode })
      .then(function(found) {
        console.log('FOUND ', found)
        if (found) {
          res.json(found);
        } else {
          var password = bcrypt.genSaltSync(10).slice(7, 15);
          Team.create({
            key: req.body.ts,
            team: teamCode,
            password: password
          })
            .then(function(found) {
              res.json(found);
            });
        }
      });
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
  });
};
