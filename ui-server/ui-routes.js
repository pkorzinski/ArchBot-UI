var Messages = require('./db/collections/messages.js');
var Message = require('./db/models/message.js');
var q = require('q');
//bind some functions to model

//export functions

module.exports = function(app) {

  // other routes

  app.get('*', function(req, res) {
    res.sendfile('ui-server/public/views/index.html');
  });
};
