const pinProject = require('./pin-project/pin-project.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pinProject);
}
