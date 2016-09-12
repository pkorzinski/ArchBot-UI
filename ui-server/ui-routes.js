var Message = require('../db/models/message');
var Team = require('../db/models/team');
var path = require('path');
var q = require('q');
var bcrypt = require('bcrypt');

var findMessage = q.nbind(Message.findOne, Message);
var createMessage = q.nbind(Message.create, Message);
var findAllMessages = q.nbind(Message.find, Message);
var findTeam = q.nbind(Team.findOne, Team);

module.exports = function(app) {
  app.get('/api/messages/:username', function(req, res){
    findAllMessages({ user: req.params.username })
      .then(function(messages) {
        res.json(messages);
      })
      .fail(function(err) {
        res.status(500).send(err);
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

  app.post('/api/teams', function(req, res) {
    var teamCode = req.body.team;
    console.log(teamCode);
    findTeam({key: teamCode})
      .then(function(found) {
        if (found) {
          res.send(JSON.stringify(found.password));
        } else {
          var password = bcrypt.genSaltSync(10).slice(7, 15);
          Team.create({
            key: teamCode,
            password: password
          })
            .then(function(found) {
              res.send(JSON.stringify(found.password));
            });
        }
      });
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));
  });
};
