const assert = require('assert');
const app = require('../../src/app');

describe('\'pinProject\' service', () => {
  it('registered the service', () => {
    const service = app.service('pinProject');

    assert.ok(service, 'Registered the service');
  });
});
