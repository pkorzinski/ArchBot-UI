var db = require('../config');

var TeamSchema = new db.Schema({
  key: { type: String, index: { unique: true, dropDups: true } },
  team: String,
  password: String
});
var Team = db.model('Team', TeamSchema);

module.exports = Team;