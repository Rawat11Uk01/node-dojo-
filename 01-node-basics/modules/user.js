const events = require("events");

class User extends events.EventEmitter {
  constructor() {
    super();
  }
}

module.exports = User;
