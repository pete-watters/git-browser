import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('organisation-search', 'Integration | Component | organisation search', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{organisation-search}}`);

  assert.equal(this.$().text().replace(/\s/g,''), 'GitHubOrganisationSearch');

  // Template block usage:
  this.render(hbs`
    {{#organisation-search}}
    {{/organisation-search}}
  `);

  assert.equal(this.$().text().replace(/\s/g,''), 'GitHubOrganisationSearch');
});
