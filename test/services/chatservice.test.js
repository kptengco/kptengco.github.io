const assert = require('assert');
const app = require('../../src/app');

describe('\'chatservice\' service', () => {
  it('registered the service', () => {
    const service = app.service('chatservice');

    assert.ok(service, 'Registered the service');
  });
});
