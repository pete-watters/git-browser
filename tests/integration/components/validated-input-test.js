import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('ValidatedInputComponent', function() {
  setupComponentTest('validated-input', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  it('renders', function() {
    // creates the component instance
    var component = this.subject();
    expect(component._state).to.equal('preRender');

    // renders the component on the page
    this.render();
    expect(component._state).to.equal('inDOM');
  });
});