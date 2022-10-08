// Initializes the `pinProject` service on path `/pinProject`
const { PinProject } = require('./pin-project.class');
const createModel = require('../../models/pin-project.model');
const hooks = require('./pin-project.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pinProject', new PinProject(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pinProject');

  service.hooks(hooks);
};
