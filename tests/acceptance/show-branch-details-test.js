import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';
import searchForOrganisation from 'git-browser/tests/helpers/custom/search-for-organisation';

moduleForAcceptance('Acceptance | show branch details');

test('Show branch details', function(assert) {
  searchForOrganisation();
  click('#repositoryPrivateFlag');

  andThen(function() {
    // match against known branch
    assert.equal(('.tr--branch-detail-results fieldset  strong:first').text(), 'emberjs/starter-kit​');
    assert.equal(('.tr--branch-detail-results fieldset  strong:last').text(), 'master');
  });
});

