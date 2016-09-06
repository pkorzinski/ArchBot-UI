var db = require('../config');
var MessageSchema = new db.Schema({
  id: { type: Number, unique: true, autoincrement: true },
  user: String,
  text: String,
  channel: String,
  timestamp: { type: Date, default: Date.now }
});
var Message = db.model('Message', MessageSchema);

module.exports = Message;