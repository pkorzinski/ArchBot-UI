var db = require('../config.js');

var MessageSchema = new db.Schema({
  id: { type: Number, unique: true, autoincrement: true },
  user: String,
  text: String,
  channel: String,
  timestamp: Date
});

module.exports = db.model('Message', MessageSchema);