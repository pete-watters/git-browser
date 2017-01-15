import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import searchForOrganisation from 'git-browser/tests/helpers/custom/search-for-organisation';

moduleForAcceptance('Acceptance | search for organisation');

test('verify search for ember', function(assert) {
  searchForOrganisation();

  andThen(function() {
    assert.equal(find('fieldset strong').text(), 'Ember.js');
    assert.equal(find('fieldset img').attr('src'), 'https://avatars.githubusercontent.com/u/1253363?v=3');
    assert.equal(find('fieldset table tr').length, 31);
  });
});
