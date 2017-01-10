import { test } from 'qunit';
import moduleForAcceptance from 'git-browser/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | visit homepage');

test('visiting /visit-homepage', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
