const chatservice = require('./chatservice/chatservice.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(chatservice);
};
