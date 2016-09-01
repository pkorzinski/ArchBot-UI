// require a model for db
// require promises (q)

//bind some functions to model

//export functions

module.exports = function(app) {

  // other routes

  app.get('*', function(req, res) {
    res.sendfile('ui-server/public/views/index.html');
  });
};