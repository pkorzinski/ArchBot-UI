var Message = require('../db/models/message');
var path= require('path');
var q = require('q');

var findMessage = q.nbind(Message.findOne, Message);
var createMessage = q.nbind(Message.create, Message);
var findAllMessages = q.nbind(Message.find, Message);

module.exports = function(app) {
  // other routes
  app.get('/api/messages/', function(req, res) {
    console.log('Retrieving all messages from databse.');
    findAllMessages({})
      .then(function(messages) {
        res.json(messages);
      })
      .fail(function(err) {
        res.status(500).send(err);
      });
  });

  app.post('/api/messages/', function(req, res) {
    console.log('Posted message to database.');
    console.log('Request format: ', req);
    // double check what format this will be
    var message = req.body;
    // edit the below newMessage as soon as we know what the bot server sends.
    var newMessage = {
      user: message.user,
      text: message.text,
      channel: message.channel,
      timestamp: message.ts
    };
    createMessage(newMessage)
      .then(function(createdMessage) {
        if(createdMessage) {
          res.json(createdMessage);
        }
      })
      .fail(function(err) {
        res.status(500).send(err);
      });
  });

  app.get('*', function(req, res) {
    res.sendfile(path.join(__dirname, '../public/views', 'index.html'));
  });
};