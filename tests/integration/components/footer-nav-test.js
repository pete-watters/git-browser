import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('footer-nav', 'Integration | Component | footer nav', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{footer-nav}}`);

  assert.equal(this.$().text().trim(), 'Peter Watters - 2017');

  // Template block usage:
  this.render(hbs`
    {{#footer-nav}}
      template block text
    {{/footer-nav}}
  `);

  assert.equal(this.$().text().trim(), 'Peter Watters - 2017');
});
