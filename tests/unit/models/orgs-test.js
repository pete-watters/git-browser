import { describe, it } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Orgs', function() {
  setupModelTest('orgs', {
    // Specify the other units that are required for this test.
    needs: []
  });

  // Replace this with your real tests.
  it('exists', function() {
    var model = this.subject();
    // var store = this.store();
    expect(model).to.be.ok;
  });
});