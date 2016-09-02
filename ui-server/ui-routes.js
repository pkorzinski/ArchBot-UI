var Message = require('./models/message.js')
var q = require('q');

var findMessage = q.nbind(Message.findOne, Message);
var createMessage = q.nbind(Message.create, Message);
var findAllMessages = q.nbind(Message.find, Message);

module.exports = function(app) {

  // other routes

  app.get('*', function(req, res) {
    res.sendfile('public/views/index.html');
  });
};
