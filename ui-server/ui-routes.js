var Message = require('../db/models/message');
var path= require('path');
var q = require('q');

// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// var indexComponent = require('./react/index');

var findMessage = q.nbind(Message.findOne, Message);
var createMessage = q.nbind(Message.create, Message);
var findAllMessages = q.nbind(Message.find, Message);

module.exports = function(app) {
  app.get('/api/messages/', function(req, res) {
    console.log('Retrieving all messages from database.');
    findAllMessages({})
      .then(function(messages) {
        res.json(messages);
      })
      .fail(function(err) {
        res.status(500).send(err);
      });
  });

  app.get('/api/messages/:username', function(req, res){
    findAllMessages({username: username})
      .then(function(messages) {
        res.json(messages);
      })
      .fail(function(err) {
        res.status(500).send(err);
      });
  });

  app.post('/api/messages/', function(req, res) {
    console.log('Posted message(s) to database.');
    req.body.forEach(function(item, index) {
      console.log('MESSAGE: ', item);
      createMessage({
        user: item.username,
        text: item.text,
        channel: item.channel,
        timestamp: item.ts
      })
      .then(function(createdMessage) {
        if(createdMessage) {
          res.json(createdMessage);
        }
      })
      .fail(function(err) {
        res.status(500).send(err);
      });
    });
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/views/index.html'));

    // converts react/index component to a react component
    // var ReactComponent = React.createElement(indexComponent, Object.assign({}, this.props, { more: 'values' }));
    // // renders the component to an html string
    // staticMarkup = ReactDOMServer.renderToString(ReactComponent);
    // // passes the html string into the view as indexComponentMarkup
    // res.render(__dirname + '/views/index', { indexComponentMarkup: staticMarkup });
  });
};