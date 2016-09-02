var mysql = require('mysql');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_DATABASE_CONNECTION || "localhost",
    user: 'root',
    database: 'dogeBot'
  }
});
var bookshelf = require('bookshelf')(knex);
//var Message = require('./models/message.js');

// var Message = db.Model.extend({
//   tableName: "messages",
//   hasTimestamps: true
// })

knex.schema.hasTable('messages').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('messages', function (message) {
      message.increments('id').primary();
      message.string('message', 512);
      message.string('user', 32)
      message.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = {};
