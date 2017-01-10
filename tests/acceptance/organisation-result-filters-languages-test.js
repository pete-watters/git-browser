import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import searchForOrganisation from 'git-browser/tests/helpers/custom/search-for-organisation';

moduleForAcceptance('Acceptance | organisation result filters');

test('Verify filtering results based on language works', function(assert) {
  searchForOrganisation();
  fillIn('#repositoryLanguageSearchString', 'JavaScript');

  andThen(function() {
    assert.equal(find('fieldset table tr').length, 21);
  });
});


test('Verify invalid term shows no result', function(assert) {
  searchForOrganisation();
  fillIn('#repositoryLanguageSearchString', 'FakeValue');

  andThen(function() {
    assert.equal(find('fieldset table tr').length, 1);
  });
});
