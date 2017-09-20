// Initializes the `chatservice` service on path `/chatservice`
const createService = require('feathers-nedb');
const createModel = require('../../models/chatservice.model');
const hooks = require('./chatservice.hooks');
const filters = require('./chatservice.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'chatservice',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chatservice', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chatservice');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
