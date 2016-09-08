var db = require('../config');
var MessageSchema = new db.Schema({
  key: { type: Number, unique: true, autoincrement: true },
  id: String,
  user: String,
  text: String,
  channel: String,
  timestamp: { type: Date, default: Date.now }
});
var Message = db.model('Message', MessageSchema);

module.exports = Message;