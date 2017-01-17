import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | show branch information');

test('Toggling checkbox gets more information for branch', function(assert) {
  click('#repositoryPrivateFlag');
  andThen(function() {
    assert.equal(find('.form--organisationSearch input').length, 1);
  });
});

