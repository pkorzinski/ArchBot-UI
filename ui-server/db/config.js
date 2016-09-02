var mysql = require('mysql');
var bookshelf = require('bookshelf');

var connect = process.env.MYSQL_DATABASE_CONNECTION || "localhost";

var db = bookshelf.initialize({
  client: 'mysql',
  connection: {
    host: connect,
    user: root,
    password: "",
    database: "doge",
    charset: 'utf8'
  }
});

db.knex.schema.hasTable('messages').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('messages', function (message) {
      message.increments('id').primary();
      message.string('message', 512);
      message.string('user', 32)
      message.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
